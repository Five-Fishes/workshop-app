import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Alert, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Background } from "../../components";
import styles from "./SignInStyle";

const SignIn = ({ navigation }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(require("../../staticResources/images/cafixWorkshopLogo.png"));
  });

  const signIn = () => {
    // SignIn with GraphQL endpoints
  }

  return (
    <Background>
      {image && (
        <View style={styles.container}>
          <ImageBackground
            source={image}
            style={styles.logoImage}
          />
          <View style={styles.loginForm}>
            <View style={styles.inputBorder}>
              <TextInput
                placeholder="Email"
                textContentType="email"
                style={styles.input}
              />
            </View>

            <View style={styles.inputBorder}>
              <TextInput
                placeholder="Password"
                textContentType="password"
                style={styles.input}
              />
            </View>

            <TouchableOpacity
              onPress={signIn}
              style={styles.loginButton}
            >
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: "center" }}
              onPress={() => Alert.alert("Forgot Password Pressed")}
            >
              <Text
                style={{ color: "white" }}
              >
                Forgot your password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: "center" }}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={{ color: "#50BBF6" }}>Register Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Background>
  );
};

export default SignIn;
