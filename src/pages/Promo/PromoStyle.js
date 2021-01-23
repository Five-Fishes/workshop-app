import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height:"95%",
    position: "absolute",
    top: 65,
    backgroundColor:"white",
    borderRadius:33
  },

  title:{
    fontSize: 22,
    paddingHorizontal: 20,
    paddingTop:8,
    fontWeight:"bold",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },

  itemList: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    color:"#C6C6D5",
    paddingHorizontal: 8,
    paddingVertical:8,
  },

  itemList2: {
    fontSize: 20,
    color:"#B1AEFF",
    paddingHorizontal: 20,    
    paddingVertical:2,

  },

  listView: {
    borderRadius: 40,
  },

  smallcon:{
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },

  buttoncon:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddingRight:88,
    margin:8,
    padding:2
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

  name:{
    fontSize: 15,
    color:"#010104",
    fontWeight:"bold",
  },

  details:{
    fontSize: 13,
    color:"#9B9B9B",
  },
  
  pic:{
    borderRadius: 10,
    width: 368,
    height: 168,
  
  }
});