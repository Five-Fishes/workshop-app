import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height:"100%",
    position: "absolute",
    top: 50,
    backgroundColor:"white",
    borderRadius:33
  },

  title:{
    fontSize: 22,
    paddingHorizontal: 20,
    paddingVertical:5,
    fontWeight:"bold",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },

  itemList: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    paddingVertical:13,
  },

  chatInfo: {
    paddingLeft: 15,
    justifyContent: "center"
  },

  itemList2: {
    paddingHorizontal: 13,
    paddingBottom:8,
    marginBottom: 3  
  },

  listView: {
    borderRadius: 40,
  },

  smallcon:{
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },

  name:{
    fontSize: 15,
    color:"#2D2F2E",
    fontWeight:"bold"
  },

  time:{
    fontSize: 8,
    color:"#9B9B9B",
    fontWeight:"bold",
    paddingVertical:8
  },

  details:{
    fontSize: 12,
    color:"#000000",
    fontWeight:"bold",
  },

  pic:{
    borderRadius:50,
    width: 54,
    height: 54,
  
  }
});
