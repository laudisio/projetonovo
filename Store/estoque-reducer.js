import { ADD_PRODUTO } from "./estoque-actions";
import Produto from '../modelo/Produto'

const estadoInicial={
    produtos:[]
};
export default(estado = estadoInicial,action)=>{
    switch(action.type){
        case ADD_PRODUTO:
            const p = new Produto(new Date().toString(), action.dadosProduto.nomeProduto, action.dadosProduto.precoProduto,
            action.dadosProduto.unidadeProduto, action.dadosProduto.codigoProduto, action.dadosProduto.imagem);
            console.log(JSON.stringify(p))
            return{
                produtos:estado.produtos.concat(p)
            };
        default:
            console.log('aqui'+JSON.stringify(action))
            return estado;
    }
}