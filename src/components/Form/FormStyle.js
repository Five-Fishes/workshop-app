import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  action: {
    width: Dimensions.get('window').width,
    padding: 20
  },
  formInput: {
    
  },
  formButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    width: "50%",
    alignSelf: "center"
  },
  formButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  errorText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold"
  }
})