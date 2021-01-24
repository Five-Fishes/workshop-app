import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
// Reference https://dev.to/radhakishanjangid404/react-native-expo-form-validation-component-library-with-floating-label-1ja7
import { Form, InputText } from "validate-form-in-expo-style";
import { FontAwesome, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./FormStyle";

class CredentialsForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.errorMessage = "";
  }

  changeHandler = (key, value) => {
    this.props.setUserInput({
      ...this.props.userInput,
      [key]: value.trim()
    })
  };

  handleEmail = (email) => {
    this.changeHandler("email", email);
  }
  handlePassword = (password) => {
    this.changeHandler("password", password);
  }
  handleConfirmPassword = (confirm_password) => {
    this.changeHandler("confirmPassword", confirm_password);
    // if (this.props.confirmPassword && confirm_password !== this.props.userInput.password) {
    //   setErrorMessage("Password not match");
    // }
  }

  handleSubmit = async () => {
    if (this.props.showConfirmPassword && this.props.userInput.password !== this.props.userInput.confirmPassword) {
      this.errorMessage = "Password not match";
    } else {
      await this.formRef.current.submit();
    }
  }

  render () {
    return (
      <View style={styles.action}>
        <Form ref={this.formRef} onSubmit={() => this.props.submitAction()}>
          <InputText
            type="email" keyboardType="email-address"
            name="email" label="Email Address" placeholder="Enter Email"
            value={this.props.userInput.email} onChangeText={this.handleEmail}
            validateNames={['required']}
            errorMessages={["This field is required"]}
            leftIcon={<MaterialCommunityIcons name="email" color="#0A3055" size={20} />}
            invalidIcon={<Feather name="alert-circle" color="red" size={20}/>}
            validIcon={<Feather name="check-circle" color="green" size={20} />}
            style={styles.formInput}
          />
          <InputText
            type="password" secureTextEntry={true}
            name="password" label="Password" placeholder="Enter Password"
            value={this.props.userInput.password} onChangeText={this.handlePassword}
            validateNames={['required', "matchRegexp:^[a-zA-Z0-9].{5,}$"]}
            errorMessages={["This field is required", "At least 6 characters with digits and alphabets"]}
            leftIcon={<FontAwesome name="key" color="#0A3055" size={20} />}
            invalidIcon={<Feather name="alert-circle" color="red" size={20}/>}
            validIcon={<Feather name="check-circle" color="green" size={20} />}
            style={styles.formInput}
          />
          { this.props.showConfirmPassword && (
            <InputText
              type="password" secureTextEntry={true}
              name="confirm_password" label="Confirm Password" placeholder="Confirm Password"
              value={this.props.userInput.confirmPassword} onChangeText={this.handleConfirmPassword}
              validateNames={['required']}
              errorMessages={["This field is required"]}
              leftIcon={<FontAwesome name="key" color="#0A3055" size={20} />}
              invalidIcon={<Feather name="alert-circle" color="red" size={20}/>}
              validIcon={<Feather name="check-circle" color="green" size={20} />}
              style={styles.formInput}
            />
          )}
          { Boolean(this.errorMessage) && (
            <Text style={styles.errorText}>{this.errorMessage}</Text>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.handleSubmit}
            style={styles.formButtonContainer}
          >
            <Text style={styles.formButtonText}>{this.props.submitText}</Text>
          </TouchableOpacity>
        </Form>
      </View>
    )
  }
}

export default CredentialsForm;