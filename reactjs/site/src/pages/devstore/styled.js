import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;

  font-family: 'Roboto', sans-serif;
`

const Conteudo = styled.div`

    width: 100%;

    .tabelas-e-inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em 3em;
    background: linear-gradient(0deg, #f5f5f5, #f5f5f5), #f5f5f5;
    }

    .box-cadastro-editar {
    background-color: #ffffff;
    padding: 2em 8em 2em 2em;
    margin-bottom: 2em;

    width: 100%;
    }

    .titulo-barra {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 1em;
    }

    .barra-novo {
    width: 26px;
    height: 0px;

    border: 3px solid #10EAEA;
    border-radius: 20px;
    transform: rotate(-90deg);

    margin-right: 0.2em;
    }

    .titulo-novo {
    color: #3c3939;
    font-weight: bold;
    font-size: 1.8em;
    }

    .inputs-botao {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    }

    .inputs-botao div:nth-child(1) {
    margin: 0em 4.4em 0.8em 3em !important;
    }

    .inputs-botao div:nth-child(5) {
        margin-right: 4.7em !important;
    }

    .campo-input {
    margin: 0em 4em 0.8em 1.45em;
    }

    .campo-input > input {
    width: 13.06em;
    height: 2.2em;

    background-color: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;

    outline: none;

    padding: .6em;
    }

    .campo-input-imagem {
    margin-bottom: 0.8em;
    }

    .campo-input-imagem input {
    width: 38.6em;
    height: 2.2em;

    background-color: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;

    outline: none;

    padding: .6em;
    }

    .campo-textarea {
        display: flex;
        text-align: center;

        margin-left: 1.2em;
    }

    .campo-textarea textarea {
    background-color: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;

    width: 38.5em;
    height: 10em;
    resize: none;

    margin: 0em 1.4em 0em 0.5em;
    padding: .5em;
    }

    .botao-cadastro button {
    background-color: #119FDC;
    color: white;

    outline: none;
    border-radius: 20px;
    border: none;

    padding: 0.5em 0.7em;

    margin-top: 8em;
    }

    .box-tabela {
    background-color: #ffffff;
    padding: 2em;
    width: 100%;
    }

    .barra-tabela {
    width: 26px;
    height: 0px;

    border: 3px solid #10EAEA;
    border-radius: 20px;
    transform: rotate(-90deg);

    margin-right: 0.2em;
    }

    .titulo-tabela {
    color: #3c3939;
    font-weight: bold;
    font-size: 1.8em;
    }

    .tabela-alunos {
    border-collapse: collapse;
    }

    table {
    margin-top: 2em;
    width: 100%;
    }

    thead {
    background-color: #6CC3DF;
    }

    th {
    height: 61.93px;
    text-align: left;
    padding: 1em;
    color: #fff;
    }

    tbody {
    background-color: #f5f5f5;
    }

    td {
    text-align: left;
    height: 61.93px;
    padding: 1em;
    color: #6d6868;
    font-weight: 600;
    }

    td > button {
    border-radius: 70px;
    background-color: #565656;

    width: 31px;
    height: 31px;

    border: none;
    outline: none;

    padding-top: .2em;
    }

    .coluna-acao {
    width: .1em;
    }
`

export { Container, Conteudo };