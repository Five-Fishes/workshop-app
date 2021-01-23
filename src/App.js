import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack, AppointmentStack, ChatStack, PromoStack } from "./navigation";

import { SignInScreen, SignUpScreen } from "./pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [ authenticated, setAuthenticated ] = React.useState(false);

  return authenticated ? (
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
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
