import React, {useState} from "react";
import { View, FlatList, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as data from '../services.json'

import styleLate from "./Styles/cssLate";

export default function Late_View(props) {

    const [verif, setVerif] = useState(true);
    const [load, setLoad] = useState(true);

    function List_View() {
        if (verif === true) {
            return(
                <FlatList
                contentContainerStyle={styleLate.F_List}
                showsVerticalScrollIndicator={false}
                data={data.services}
                keyExtractor={item=>item.id}
                renderItem={({item}) => 
                    <View style={styleLate.card}>
                        <View style={styleLate.inf}>
                            <Text style={styleLate.textCard}>Loja: 
                                <Text style={styleLate.text_Data}> {item.store}</Text>
                            </Text>
                            <Text style={styleLate.textCard}>Sequência: 
                                <Text style={styleLate.text_Data}> {item.seq}</Text>
                            </Text>
                            <Text style={styleLate.textCard}>Tipo: 
                                <Text style={styleLate.text_Data}> {item.type}</Text>
                            </Text>
                            <Text style={styleLate.textCard}>Situação: 
                                <Text style={styleLate.text_Data}> {item.situation}</Text>
                            </Text>
                            <Text style={styleLate.textCard}>Previsão: 
                                <Text style={styleLate.text_Data}> {item.prev}</Text>
                            </Text>
                            <Text style={styleLate.textCard}>Caixa: 
                                <Text style={styleLate.text_Data}> {item.box}</Text>
                            </Text>
                        </View>
                        <View style={styleLate.view_Icon}>
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
                        <Entypo name='emoji-happy' size={40} color={'#000'} style={{marginTop:'8%',
                                                                                  marginBottom:'2%'}}/>
                        <Text style={{fontSize:16,
                                      fontStyle:'italic',
                                      fontWeight:'600'}}>Não tem serviços em atraso!</Text>
                    </View>
            )
        }
    }

    return(
        <View style={styleLate.container}>
            <View style={styleLate.title}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Master_View')}>
                    <AntDesign name="back" size={30} color="#FFD700" style={{marginLeft:'3%'}}/>
                </TouchableOpacity>
                <Text style={styleLate.text_Title}>Atrasados</Text>
            </View>

            <View style={styleLate.view_List}>
                {load?<List_View/>:<ActivityIndicator size={70} color="#191970" />}
            </View>
        </View>
    );
}