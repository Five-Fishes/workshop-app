import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import styles from "./UpdateProfileStyle";
import { Background, ProfileForm } from "../../components";

const UpdateProfile = ({ navigation, route }) => {

  useEffect(() => {
    if (!userInput && route.params.user) {
      console.log(route.params.user)
      let userObj = Object.assign({},{
        ...route.params.user
      })
      if (parseInt(userObj.dateOfBirth)) {
        console.log(new Date(parseInt(userObj.dateOfBirth)).toISOString())
        setUserInput({
          ...userObj,
          dateOfBirth: new Date(parseInt(userObj.dateOfBirth)).toISOString()
        })
      } else {
        setUserInput({
          ...userObj
        })
      }
      
    }
  }, [])

  const [ userInput, setUserInput ] = useState();
  // {
  //   type: "EMPLOYEE",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   firstName: "",
  //   lastName: "",
  //   dateOfBirth: new Date(),
  //   contactNo: "",
  //   employeeType: "STAFF",
  //   employmentBranch: ""
  // }

  const updateProfile = () => {
    Alert.alert("Profile Updated");
    navigation.goBack()
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Update Profile</Text>
        {userInput && (
          <ProfileForm 
            userInput={userInput} setUserInput={setUserInput}
            submitText="Update" submitAction={() => updateProfile()}
          />
        )}
      </View>
    </Background>
  );
};

export default UpdateProfile;