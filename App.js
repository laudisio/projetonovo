import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import{Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import estoqueReducer from './Store/estoque-reducer';
import EstoqueNavigator from './Navegacao/EstoqueNavigator';
import {init} from './helpers/db';

init()
	.then(() => {
		console.log("Deu certo a criação da base")
	})
	.catch ((err) => {
		console.log("Falhou a criação da base: " + err)
	});
	
const rootReducer = combineReducers({
	produtos:estoqueReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App(){
	return (
		<Provider store={store}>
			<EstoqueNavigator/>
		</Provider>
	);
}