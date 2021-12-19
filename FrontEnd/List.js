import React, {useState} from "react";
import {View, FlatList, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import {Entypo} from '@expo/vector-icons';

import * as data from '../services.json'

export default function List_View(props) {

    const [verif, setVerfif] = useState(props.Seq_Verif);
    console.log(verif)

    if (verif === true) {
        return(
            <FlatList
            contentContainerStyle={style.F_List}
            showsVerticalScrollIndicator={false}
            data={data.services}
            keyExtractor={item=>item.id}
            renderItem={({item}) => 
                <View style={style.card}>
                    <View style={style.inf}>
                        <Text>Loja: {item.store}</Text>
                        <Text>Sequência: {item.seq}</Text>
                        <Text>Tipo: {item.type}</Text>
                        <Text>Situação: {item.situation}</Text>
                        <Text>Previsão: {item.prev}</Text>
                        <Text>Caixa: {item.box}</Text>
                    </View>
                    <View style={style.view_Buttons}>

                    </View>
                </View>
                }
            />
        )
    } else {
        return(
            <View style={{justifyContent:'center',
                              alignItems:'center'
                }}>
                    <Entypo name='emoji-sad' size={40} color={'#000'} style={{marginTop:'8%',
                                                                                marginBottom:'2%'}}/>
                    <Text style={{fontSize:16,
                                  fontStyle:'italic',
                                  fontWeight:'600'}}>Serviço não encontrado!</Text>
                </View>
        )
    }
}

const windonWidth = Dimensions.get('window').width;
const windonHeigth = Dimensions.get('window').height;

const style = StyleSheet.create({
    F_List:{
        width:windonWidth-10
    },
    card:{
        backgroundColor:'#DCDCDC',
        width:'100%',
        marginVertical:'1%',
        borderRadius:8,
        padding:'1%',
        flexDirection:'row'
    },
    inf:{
        width:'65%'
    },
    view_Buttons:{
        width:'35%',
    }
})