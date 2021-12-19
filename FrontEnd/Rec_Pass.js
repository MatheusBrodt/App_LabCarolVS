import React from "react";
import { View, ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import styleRec_Pass from "./Styles/cssRec_Pass";

export default function Rec(props) {
    return(
        <View style={styleRec_Pass.container}>
            <ScrollView contentContainerStyle={styleRec_Pass.scroll}>
                <View style={styleRec_Pass.viewLogo}>
                    <Image source={require('../Imagens/logo_Carol.png')} style={styleRec_Pass.img}/>
                </View>

                <Text style={styleRec_Pass.text}>Palavra Chave</Text>
                <TextInput style={styleRec_Pass.inputs} placeholderTextColor='#FFD700' 
                           placeholder='Ex.: Nome do seu pet.'/>

                <Text style={styleRec_Pass.text}>Nova Senha</Text>
                <TextInput style={styleRec_Pass.inputs} placeholderTextColor='#FFD700' 
                           placeholder='Nova senha...' secureTextEntry={true}/>

                <Text style={styleRec_Pass.text}>Repita a Senha</Text>
                <TextInput style={styleRec_Pass.inputs} placeholderTextColor='#FFD700' 
                           placeholder='Repita a nova senha...' secureTextEntry={true}/>

                <TouchableOpacity style={styleRec_Pass.button}>
                    <Text style={styleRec_Pass.textButton}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styleRec_Pass.buttonBack} 
                                  onPress={() => props.navigation.navigate('LoginView')}>
                    <Text style={styleRec_Pass.textButton}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}