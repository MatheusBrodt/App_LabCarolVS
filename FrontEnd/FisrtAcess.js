import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import styleFirstAcess from "./Styles/cssFirstAcess";

export default function F_Acess(props) {
    return(
        <View style={styleFirstAcess.container}>
            <ScrollView contentContainerStyle={styleFirstAcess.scroll}>
                <Text style={styleFirstAcess.text}>Primeiro Nome</Text>
                <TextInput placeholder='Primeiro nome...' style={styleFirstAcess.inputs} 
                            placeholderTextColor='#FFFF00'/>
                
                <Text style={styleFirstAcess.text}>Sobrenome</Text>
                <TextInput placeholder='Seu sobrenome...' style={styleFirstAcess.inputs} 
                        placeholderTextColor='#FFFF00'/>

                <Text style={styleFirstAcess.text}>Filial</Text>
                <TextInput placeholder='Ex.: 2064' style={styleFirstAcess.inputs} keyboardType='numeric'
                        placeholderTextColor='#FFFF00'/>
                
                <Text style={styleFirstAcess.text}>Cargo</Text>
                <TextInput placeholder='Ex.: Consultor' style={styleFirstAcess.inputs}
                        placeholderTextColor='#FFFF00'/>

                <Text style={styleFirstAcess.text}>E_Mail</Text>
                <TextInput placeholder='Ex.: nome_sobrenome@Outlook.com' style={styleFirstAcess.inputs}
                            keyboardType='email-address' placeholderTextColor='#FFFF00'/>

                <Text style={styleFirstAcess.text}>Senha</Text>
                <TextInput placeholder='Digite a senha...' style={styleFirstAcess.inputs} 
                        placeholderTextColor='#FFFF00'/>

                <Text style={styleFirstAcess.text}>Confirme a senha</Text>
                <TextInput placeholder='Repita a senha...' style={styleFirstAcess.inputs}
                        placeholderTextColor='#FFFF00'/>

                <Text style={styleFirstAcess.text}>Palavra Chave</Text>
                <TextInput placeholder='Ex.: Nome do seu pet.' style={styleFirstAcess.inputs}
                        placeholderTextColor='#FFFF00'/>

                <TouchableOpacity style={styleFirstAcess.button}>
                    <Text style={styleFirstAcess.textButton}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styleFirstAcess.buttonBack} 
                                onPress={() => props.navigation.navigate('LoginView')}>
                    <Text style={styleFirstAcess.textButton}>Voltar</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}