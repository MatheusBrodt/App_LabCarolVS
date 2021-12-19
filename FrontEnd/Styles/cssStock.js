import { StyleSheet, Dimensions } from 'react-native';

const windonHeigth = Dimensions.get('window').height;
const windonWidth = Dimensions.get('window').width;

const styleStock = StyleSheet.create({
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
    view_Inputs:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        height:'11%',
        backgroundColor:'#191970'
    },
    text_Inputs:{
        fontSize:18,
        fontStyle:"italic",
        color:'#FFF'
    },
    inputs:{
        width:'80%',
        height:'50%',
        fontSize:15,
        backgroundColor:'#FFF',
        borderRadius:3,
        paddingLeft:3
    },
    button:{
        backgroundColor:'#FFD700',
        width:'35%',
        height:'6%',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:3,
        marginTop:'3%'
    },
    text_Button:{
        fontSize:18,
        fontWeight:'700',
    },
    view_List:{
        width:'100%',
        height:'70%',
        backgroundColor:'#F8F8FF',
        marginTop:'2%',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        justifyContent:'flex-start'
    }
})

export default styleStock;