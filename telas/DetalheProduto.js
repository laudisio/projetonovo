import React from 'react';
import {Text,View, Image, StyleSheet, TextInput, Button, Alert, ScrollView,TouchableOpacity} from 'react-native';




const DetalheProduto= (props)=>{
    return (
       
    <ScrollView >{DetalheProduto}
     <Image style={styles.imagem}
       source={{uri:props.navigation.getParam("imagemDoProduto")}}/>

       <View style={styles.container}>
         <Text style={styles.descricao}>Quantidade: {props.navigation.getParam("unidadeDoProduto")}</Text>
       </View>
       <View style={styles.container}>
        <Text style={styles.descricao}>Preço Unidade: R$ {props.navigation.getParam("precoDoProduto")}</Text>
       </View>

       <View style={styles.entrada}>
        
        <Text style={styles.titulo}>Diminuir unidade</Text>
        <TextInput
        style={styles.entrada}
        autoCapitalize='none'
        blurOnSubmit
        autoCorrect={false}
        keyboardType="number-pad"
        maxLenth={2}
        />
        <View style={styles.botao}>
        <Button
        style={styles.botaoEntrada}
        title="Confirmar"
        />
       
        </View>
        
       </View>

       <View style={styles.entrada}>
        
        <Text style={styles.titulo}>Aumentar unidade</Text>
        <TextInput
        style={styles.entrada}
        autoCapitalize='none'
        blurOnSubmit
        autoCorrect={false}
        keyboardType="number-pad"
        maxLenth={2}
        
        />
        <View style={styles.botao}>
       
        <Button
        style={styles.botaoEntrada}
        title="Confirmar"/>
        </View>
        
       </View>
    
    </ScrollView>
    );
}

DetalheProduto.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam("nomeDoProduto")
    }
  }
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        elevation: 1.5,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3
        }
    },

    imagem:{
        height: 250,
        width: 300,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        margin: 50,
        borderRadius: 8
    },

    descricao:{
        color: '#121212',
        fontSize: 17,
        paddingLeft: 10,
        paddingRight: 20
    },

    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },

    entrada:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        backgroundColor: 'white',
        elevation: 4,
        padding: 12,
        borderRadius: 8,
        margin: 50
    },

    botao:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    botaoEntrada:{
        width: 50,
        textAlign: 'center'
    },

    text:{
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default DetalheProduto;
