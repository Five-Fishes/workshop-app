import {StyleSheet} from 'react-native';

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
    backgroundColor:"#rgba(59, 164, 70, 0.8)",
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
    color: "white",
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
    paddingHorizontal: 15,
    paddingVertical:8,
  },
  itemList2: {
    paddingHorizontal: 13,
    marginBottom: 3  
  },

  listView: {
    height: "80%",
    borderRadius: 40,
    flexGrow: 1
  },

  smallcon:{
    borderBottomColor: "grey",
  },

  name:{
    fontSize: 13,
    color:"#2D2F2E",
    fontWeight:"bold",
    paddingVertical:8
  },

  time:{
    fontSize: 12,
    color:"#9B9B9B",
    fontWeight:"bold"
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
  
  }
});