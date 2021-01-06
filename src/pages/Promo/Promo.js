import React from "react";
import { View, Text, Button, Alert,FlatList,Image } from "react-native";
import Background from "../../components/Background/Background";
import {StyleSheet} from 'react-native';


const Promo = () => {
  const Items = [
    {
      Name: "Promo 1",
      Time: "PETRON GASUL RM3 CASHBACK ",
      Message: "Get Petron Gasul delivered to your home and receive RM3 cashback!?",
      Photo: "https://cdn-web.tngdigital.com.my/images/Petron-Gasul/PetronGasul_Web_Thumbnail.jpg"
    },
    {
      Name: "Promo 2",
      Time: "TUTUCARS RM2 PROMO FRENZY ",
      Message: "Enjoy RM2.00 discount with TutuCars on weekend!",
      Photo:"https://cdn-web.tngdigital.com.my/images/Tutucars-RM2/TutuCar_RM2Cashback_Web_Thumbnail.jpg"
    },
    {
      Name: "Promo 3",
      Time: "BMS GET UP TO RM50 CASHBACK",
      Message: "Renew insurance & road tax online seamlessly",
      Photo: "https://cdn-web.tngdigital.com.my/images/2021/Jan/DreamShop/DreamShop_Web_Thumb.jpg"
    }
  ];


  return (
    <Background>
      
      <View style={styles.container}>
      <FlatList
          style={styles.listView}
          data={Items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.smallcon}>
              <View style={styles.itemList}>
                <Text style = {styles.name}>{ item.Name }</Text>
                <View style={styles.itemList}>
                <Image source={{uri:item.Photo}}  style={styles.pic} />
                <Text style = {styles.name}>{ item.Time }</Text>
                </View>
              </View>
            <View style={styles.itemList2}>
              <Text style = {styles.details}>{ item.Message }</Text>
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
    top: 65,
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
    // flexDirection: "row",
    // justifyContent: "space-between",
    color:"#C6C6D5",
    paddingHorizontal: 8,
    paddingVertical:2,
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
    height: 108,
  
  }
});

export default Promo;