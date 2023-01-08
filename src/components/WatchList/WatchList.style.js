import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  rowFront: {
    justifyContent: 'center',
    backgroundColor: "white",
    borderBottomWidth:0.5,
    borderColor:"#C0C0C0"
  },
  rowBack: {
    flex: 1,
  },
  backTextDanger: {
    color: "white"
  },
  backRightBtn: {
    flex:1,
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: Dimensions.get("window").width,
    backgroundColor: "red",
    right: 0,
  },
  rightSwipe:{
    backgroundColor:"red",
    width: Dimensions.get("window").width,
    alignItems:"flex-end",
    justifyContent:"center"
  }
});