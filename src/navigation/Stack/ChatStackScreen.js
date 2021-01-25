import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ChatScreen, MessageScreen } from "../../pages";

const Stack = createStackNavigator();

const ChatStack = () => {
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
        options={{ title: "Chat" }}
      />
      <Stack.Screen
        name="Message" component={MessageScreen}
        options={{ title: "Message" }}
      />
    </Stack.Navigator>
  )
}

export default ChatStack;
