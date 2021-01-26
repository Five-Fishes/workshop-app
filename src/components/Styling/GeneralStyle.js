import { from } from "@apollo/client";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  errorText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    alignSelf: "center"
  },
  whiteText: {
    color: "white",
    textAlign: "center",
  },
  inlineView:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddingHorizontal: 5
  },
})