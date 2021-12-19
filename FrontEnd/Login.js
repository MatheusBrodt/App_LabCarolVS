import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { Text, 
        View, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        SafeAreaView, 
        ScrollView, 
        ActivityIndicator } from 'react-native';

import {AntDesign, EvilIcons} from '@expo/vector-icons';

import styleLogin from './Styles/cssLogin';

function Warnig() {
  return(
    <View style={{alignItems:'center',
                  margin:8}}>
      <Text style={{color:'red', fontSize:15, fontStyle:'italic'}}>{msg}</Text>
      <Text style={{color:'red', fontSize:15, fontStyle:'italic'}}>{msg}</Text>
    </View>
  );
}

export default function Login(props) {

  

  const [msg, setMsg] = useState(null);
  const [use, setUse] = useState(false);
  const [password, setPassword] = useState(false);
  const [color, setColor] = useState('#000');
  const [load, setLoad] = useState(true);

  const onPress = () => setLoad(false)
  const enter = () => props.navigation.navigate('Master_View');
    
  return (
    <SafeAreaView style={styleLogin.container}>
      <ScrollView contentContainerStyle={styleLogin.scroll}
                  showsVerticalScrollIndicator={false}>
          <View style={styleLogin.viewLogo}>
            <Image source={require('../Imagens/logo_Carol.png')} style={styleLogin.img}/>
          </View>
          <View style={styleLogin.viewInf}>
            <Text style={styleLogin.userPass_text}>Usuário</Text>
            <TextInput style={styleLogin.inputs} placeholder='Digite seu usuário...' 
                       keyboardType='email-address'/>
              {use && <Text style={{color:'red', 
                                        fontStyle:'italic', 
                                        fontSize:15, 
                                        marginBottom:'2%'}}>Usuário Incorreto</Text>}

            <Text style={styleLogin.userPass_text}>Senha</Text>
            <TextInput style={styleLogin.inputs} placeholder='Digite sua senha...'
                        secureTextEntry = {true}
                        maxLength={8}/>
              {password && <Text style={{color:'red', 
                                        fontStyle:'italic', 
                                        fontSize:15, 
                                        marginBottom:'2%'}}>Senha Incorreta</Text>}

            <TouchableOpacity style={styleLogin.buttons}
                              onPress={() => 
                                        enter()}>                    
                {load?<Text style={styleLogin.textButton}>Entrar</Text>:<ActivityIndicator size={30} color={'#000'}/>}
            </TouchableOpacity>
            <TouchableOpacity style={styleLogin.buttons} 
                              onPress={() => props.navigation.navigate('First_Acess')}>
                <Text style={styleLogin.textButton}>Primeiro Acesso</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Rec_Pass')}>
                <Text style={styleLogin.recPass}>Esqueceu a senha?</Text>
            </TouchableOpacity>

          </View>
          <View style={styleLogin.viewVersion}>
            <Text style={styleLogin.textVersion}>Versão 1.0.1</Text>
          </View>
          <StatusBar style='inverted' backgroundColor='#000080'/>
      </ScrollView>
    </SafeAreaView>
  );
}
