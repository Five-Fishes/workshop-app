import React from "react";
import { View, Button, Alert, Text, Image, FlatList,TouchableOpacity  } from "react-native";
import Background from "../../components/Background/Background";
import {StyleSheet} from 'react-native';


const Appointment = ({navigation} ) => {
  const Items = [
    {
      Name: "Towing Service",
      Time: "18/01/2021, 2.00pm",
      Photo: "data:image/jpeg;base64,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"
    },
    {
      Name: "Towing Service",
      Time: "12/01/2021, 12.00pm",
      Photo: "data:image/jpeg;base64,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"
    },
    {
      Name: "Changing Battery",
      Time: "11/01/2021, 16.00pm",
      Photo: "data:image/png;base64,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"
    }
  ];


  return (
    <Background>
      
      <View style={styles.container}>
        <View style={styles.buttoncon}>
          <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  Alert.alert("Today")
                }}
              >
                <Text>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  Alert.alert("Tomorrow")
                }}
              >
                <Text>Tomorrow</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  Alert.alert("Others")
                }}
              >
                <Text>Others</Text>
          </TouchableOpacity>
        </View>
          <FlatList
          style={styles.listView}
          data={Items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.smallcon}>
            <View style={styles.itemList}>
              <Image source={{uri:item.Photo}}  style={styles.pic} />
              <View style={styles.itemList3}>
                <Text style = {styles.name}>{ item.Name }</Text>
                <Text style = {styles.time}>{ item.Time }</Text>
              </View>
            </View>
            <View style={styles.buttoncon2}>
            <TouchableOpacity 
                style={styles.buttonaccept}
                onPress={() => {
                  Alert.alert("Accept")
                }}
              >
                <Text>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonreject}
                onPress={() => {
                  Alert.alert("Reject")
                }}
              >
                <Text>Reject</Text>
          </TouchableOpacity>
          </View>
          </View>

          )}
        >
        </FlatList>
    </View>

    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height:"100%",
    position: "absolute",
    top: 75,
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
    margin:8,
    marginLeft:18,
    paddingLeft:38
  },

  button:{
    borderRadius:15,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    width:108,
    height:30,
    backgroundColor:"#EBF7F1",
    borderWidth:1,
  },

  buttonaccept:{
    borderRadius:2,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    width:108,
    height:30,
    backgroundColor:"#B1F666",
    borderWidth:1,
  },

  buttonreject:{
    borderRadius:2,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    width:108,
    height:30,
    backgroundColor:"#F54136",
    borderWidth:1,
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
  
  }
});

export default Appointment;