import { Dimensions, StyleSheet } from "react-native";

const windonHeigth = Dimensions.get('window').height;

const styleRec_Pass = StyleSheet.create({
    container:{
        flex:1,
        marginTop:22,
        backgroundColor:'#000080'
    },
    scroll:{
        height:windonHeigth,
        alignItems:'center',
        backgroundColor:'#000080',
    },
    img:{
        height:'100%',
        width:'100%',
        borderRadius:10
    },
    viewLogo:{
        width:'97%',
        height:'15%',
        padding:'4%'
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
        marginTop:20,
        marginBottom:8,
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
        marginBottom:140,
        borderColor:'#000',
        borderWidth:1
    }
})

export default styleRec_Pass;