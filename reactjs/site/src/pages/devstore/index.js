
import { Container, Conteudo } from './styled'
import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

export default function DevStore() {
    return (
        <Container> 
            <Menu />
            <Conteudo> 
              <Cabecalho/>
              <div className="tabelas-e-inputs">
                <div className="box-cadastro-editar">
                    <div className="titulo-barra">
                    <div className="barra-novo"></div>
                    <div className="titulo-novo">Novo Produto</div>
                    </div>
                    <div className="inputs-botao">
                        <div className="campo-input"> Nome: <input/> </div>
                        <div className="campo-input"> Preço de: <input/> </div>
                        <div className="campo-input"> Categoria: <input/> </div>
                        <div className="campo-input"> Preço por: <input/> </div>
                        <div className="campo-input"> Avaliação: <input/> </div>
                        <div className="campo-input"> Estoque: <input/> </div>
                        <div className="campo-input-imagem"> Link Imagem: <input/> </div>
                        <div className="campo-textarea"> Descrição: <textarea/>  </div>
                        <div className="botao-cadastro"> <button> Cadastrar </button> </div>
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
                        <tr>
                            <td> </td>
                            <td> 1 </td>
                            <td> Óculos do Kamina </td>
                            <td> Óculos </td>
                            <td> R$ 4.99 </td>
                            <td> 23 </td>
                            <td className="coluna-acao"> <button> <img src="/assets/images/edit.svg" alt="" /> </button>  </td>
                            <td className="coluna-acao"> <button> <img src="/assets/images/trash.svg" alt="" /> </button>  </td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td> 1 </td>
                            <td> Wallpaper Gengar </td>
                            <td> Imagens </td>
                            <td> R$ 4.99 </td>
                            <td> 23 </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>  </td>
                            <td> 1 </td>
                            <td> Wallpaper Gengar </td>
                            <td> Imagens </td>
                            <td> R$ 4.99 </td>
                            <td> 23 </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td> 1 </td>
                            <td> Wallpaper Gengar </td>
                            <td> Imagens </td>
                            <td> R$ 4.99 </td>
                            <td> 23 </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </Conteudo>
        </Container>
    )
} 