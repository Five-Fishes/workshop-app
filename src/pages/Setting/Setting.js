import React from "react";
import { View, Text, FlatList, Alert, TouchableOpacity, ScrollView } from "react-native";
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from "../../components/Background/Background";
import styles from "./SettingsStyle";

const Setting = ({navigation}) => {

  const naviItems = [
    {
      Name: "Waze",
      Navigate: ""
    },
    {
      Name: "Google Maps",
      Navigate: ""
    }
  ];

  const optionItems = [
    {
      Name: "Change Branch details",
      Navigate: ""
    },
    {
      Name: "Change password",
      Navigate: ""
    },
    {
      Name: "Term and Privacy",
      Navigate: ""
    }
  ];

  return (
    <Background>
      <ScrollView style={styles.container}>
      <View>
        <Text style ={styles.title}>
          Navigation
        </Text>
        {naviItems.map(item => {
          return (
            <TouchableOpacity 
              style={styles.itemList}
              onPress={() => {
                Alert.alert("Clicked on "+item.Name)
                // TODO: navigate to repective page
                // navigation.navigate(item.Navigate)
              }}
            >
              <Text>{ item.Name }</Text>
              <MaterialCommunityIcons
                name  = "arrow-right-drop-circle-outline"
                size = {30}
              />

            </TouchableOpacity>
          )
        })}
        
        <Text style ={styles.title}>
          Modification and Privacy
        </Text>
        {optionItems.map(item => {
          return (
            <TouchableOpacity 
              style={styles.itemList}
              onPress={() => {
                Alert.alert("Clicked on "+item.Name)
                // TODO: navigate to repective page
                // navigation.navigate(item.Navigate)
              }}
            >
              <Text>{ item.Name }</Text>
              <MaterialCommunityIcons
                name  = "arrow-right-drop-circle-outline"
                size = {30}
              />

            </TouchableOpacity>
          )
        })}

      </View>
      </ScrollView>
    </Background>
  );
};

export default Setting;