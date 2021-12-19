import React, {useState} from "react";
import { View, FlatList, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as data from '../services.json'

import styleVTA from "./Styles/cssVTAs";

export default function Vta_View(props) {

    const [verif, setVerif] = useState(false);
    const [load, setLoad] = useState(true);

    function List_View() {
        if (verif === true) {
            return(
                <FlatList
                contentContainerStyle={styleVTA.F_List}
                showsVerticalScrollIndicator={false}
                data={data.services}
                keyExtractor={item=>item.id}
                renderItem={({item}) => 
                    <View style={styleVTA.card}>
                        <View style={styleVTA.inf}>
                            <Text style={styleVTA.textCard}>Loja: 
                                <Text style={styleVTA.text_Data}> {item.store}</Text>
                            </Text>
                            <Text style={styleVTA.textCard}>Sequência: 
                                <Text style={styleVTA.text_Data}> {item.seq}</Text>
                            </Text>
                            <Text style={styleVTA.textCard}>Tipo: 
                                <Text style={styleVTA.text_Data}> {item.type}</Text>
                            </Text>
                            <Text style={styleVTA.textCard}>Situação: 
                                <Text style={styleVTA.text_Data}> {item.situation}</Text>
                            </Text>
                            <Text style={styleVTA.textCard}>Previsão: 
                                <Text style={styleVTA.text_Data}> {item.prev}</Text>
                            </Text>
                            <Text style={styleVTA.textCard}>Caixa: 
                                <Text style={styleVTA.text_Data}> {item.box}</Text>
                            </Text>
                        </View>
                        <View style={styleVTA.view_Icon}>
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
                                      fontWeight:'600'}}>Não tem serviço aguardando armação!</Text>
                    </View>
            )
        }
    }

    return(
        <View style={styleVTA.container}>
            <View style={styleVTA.title}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Master_View')}>
                    <AntDesign name="back" size={30} color="#FFD700" style={{marginLeft:'3%'}}/>
                </TouchableOpacity>
                <Text style={styleVTA.text_Title}>VTA's</Text>
            </View>

            <View style={styleVTA.view_List}>
                {load?<List_View/>:<ActivityIndicator size={70} color="#191970" />}
            </View>
        </View>
    );
}