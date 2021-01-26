import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import { ApolloProvider } from "@apollo/client"
import { Client } from "./graphql";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";

// import { HomeStack, AppointmentStack, DispatchServiceStack, ChatStack, PromoStack } from "./navigation";
import { ProfileStack, AppBootomNavbar } from "./navigation";

import { SignInScreen, SignUpScreen, SettingScreen } from "./pages";
import { getUserInfo } from './utils/AuthenticationUtils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [ authenticated, setAuthenticated ] = React.useState(true);
  const [ userInfo, setUserInfo ] = React.useState();

  const changeAuthenticated = (value) => {
    setAuthenticated(value);
  }

  return (
    <ApolloProvider client={Client}>
      {authenticated ? (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={AppBootomNavbar} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
          </Drawer.Navigator>
        </NavigationContainer>
        ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: "#1C4687",
                borderBottomWidth: 0,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{ title: "Sign In" }}
              initialParams={{ authHandler: changeAuthenticated }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ title: "Sign Up" }}
              initialParams={{ authHandler: changeAuthenticated }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </ApolloProvider>
  );
}
export default App;
