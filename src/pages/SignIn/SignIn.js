import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Alert, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Background } from "../../components";
import styles from "./SignInStyle";
import { GeneralStyles } from "../../components";

import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../graphql";
import { signIn } from "../../utils/AuthenticationUtils";

const SignIn = ({ navigation, route }) => {
  const [workshopLogo, setWorkshopLogo] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [login, { data: user, error: loginErr }] = useMutation(SIGN_IN);

  useEffect(() => {
    if(!workshopLogo) {
      setWorkshopLogo(require("../../staticResources/images/cafixWorkshopLogo.png"));
    }
  });

  const verifyLogin = () => {
    if (email && password) {
      login({variables: {email: email, password: password}});
    } else {
      setErrorMessage("Please Enter you login credentials");
    }
    // SignIn with GraphQL endpoints
  }

  if(user) {
    console.log("SIGNIN: ", user.login.token)
    signIn(user.login.token);
    route.params.authHandler(true);
  }

  return (
    <Background>
      {workshopLogo && (
        <View style={styles.container}>
          <ImageBackground
            source={workshopLogo}
            style={styles.logoImage}
          />
          <View style={styles.loginForm}>
            <View style={styles.inputBorder}>
              <TextInput
                placeholder="Email"
                keyboardType="email-address" textContentType="emailAddress"
                value={email} onChangeText={(value) => setEmail(value)}
                style={styles.input}
              />
            </View>

            <View style={styles.inputBorder}>
              <TextInput
                placeholder="Password"
                textContentType="password" secureTextEntry={true}
                value={password} onChangeText={(value) => setPassword(value)}
                style={styles.input}
              />
            </View>

            {Boolean(errorMessage) && (
              <Text
                style={GeneralStyles.errorText}
              >{errorMessage}</Text>
            )}

            {Boolean(loginErr) && (
              <Text
                style={GeneralStyles.errorText}
              >{loginErr.message}</Text>
            )}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={verifyLogin}
              style={styles.loginButton}
            >
              <Text>Log In</Text>
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
