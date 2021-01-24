import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_TOKEN = "AUTH_TOKEN";
const USER_ID = "USER_ID";

let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }

  token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const setUserId = (userId) => {
  return AsyncStorage.setItem(USER_ID, userId);
}

export const signIn = (newToken) => {
  token = newToken;
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const signOut = () => {
  token = null;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};