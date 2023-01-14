import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    greeting:{
        color:"white",
        fontSize:40,
        fontWeight:"bold",
        textAlignVertical:"bottom",
        marginLeft:20,
        marginTop:-20
    },
    cardTitle:{
        color:"black",
        fontSize:16,
        fontWeight:"bold",
    },
    cardContainer:{
        fontSize: 20,
        margin: 5,
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:10,
        height:70,
        paddingLeft:20,
        borderWidth:0,
        borderColor:"#585BFF",
        backgroundColor:"#0000",
        flexDirection:"row",
        elevation:3,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    topImg:{
        marginTop:-60,
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        justifyContent:"flex-end"

    },
    topContainer:{
        backgroundColor:"#585BFF",
        height:370,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        marginBottom:10
    }
})