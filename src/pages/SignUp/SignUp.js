import React from "react";
import { View } from "react-native";
import { CredentialsForm, EmploymentForm, ProfileForm } from "../../components";
import { useState } from "react";
import { Background } from "../../components";
import styles from "./SignUpStyle";
import { ScrollView } from "react-native-gesture-handler";

const SECTIONS = {
  CREDENTIALS: "CREDENTIALS",
  PROFILE: "PROFILE",
  EMPLOYMENT: "EMPLOYMENT"
}

const SignUp = () => {
  const [ section, setSection ] = useState(SECTIONS.CREDENTIALS)
  const [ userInput, setUserInput ] = useState({
    type: "EMPLOYEE",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),
    contactNo: "",
    vehicle: [],
    employeeType: "",
  })

  const signUp = () => {
    // Sign up server call here
    Alert("SIGN UP")
  }

  const updateSection = (section) => {
    console.log("UPDATE SECTION", section)
    setSection(section);
  }

  return (
    <Background>
      <ScrollView style={{
        width: "96%",
        marginTop: "10%",
        borderRadius: 20
      }}>
        {/* User Credentials Info */}
        {section === SECTIONS.CREDENTIALS && (
          <View style={styles.container}>
            <CredentialsForm 
              userInput={userInput} setUserInput={setUserInput}
              submitText="Next" submitAction={() => updateSection(SECTIONS.PROFILE)}
              showConfirmPassword={true}
            />
          </View>
        )}
        {/* Personal Profile Info */}
        {section === SECTIONS.PROFILE && (
          <View style={styles.container}>
            <ProfileForm 
              userInput={userInput} setUserInput={setUserInput}
              submitText="Next" submitAction={() => updateSection(SECTIONS.EMPLOYMENT)}
            />
          </View>
        )}
        {/* Employment Info */}
        {section === SECTIONS.EMPLOYMENT && (
          <View style={styles.container}>
            {/* Back Option */}
            <EmploymentForm
              userInput={userInput} setUserInput={setUserInput}
              submitText="Submit" submitAction={() => signUp}
            />
          </View>
        )}
      </ScrollView>
    </Background>
  );
};

export default SignUp;
