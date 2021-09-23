import axios from 'axios'
const api = axios.create({
    baseURL: 'https://devstore-api.herokuapp.com'
})

export default class Api { 
    async listarProdutos() {
        let r = await api.get('/produto');
        return r.data;
    }

    async inserirProduto(nome, precoDe, categoria, precoPor, avaliacao, estoque, link, descricao) {
        let r = await api.post('/produto', { nome, precoDe, categoria, precoPor, avaliacao, estoque, link, descricao } );
        return r.data;
    }

    async alterar(id, nome, precoDe, categoria, precoPor, avaliacao, estoque, link, descricao) {
        let r = await api.put('/produto/' + id, { nome, precoDe, categoria, precoPor, avaliacao, estoque, link, descricao } );
        return r.data;
    }

    async remover(id) {
        let r = await api.delete('/produto/' + id);
        return r.data;
    }
}