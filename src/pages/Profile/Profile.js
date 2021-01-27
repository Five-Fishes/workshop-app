import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import styles from "./ProfileStyle";
import { Background, GeneralStyles } from "../../components";
import { useLazyQuery, useQuery } from "@apollo/client";
import { getUserInfo, signOut } from "../../utils/AuthenticationUtils";
import { GET_USER } from "../../graphql";

const profilePlaceHolder = require("../../staticResources/images/userPlaceholder.png");
const Profile = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState();

  const emptyUserInput = {
    type: "EMPLOYEE",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),
    contactNo: "",
    employeeType: "STAFF",
    employmentBranch: ""
  };

  useEffect(() => {
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        setUserInfo(res)
        console.log(res.userId)
        getUserDetails({variables: {id: res.userId}})
      })
    }
  }, [])

  const signOutUser = () => {
    console.log("SIGN OUT USER")
    signOut();
  }

  const [ getUserDetails, 
    {data: userDetails, error: getUserErr, called: getUserCalled}] = useLazyQuery(GET_USER);

  const updateProfile = () => {
    navigation.navigate("Update Profile", {user: userDetails.user})
  }
  const goToSettings = () => {
    navigation.navigate("Settings")
  }

  if(userDetails) {
    console.log(userDetails)
  }
  if (getUserErr) {
    console.log(getUserErr.message)
  }

  return (
    <Background>
      {userDetails && (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
        }}
      >
        <Image style={styles.profileImg} source={profilePlaceHolder} />
        <View style={styles.userInfoContainer}>
          <Text style={styles.username}>{userDetails.user.firstName + " " + userDetails.user.lastName}</Text>
          <View style={styles.userDetails}>
            <Text style={styles.sectionTitle}>Profile Details</Text>
            <Text style={styles.details}>Email: {userDetails.user.email}</Text>
            <Text style={styles.details}>Contact No: {userDetails.user.contactNo}</Text>
            {/* Handle timemillis and ISOString */}
            {parseInt(userDetails.user.dateOfBirth) ? (
              <Text style={styles.details}>Date of Birth: {new Date(parseInt(userDetails.user.dateOfBirth)).toLocaleDateString()}</Text>
            ) : (
              <Text style={styles.details}>Date of Birth: {new Date(userDetails.user.dateOfBirth).toLocaleDateString()}</Text>
            )}
            
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={updateProfile}
              style={styles.formButtonContainer}
            >
              <Text style={styles.whiteText}>Update Profile</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              activeOpacity={0.8}
              onPress={goToSettings}
              style={styles.formButtonContainer}
            >
              <Text style={styles.whiteText}>Settings</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={signOutUser}
              style={styles.formButtonContainer}
            >
              <Text style={styles.whiteText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      )}
      {getUserErr && (
        <View>
          <Text
            style={GeneralStyles.errorText}
          >{getUserErr.message}</Text>
        </View>
      )}
    </Background>
  );
};

export default Profile;