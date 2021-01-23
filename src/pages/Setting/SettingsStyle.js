import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height:"100%",
    position: "absolute",
    top: 75,
    backgroundColor:"white",
    borderRadius:33
  },

  listView: {
    borderRadius: 40,
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
    justifyContent: "space-between",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical:13,
    marginBottom: 3  
  }
})