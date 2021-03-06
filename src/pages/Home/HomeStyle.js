import { StyleSheet } from "react-native";


export default StyleSheet.create({
  
  userInfoContainer: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginTop: "-5%",
    width: "100%",
    height: "75%",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  username: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 25,
  },
  listEleContainer: {
    marginLeft: "2%",
    padding: 3,
  },
  listElement: {
    width: "90%",
  },
  buttoncon:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    margin:8,
    padding:2
  },

  buttoncon2:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginLeft:18,
    paddingLeft:38
  },

  buttoncon3:{
    marginLeft:18,
    paddingLeft:38
  },

  button:{
    borderRadius:15,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    width:108,
    height:38,
    backgroundColor:"#EBF7F1",
    borderWidth:0.3,
  },

  buttonaccept:{
    borderRadius:12,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    width:108,
    height:38,
    backgroundColor:"#B1F666",
    borderWidth:0.5,
  },

  buttonreject:{
    borderRadius:12,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    width:108,
    height:38,
    backgroundColor:"#F54136",
    borderWidth:0.5,
  },

  title:{
    fontSize: 22,
    paddingHorizontal: 20,
    paddingVertical:5,
    fontWeight:"bold",
  },

  itemList: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop:8,
  },
  itemList3: {
    width:196,
    paddingHorizontal: 15,
    paddingVertical:8,
  },
  itemList2: {
    paddingHorizontal: 13,
    marginBottom: 3  
  },

  listView: {
    borderRadius: 40,
  },

  smallcon:{
    borderBottomColor: "grey",
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
    width: 68,
    height: 68,
  
  },

  infoCard:{
    minHeight: 120,
    width: "45%",
    backgroundColor:"white",
    borderRadius:8,
    marginTop:18,
    marginHorizontal:8,
    padding:13,
    paddingTop:18
  }
});