import React from "react";
import { View, Text, Button, Alert } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Press Button below to fill in secret</Text>
      <Button
        title="Fill in info"
        onPress={() => {
          Alert.prompt("Tell me your secret");
        }}
      ></Button>
    </View>
  );
};

export default Home;
