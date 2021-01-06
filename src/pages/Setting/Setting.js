import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from "../../components/Background/Background";
import SettingsStyle from "./SettingsStyle";

const Setting = ({navigation}) => {

  const naviItems = [
    {
      Name: "Waze",
      Navigate: ""
    },
    {
      Name: "Google Maps",
      Navigate: ""
    },
    {
      Name: "Cafix Navigation",
      Navigate: ""
    }
  ];

  const optionItems = [
    {
      Name: "Change Branch details",
      Navigate: ""
    },
    {
      Name: "Change Contact Information",
      Navigate: ""
    },
    {
      Name: "Change owner",
      Navigate: ""
    }
  ];

  return (
    <Background>
      <View style={SettingsStyle.container}>
      <View >
      <Text style ={SettingsStyle.title}>
          Navigation
        </Text>
      </View>
        
        <FlatList
          style={SettingsStyle.listView}
          data={naviItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={SettingsStyle.itemList}
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
          )}
        >
        </FlatList>

        <View >
          <Text style ={SettingsStyle.title}>
          Modification and Privacy
        </Text>   
        </View>
            
        <FlatList
          style={SettingsStyle.listView}
          data={optionItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={SettingsStyle.itemList}
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
          )}
        >
        </FlatList>
      </View>
    </Background>
  );
};

export default Setting;