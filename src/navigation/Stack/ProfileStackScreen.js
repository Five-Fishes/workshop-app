import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingScreen, ProfileScreen, UpdateProfileScreen } from "../../pages";

const Stack = createStackNavigator();

const ProfileStack = () => {
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
        options={{ title: "Profile" }}
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
