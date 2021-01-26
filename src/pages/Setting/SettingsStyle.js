import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height:"100%",
    position: "absolute",
    top: 50,
    paddingTop: 15,
    backgroundColor:"white",
    borderRadius:33
  },

  listView: {
    borderRadius: 40,
  },

  title:{
    marginTop: 10,
    fontSize: 22,
    paddingHorizontal: 20,
    paddingVertical:5,
    fontWeight:"bold",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderStyle: "solid"
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