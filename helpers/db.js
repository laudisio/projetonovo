import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('produto.db');

export const init = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_produto (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, quantidade TEXT NOT NULL, preco TEXT NOT NULL);',
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}

export const inserirProduto = (nome, quantidade) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_produto (nome, quantidade) VALUES (?,?);',
                [nome, quantidade],
                () => { resolve() },
                (_, err) => { reject(err) }
            );
        });
    });
    return promise;
}