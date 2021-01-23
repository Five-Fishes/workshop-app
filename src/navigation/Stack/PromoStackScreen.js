import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PromoScreen } from "../../pages";

const Stack = createStackNavigator();

const PromoStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Promo"
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
        name="Promo" component={PromoScreen}
        options={{ title: "Promotion" }}
      />
    </Stack.Navigator>
  )
}

export default PromoStack;
