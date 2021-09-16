
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar'

import { Conteudo, Container } from './styled'
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { useState, useEffect, useRef } from 'react';

import Api from '../../service/api'
const api = new Api();



export default function DevStore() {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [precoDe, setPrecoDe] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precoPor, setPrecoPor] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [estoque, setEstoque] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    const loading = useRef(null);

    async function listar() {
        loading.current.continuousStart();  

        let r = await api.listarProdutos();
        setProdutos(r);

        loading.current.complete()
    }

    async function inserir() {
        if (idAlterando === 0) {
            let r = await api.inserirProduto(nome, precoDe, categoria, precoPor, avaliacao, estoque, link, descricao);

            if (r.erro) 
                toast.error(`${r.erro}`);
            else 
                toast.dark('🗿 Produto Inserido');
        } else {
            let r = await api.alterar(idAlterando, nome, precoDe, categoria, precoPor, avaliacao, estoque, link, descricao);

            if (r.erro) 
                toast.error(`${r.erro}`);
            else
                toast.dark('🗿 Produto alterado');
        }

        limparCampos();
        listar();
    }

    async function limparCampos() {
        setNome('');
        setPrecoDe('');
        setCategoria('');
        setPrecoPor('');
        setAvaliacao('');
        setEstoque('');
        setLink('');
        setDescricao('');
        setIdAlterando(0);
    }

    async function remover(id) {
          confirmAlert({
              title: 'Remover produto',
              message: `Tem certeza que deseja remover o produto ${id}?`,
              buttons: [
                  {
                      label: 'Sim',
                      onClick: async () => {
                          let r = await api.remover(id);
                          if (r.erro)
                              toast.error(`${r.erro}`);
                          else {
                            toast.dark('🗿 Produto removido')
                            listar();
                          }   
                      }
                  },
                  {
                      label: 'Não'
                  }
              ]
          });
    }

    async function editar(item) {
        setNome(item.nm_produto);
        setPrecoDe(item.vl_preco_de);
        setCategoria(item.ds_categoria);
        setPrecoPor(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setEstoque(item.qtd_estoque);
        setLink(item.img_produto);
        setDescricao(item.ds_produto);
        setIdAlterando(item.id_produto)
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <Container> 
            <ToastContainer />
            <LoadingBar color="#119FDC" ref={loading} />
            <Menu />
            <Conteudo> 
              <Cabecalho/>
              <div className="tabelas-e-inputs">
                <div className="box-cadastro-editar">
                    <div className="titulo-barra">
                    <div className="barra-novo"></div>
                    <div className="titulo-novo"> {idAlterando == 0 ? "Novo Produto" : "Alterando Produto " + idAlterando} </div>
                    </div>
                    <div className="inputs-botao">
                        <div className="campo-input"> Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> </div>
                        <div className="campo-input"> Preço de: <input type="text" value={precoDe} onChange={e => setPrecoDe(e.target.value)}/> </div>
                        <div className="campo-input"> Categoria: <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} /> </div>
                        <div className="campo-input"> Preço por: <input type="text" value={precoPor} onChange={e => setPrecoPor(e.target.value)} /> </div>
                        <div className="campo-input"> Avaliação: <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div>
                        <div className="campo-input"> Estoque: <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)} /> </div>
                        <div className="campo-input-imagem"> Link Imagem: <input type="text" value={link} onChange={e => setLink(e.target.value)} /> </div>
                        <div className="campo-textarea"> Descrição: <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />  </div>
                        <div className="botao-cadastro"> <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar"}  </button> </div>
                    </div>
                </div>
                <div className="box-tabela"> 
                    <div className="titulo-barra">
                        <div className="barra-tabela"></div>
                        <div className="titulo-tabela"> Produtos Cadastrados </div>
                    </div>
                    <table className="tabela-alunos"> 
                        <thead>
                            <tr>
                                <th>  </th> 
                                <th> ID </th>
                                <th> Produto </th>
                                <th> Categoria </th>
                                <th> Preço </th>
                                <th> Estoque </th>
                                <th className="coluna-acao"> </th>
                                <th className="coluna-acao"> </th>
                            </tr> 
                        </thead>
                        <tbody>
                          {produtos.map((item, i) =>
                                <tr className={i % 2 == 0 ? "linha-alternada" : ""}>
                                    <td> <img src={item.img_produto} alt="" /> </td>
                                    <td> {item.id_produto} </td>
                                    <td title={item.nm_produto}>
                                        {item.nm_produto != null && item.nm_produto.length >= 25 
                                             ? item.nm_produto.substr(0, 25) + '...'
                                             : item.nm_produto}
                                    </td>
                                    <td> {item.ds_categoria} </td>
                                    <td> {item.vl_preco_por} </td>
                                    <td> {item.qtd_estoque} </td>
                                    <td className="coluna-acao"> <button onClick={() => editar(item)}> <img src="/assets/images/edit.svg" alt="" /> </button>  </td>
                                    <td className="coluna-acao"> <button onClick={() => remover(item.id_produto) }> <img src="/assets/images/trash.svg" alt="" /> </button>  </td>
                                </tr>
                          )}
                        </tbody>
                    </table>
                </div>
            </div>
            </Conteudo>
        </Container>
    )
} 