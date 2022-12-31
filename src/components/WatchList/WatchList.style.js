export const colorBackground = '#ffffff';
export const colorText = '#000000';
export const colorHighlight = '#e5e5e5';
export const colorDanger = '#e91e63';
export const colorDangerText = '#660000';

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  rowFront: {
    justifyContent: 'center',
    backgroundColor: colorBackground,
    borderBottomColor: colorHighlight,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowBack: {
    flex: 1
  },
  backTextDanger: {
    color: "white",
    fontSize: 18,
  },
  backRightBtn: {
    flex:1,
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 50,
  },
  dangerBtn: {
    backgroundColor: "red",
    right: 0,
  }
});