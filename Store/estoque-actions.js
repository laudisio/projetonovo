export const ADD_PRODUTO = 'ADD_PRODUTO';

export const addProduto = (nomeProduto, precoProduto, unidadeProduto, codigoProduto, imagem)=>{
    return{
        type:ADD_PRODUTO, dadosProduto:{nomeProduto:nomeProduto, precoProduto:precoProduto,
            unidadeProduto:unidadeProduto, codigoProduto: codigoProduto, imagem:imagem}
    }
}