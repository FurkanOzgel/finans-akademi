import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection:"row",
        height:50,
        margin:1,
    },
    card_icon:{
        padding:10,
        justifyContent:"center",
        borderColor:"#C0C0C0",
        
    },
    card_title:{
        fontSize:16,
        color:"black"
    },
    forward_icon:{
        borderBottomWidth:0.5,
        borderColor:"#C0C0C0",
        justifyContent:"center",
        width:50,
        alignItems:"center",
    },
    switch:{
        padding:10,  
    },
    switch_container:{
        borderBottomWidth:0.5,
        justifyContent:"center",
        borderColor:"#C0C0C0",
        width:60
        
    },
    card_title_container:{
        flex:1,
        justifyContent:"center",
        borderBottomWidth:0.5,
        borderColor:"#C0C0C0"
    }


})