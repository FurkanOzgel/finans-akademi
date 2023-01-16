import { StyleSheet, Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export default StyleSheet.create({
    greeting:{
        color:"white",
        fontSize:40,
        fontWeight:"bold",
        textAlignVertical:"bottom",
        margin:20,
        marginTop:-20,
    },
    cardTitle:{
        color:"black",
        fontSize: 17,
        margin:20
    },
    complatedCardTitle:{
        color:"white",
        fontSize: 17,
        margin:20,
        fontWeight:"bold"
    },
    cardContainer:{
        margin: 5,
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:15,
        height: Dimensions.get('window').height / 10,
        backgroundColor:'white',
        flexDirection:"row",
        elevation:5,
        borderWidth:0.5,
        borderColor:"#fefefe"
    },
    complatedCard:{
        margin: 5,
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:15,
        height: Dimensions.get('window').height / 10,
        backgroundColor:"#25D366",
        flexDirection:"row",
        elevation:5,
        borderColor:"#fefefe"
    },
    topImg:{
        marginTop:-60,
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        justifyContent:"flex-end"

    },
    topContainer:{
        backgroundColor:"#585BFF",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        marginBottom:10
    }
})