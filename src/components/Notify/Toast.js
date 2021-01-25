import { ToastAndroid, Alert, Text, View, Platform } from "react-native";

export const ToastMessage = (props) => {
  if (Platform.OS === "ios") {
    return Alert.alert(props.title, props.message);
  } else {
    return ToastAndroid.show(props.message, ToastAndroid.SHORT);
  }
}