import React from "react";
import { View, Text, Button, Alert,FlatList,Image,TouchableOpacity } from "react-native";
import Background from "../../components/Background/Background";
import styles from "./PromoStyle";


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
      <View style={styles.buttoncon}>
          <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  Alert.alert("Ongoing")
                }}
              >
                <Text style ={{fontWeight:"800"}}>Ongoing</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                  Alert.alert("Scheduled")
                }}
              >
                <Text>Scheduled</Text>
          </TouchableOpacity>
          
        </View>
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

export default Promo;