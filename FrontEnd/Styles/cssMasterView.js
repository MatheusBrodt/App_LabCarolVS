import { StyleSheet, Dimensions } from "react-native";

const windonHeigth = Dimensions.get('window').height;
const windonWidth = Dimensions.get('window').width;

const style_MasterView = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:22
    },
    viewUser:{
        justifyContent:"center",
        width:'95%',
        height:'17%',
        backgroundColor:'#FFD700',
        marginTop:'3%',
        marginBottom:'6%',
        borderRadius:10,
        padding:5,
        shadowColor:'#000',
        shadowOpacity: 1,
        elevation:20,
        borderColor:'#808080',
        borderWidth:0.5
    },
    name:{
        fontSize:20,
        fontStyle:'italic',
        marginLeft:'2%',
        marginBottom:'2%',
        fontWeight:'600'
    },
    store:{
        fontSize:17,
        marginLeft:'1%',
        marginBottom:'1%',
        fontStyle:'italic'
    },
    ocupation:{
        fontSize:17,
        marginLeft:'1%',
        marginBottom:'1%',
        fontStyle:'italic'
    },
    textTitle:{
        color:'#FFD700',
        fontSize:35,
        marginTop:'1%',
        fontWeight:'700'
    },
    dataText:{
        fontSize:18,
        fontWeight:'700'
    },
    view_Buttons:{
        height:'20%',
        width:'100%',
        marginBottom:'8%'
    },
    scroll_Buttons:{
        height:'100%',
        width:680,
        paddingLeft:'1.5%',
        paddingRight:'1.5%',
        paddingTop:'1%',
        paddingBottom:'1%',
    },
    buttons:{
        height:'100%',
        width:120,
        backgroundColor:'#FFD700',
        shadowColor:'#000',
        shadowOpacity:0.5,
        elevation:2,
        borderRadius:15,
        borderColor:'#FFF',
        borderWidth:0.5,
        marginHorizontal:'1%',
        alignItems:'center',
        justifyContent:'center'
    },
    informations:{
        width:'100%',
        height:'60%',
        backgroundColor:'#F8F8FF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:"flex-start",
        alignItems:'center',
        padding:'1%',
    }
})

export default style_MasterView;