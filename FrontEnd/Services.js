import React, {useState} from "react";
import { View, 
        TouchableOpacity, 
        Text, TextInput, 
        StyleSheet, 
        Dimensions, 
        FlatList, 
        ActivityIndicator} from 'react-native';
import { Entypo, AntDesign } from "@expo/vector-icons";
import * as data from '../services.json'

import styleServices from "./Styles/cssServices";

export default function Serv_View(props) {

    const [seq, setSeq] = useState(null);
    const [verif, setVerif] = useState(true);
    const [load, setLoad] = useState(true);

    function List_View() {
        if (verif === true) {
            return(
                <FlatList
                contentContainerStyle={styleServices.F_List}
                showsVerticalScrollIndicator={false}
                data={data.services}
                keyExtractor={item=>item.id}
                renderItem={({item}) => 
                    <View style={styleServices.card}>
                        <View style={styleServices.inf}>
                            <Text style={styleServices.textCard}>Loja: 
                                <Text style={styleServices.text_Data}> {item.store}</Text>
                            </Text>
                            <Text style={styleServices.textCard}>Sequência: 
                                <Text style={styleServices.text_Data}> {item.seq}</Text>
                            </Text>
                            <Text style={styleServices.textCard}>Tipo: 
                                <Text style={styleServices.text_Data}> {item.type}</Text>
                            </Text>
                            <Text style={styleServices.textCard}>Situação: 
                                <Text style={styleServices.text_Data}> {item.situation}</Text>
                            </Text>
                            <Text style={styleServices.textCard}>Previsão: 
                                <Text style={styleServices.text_Data}> {item.prev}</Text>
                            </Text>
                            <Text style={styleServices.textCard}>Caixa: 
                                <Text style={styleServices.text_Data}> {item.box}</Text>
                            </Text>
                        </View>
                        <View style={styleServices.view_Icon}>
                            <AntDesign name={item.icon} size={100} color={item.color}/>
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


    return(
        <View style={styleServices.container}>
            <View style={styleServices.title}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Master_View')}>
                    <AntDesign name="back" size={30} color="#FFD700" style={{marginLeft:'3%'}}/>
                </TouchableOpacity>
                <Text style={styleServices.text_Title}>Serviços</Text>
            </View>

            <View style={styleServices.view_Input}>
                <Text style={{fontSize:20, fontStyle:"italic", color:'#FFF', marginBottom:'1%'}}>Sequência</Text>
                <TextInput style={styleServices.inputs} placeholder='Ex.: 1234'
                           onChangeText={setSeq}/>
                <TouchableOpacity style={styleServices.button}
                           onPress={() => Search}>
                    <Text style={styleServices.text_Button}>Buscar</Text>
                </TouchableOpacity>
            </View>

            <View style={styleServices.view_List}>
                {load?<List_View/>:<ActivityIndicator size={70} color="#191970" />}
            </View>
        </View>
    );
}

