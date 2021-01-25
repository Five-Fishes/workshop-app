import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CompleteOrderScreen, DispatchServiceScreen } from "../../pages";

const Stack = createStackNavigator();

const DispatchServiceStack = () => {
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
        options={{ title: "Dispatch Service" }}
      />
      <Stack.Screen
        name="Completed" component={CompleteOrderScreen}
        options={{ title: "Completed Order" }}
      />
    </Stack.Navigator>
  )
}

export default DispatchServiceStack;
