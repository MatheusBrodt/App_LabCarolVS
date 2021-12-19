import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, FlatList, TouchableOpacity, Text, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styleStock from "./Styles/cssStock";

export default function Stock_View(props) {
    return(
        <View style={styleStock.container}>
            <View style={styleStock.title}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Master_View')}>
                    <AntDesign name="back" size={30} color="#FFD700" style={{marginLeft:'3%'}}/>
                </TouchableOpacity>
                <Text style={styleStock.text_Title}>Estoque</Text>
            </View>

            <View style={styleStock.view_Inputs}>
                <View style={{width:'34%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Text style={styleStock.text_Inputs}>Esférico</Text>
                    <TextInput style={styleStock.inputs} placeholder={'Ex: +0,25'}/>
                </View>
                <View style={{width:'34%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Text style={styleStock.text_Inputs}>Cilíndrico</Text>
                    <TextInput style={styleStock.inputs} placeholder={'Ex: -0,50'}/>
                </View>
                <View style={{width:'34%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Text style={styleStock.text_Inputs}>Adição</Text>
                    <TextInput style={styleStock.inputs} placeholder={'Ex: 1,00'}/>
                </View>
            </View>
            <TouchableOpacity style={styleStock.button}>
                <Text style={styleStock.text_Button}>Procurar</Text>
            </TouchableOpacity>

            <View style={styleStock.view_List}>

            </View>

            <StatusBar style='inverted' backgroundColor='#191970'/>
        </View>
    ); 
}