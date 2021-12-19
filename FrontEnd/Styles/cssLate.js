import { StyleSheet, Dimensions } from "react-native";

const windonHeigth = Dimensions.get('window').height;
const windonWidth = Dimensions.get('window').width;

const styleLate = StyleSheet.create({
    container:{
        height:windonHeigth,
        marginTop:22,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#191970'
    },
    title:{
        backgroundColor:'#191970',
        width:'100%',
        height:'10%',
        alignItems:'center',
        flexDirection:'row',
    },
    text_Title:{
        fontSize:30,
        fontWeight:'700',
        color:'#FFD700',
        marginLeft:'15%'
    },
    view_List:{
        width:'100%',
        height:'84%',
        backgroundColor:'#F8F8FF',
        marginTop:'4%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:'2%'
    },
    F_List:{
        width:windonWidth-10
    },
    card:{
        backgroundColor:'#DCDCDC',
        width:'100%',
        marginVertical:'1%',
        borderRadius:8,
        padding:'1%',
        flexDirection:'row'
    },
    inf:{
        width:'65%'
    },
    view_Icon:{
        width:'35%',
        alignItems:'center',
        justifyContent:'center'
    },
    textCard:{
        fontSize:18,
        fontWeight:'bold',
    },
    text_Data:{
        fontSize:16,
        fontWeight:'normal',
        fontStyle:'italic'
    }
})

export default styleLate;