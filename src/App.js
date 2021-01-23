import 'react-native-gesture-handler';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';


import { HomeScreen, SignInScreen,SettingScreen,PromoScreen,AppointScreen,ChatScreen} from "./pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           elevation: 0,
//           shadowOpacity: 0,
//           backgroundColor: "#1C4687",
//           borderBottomWidth: 0,
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//       >
//         <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "Sign In" }}/>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }}/>
//         <Stack.Screen name="Setting" component={SettingScreen} options={{ title: "Setting" }}/>
//         <Stack.Screen name="Promo" component={PromoScreen} options={{ title: "Promotion" }}/>
//         <Stack.Screen name="Appoint" component={AppointScreen} options={{ title: "Appointment Management" }}/>

//         {/* Add Something */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#163460' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign:{headerTitleAlign:'center'}
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'TBT WORKSHOP' }}/>
        
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#163460' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign:{headerTitleAlign:'center'}
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ title: 'Setting ' }}/>
      
    </Stack.Navigator>
  );
}

function AppointmentStack() {
  return (
    <Stack.Navigator
      initialRouteName="Appointment"
      screenOptions={{
        headerStyle: { backgroundColor: '#163460' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign:{headerTitleAlign:'center'}
      }}>
      <Stack.Screen
        name="Appointment"
        component={AppointScreen}
        options={{ title: 'Appointment' }}/>
      
    </Stack.Navigator>
  );
}

function MessageStack() {
  return (
    <Stack.Navigator
      initialRouteName="Message"
      screenOptions={{
        headerStyle: { backgroundColor: '#163460' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign:{headerTitleAlign:'center'}
      }}>
      <Stack.Screen
        name="Message"
        component={ChatScreen}
        options={{ title: 'Messages' }}/>
      
    </Stack.Navigator>
  );
}

function PromoStack() {
  return (
    <Stack.Navigator
      initialRouteName="Promo"
      screenOptions={{
        headerStyle: { backgroundColor: '#163460' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign:{headerTitleAlign:'center'}
      }}>
      <Stack.Screen
        name="Promo"
        component={PromoScreen}
        options={{ title: 'Manage Promos' }}/>
      
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#163460',
        }}>
        <Tab.Screen
          name="HomeStack"
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
          }}  />
          <Tab.Screen
          name="AppointmentStack"
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
          }}  />
          <Tab.Screen
          name="MessageStack"
          component={MessageStack}
          options={{
            tabBarLabel: 'Message',
            fontWeight : "bold",

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="message"
                color={color}
                size={size}

              />
            ),
          }}  />
        {/* <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            fontWeight : "bold",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-settings"
                color={color}
                size={size}

              />
            ),
          }} /> */}
          <Tab.Screen
          name="PromoStack"
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
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
