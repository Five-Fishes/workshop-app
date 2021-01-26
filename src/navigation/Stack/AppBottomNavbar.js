import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import HomeStack from "./HomeStackScreen";
import AppointmentStack from "./AppointmentStackScreen";
import DispatchServiceStack from "./DispatchServiceStackScree";
import ChatStack from "./ChatStackScreen";
import PromoStack from "./PromoStackScreen";

const Tab = createBottomTabNavigator();

const AppBootomNavbar = () => {
  return (
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
              size={30}
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
              name="store"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dispatch"
        component={DispatchServiceStack}
        options={{
          tabBarLabel: 'Dispatch',
          fontWeight : "bold",

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-estate"
              color={color}
              size={30}
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
              size={30}
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
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppBootomNavbar;