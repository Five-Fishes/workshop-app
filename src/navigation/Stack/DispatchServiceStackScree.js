import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CompleteOrderScreen, DispatchServiceScreen } from "../../pages";

const Stack = createStackNavigator();

const DispatchServiceStack = ({navigation}) => {
  const profilePlaceHolder = require("../../staticResources/images/userPlaceholder.png");

  return (
    <Stack.Navigator
      initialRouteName="Dispatch"
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
        name="Dispatch" component={DispatchServiceScreen}
        options={{ 
          title: "Dispatch Service",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={profilePlaceHolder} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="Completed" component={CompleteOrderScreen}
        options={{ title: "Completed Order" }}
      />
    </Stack.Navigator>
  )
}

export default DispatchServiceStack;
