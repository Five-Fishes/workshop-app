import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen, MessageScreen } from "../../pages";

const Stack = createStackNavigator();

const ChatStack = ({navigation}) => {
  const profilePlaceHolder = require("../../staticResources/images/userPlaceholder.png");

  return (
    <Stack.Navigator
      initialRouteName="Chat"
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
        name="Chat" component={ChatScreen}
        options={{ 
          title: "Chat",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={profilePlaceHolder} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Message" component={MessageScreen}
        options={{ title: "Message" }}
      />
    </Stack.Navigator>
  )
}

export default ChatStack;
