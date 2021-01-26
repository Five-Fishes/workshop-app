import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from "@react-navigation/stack";
import { SettingScreen, ProfileScreen, UpdateProfileScreen } from "../../pages";

const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
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
        name="Profile" component={ProfileScreen}
        options={{ 
          title: "Profile",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <MaterialCommunityIcons
                name="home"
                color={"white"}
                size={32}
              />
            </TouchableOpacity>
          )
       }}
      />
      <Stack.Screen
        name="Update Profile" component={UpdateProfileScreen}
        options={{ title: "Update Profile" }}
      />
      <Stack.Screen
        name="Settings" component={SettingScreen}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  )
}

export default ProfileStack;
