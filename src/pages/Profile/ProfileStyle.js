import { StyleSheet } from "react-native";

const profileImgSize = 120;

export default ProfileStyle = StyleSheet.create({
  appbar: {
    maxHeight: 125,
  },
  profileImg: {
    borderRadius: profileImgSize / 2,
    width: profileImgSize,
    height: profileImgSize,
    backgroundColor: "white",
    marginTop: "10%",
    zIndex: 10,
    alignSelf: "center",
  },
  userInfoContainer: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "-5%",
    width: "100%",
    height: "105%",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 5,
  },
  username: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 25,
  },
  formButtonContainer: {
    elevation: 8,
    backgroundColor: "#163460",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,    
    minWidth: "50%",
    alignSelf: "center",
  },
  whiteText: {
    color: "white",
    textAlign: "center",
  },
  userDetails: {
    alignSelf: "flex-start",
    marginBottom: 25,
  },
  details: {
    fontSize: 18,
    marginVertical: 3,
    marginLeft: 10
  }
});