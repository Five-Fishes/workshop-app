import React from "react";
import { View, Button, Alert } from "react-native";

const SignIn = ({ navigation }) => {

  return (
    <View>
      <Button
        title="Go To Home"
        onPress={() => {
          navigation.navigate("Home")
        }}
      />
    </View>
  );
};

export default SignIn;
