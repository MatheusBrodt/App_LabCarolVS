import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Entypo, 
        AntDesign, 
        Ionicons, 
        MaterialCommunityIcons, 
        FontAwesome5, 
        MaterialIcons} from '@expo/vector-icons';

import * as data from '../dados.json';

import style_MasterView from "./Styles/cssMasterView";

export default function M_View(props) {
    console.log(props);

    const[ret, setRet] = useState(true);

    function Read() {
        if (ret === true) {
            return(
                <View style={{justifyContent:'center',
                              alignItems:'center'
                }}>
                    <Entypo name='emoji-happy' size={40} color={'#000'} style={{marginTop:'8%',
                                                                                marginBottom:'2%'}}/>
                    <Text style={{fontSize:16,
                                  fontStyle:'italic',
                                  fontWeight:'600'}}>Você não tem serviços em retrabalho!</Text>
                </View>
            );
        } else {
            return(
                <View></View>
            );
        }
    }

    return(
            <LinearGradient  colors = {['#191970' ,  '#0000FF']} style={style_MasterView.container}>
                <View style={style_MasterView.title}>
                    <Text style={style_MasterView.textTitle}>Laboratório Digital</Text>
                </View>

                <View style={style_MasterView.viewUser}>
                    <Text style={style_MasterView.name}>Olá {data.users.name}</Text>
                    <Text style={style_MasterView.store}>Filial: 
                        <Text style={style_MasterView.dataText}> {data.users.store}</Text>
                    </Text>
                    <Text style={style_MasterView.ocupation}>Cargo: 
                        <Text style={style_MasterView.dataText}> {data.users.ocupation}</Text>
                    </Text>
                </View>

                <View style={style_MasterView.view_Buttons}>
                    <ScrollView contentContainerStyle={style_MasterView.scroll_Buttons}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity style={style_MasterView.buttons}
                                          onPress={() => props.navigation.navigate('Stock_View')}>
                        <MaterialIcons name="inventory" size={50} color="#000080" />
                            <Text style={{fontSize:18, color:'#000080'}}>Estoque</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style_MasterView.buttons}
                                          onPress={() => props.navigation.navigate('Serv_View')}>
                            <FontAwesome5 name="glasses" size={50} color="#000080" />
                            <Text style={{fontSize:18, color:'#000080'}}>Serviços</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style_MasterView.buttons}
                                          onPress={() => props.navigation.navigate('Vta_View')}>
                            <Ionicons name={'glasses-outline'} size={70} color={'#000080'}/>
                            <Text style={{fontSize:18, color:'#000080', marginBottom:'16%'}}>VTA's</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style_MasterView.buttons}
                                          onPress={() => props.navigation.navigate('Late_View')}>
                        <MaterialCommunityIcons name="folder-clock-outline" size={50} color="#000080" />
                            <Text style={{fontSize:18, color:'#000080', marginTop:'5%'}}>Atrasados</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style_MasterView.buttons}
                                          onPress={() => props.navigation.navigate('LoginView')}>
                            <Ionicons name={'exit-outline'} size={50} color={'#000080'}/>
                            <Text style={{fontSize:18, color:'#000080', marginTop:'5%'}}>Sair</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={style_MasterView.informations}>
                    <Text style={{fontSize:24,
                                  fontWeight:'700',
                                  marginBottom:'2%'
                    }}>Retrabalhos</Text>
                    <Read/>
                </View>


                <StatusBar style='inverted' backgroundColor='#191970'/>
            </LinearGradient>
            
            
    );
}