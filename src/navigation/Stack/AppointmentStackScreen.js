import * as React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppointmentScreen } from "../../pages";

const Stack = createStackNavigator();

const AppointmentStack = ({navigation}) => {
  const profilePlaceHolder = require("../../staticResources/images/userPlaceholder.png");

  return (
    <Stack.Navigator
      initialRouteName="Appointment"
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
        name="Appointment" component={AppointmentScreen}
        options={{
          title: "Appointment",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image source={profilePlaceHolder} />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default AppointmentStack;
