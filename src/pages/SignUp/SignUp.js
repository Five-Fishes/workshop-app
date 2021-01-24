import React from "react";
import { View, ScrollView, Text } from "react-native";
import { CredentialsForm, EmploymentForm, ProfileForm } from "../../components";
import { useState } from "react";
import { Background } from "../../components";
import styles from "./SignUpStyle";
import { GeneralStyles } from "../../components";

import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../graphql";
import { signIn, setUserId } from "../../utils/AuthenticationUtils";

const SECTIONS = {
  CREDENTIALS: "CREDENTIALS",
  PROFILE: "PROFILE",
  EMPLOYMENT: "EMPLOYMENT"
}

const SignUp = ({ navigation, route }) => {
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
    employeeType: "STAFF",
    employmentBranch: ""
  })
  const [register, { data: user, error: registerErr }] = useMutation(SIGN_UP);

  const updateSection = (section) => {
    setSection(section);
  }

  const signUp = () => {
    register({variables: {
      userInput: {
        ...userInput,
        dateOfBirth: userInput.dateOfBirth.toISOString()
      }
    }});
  }

  if(user) {
    signIn(user.signUp.token);
    setUserId(user.signUp.id);
    route.params.authHandler(true);
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
              submitText="Submit" submitAction={() => signUp()}
            />
            {Boolean(registerErr) && (
              <Text
                style={GeneralStyles.errorText}
              >
                {registerErr.message}
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </Background>
  );
};

export default SignUp;
