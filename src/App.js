import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, SignInScreen } from "./pages";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add Something */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
