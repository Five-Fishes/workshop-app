import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  logoImage: {
    alignSelf: "center",
    width: 300,
    height: 300,
    flex: 3,
  },
  loginForm: {
    flex: 5,
    width: "90%",
    alignSelf: "center",
  },
  loginButton: {
    marginVertical: 50,
    borderRadius: 5,
    backgroundColor: "white",
    alignSelf: "baseline",
    alignSelf: "center",
    padding: 10,
  },
  inputBorder: {
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  input: {
    alignSelf: "stretch",
    padding: 10,
  },
});
