import { Dimensions, StyleSheet } from "react-native";

const {width, heigth} = Dimensions.get('window');

const styleFirstAcess = StyleSheet.create({
    container:{
        flex:1,
        marginTop:22,
    },
    scroll:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000080',
        paddingTop:10
    },
    inputs:{
        width:'80%',
        height:40,
        borderColor:'#FFFF00',
        borderBottomWidth:1.5,
        color:'#FFFF00',
        fontStyle:'italic',
        marginBottom:4,
        fontSize:15
    },
    text:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'700'
    },
    button:{
        height:35,
        width:'70%',
        borderRadius:20,
        backgroundColor:'#FFD700',
        marginTop:12,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#000',
        borderWidth:1
    },
    textButton:{
        fontSize:19,
        color:'#000',
        fontWeight:'500'
    },
    buttonBack:{
        height:30,
        width:'50%',
        borderRadius:20,
        backgroundColor:'#FF0000',
        marginTop:12,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        borderColor:'#000',
        borderWidth:1
    }
})

export default styleFirstAcess;