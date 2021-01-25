import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import { ApolloProvider } from "@apollo/client"
import { Client } from "./graphql";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, AppointmentStack, ChatStack, PromoStack } from "./navigation";

import { SignInScreen, SignUpScreen, SettingScreen } from "./pages";
import { getUserInfo } from './utils/AuthenticationUtils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [ authenticated, setAuthenticated ] = React.useState(false);
  const [ userInfo, setUserInfo ] = React.useState();

  const changeAuthenticated = (value) => {
    setAuthenticated(value);
  }

  return (
    <ApolloProvider client={Client}>
      {authenticated ? (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: '#163460',
            }}>
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarLabel: 'Home',
                fontWeight : "bold",

                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Appointment"
              component={AppointmentStack}
              options={{
                tabBarLabel: 'Appointment',
                fontWeight : "bold",

                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="car-estate"
                    color={color}
                    size={size}

                  />
                ),
              }}
            />
            <Tab.Screen
              name="Chat"
              component={ChatStack}
              options={{
                tabBarLabel: 'Chat',
                fontWeight : "bold",

                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="message"
                    color={color}
                    size={size}

                  />
                ),
              }}
            />
            <Tab.Screen
              name="Promotion"
              component={PromoStack}
              options={{
                tabBarLabel: 'Promo',
                fontWeight : "bold",
                size : "20",

                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="brightness-percent"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
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
