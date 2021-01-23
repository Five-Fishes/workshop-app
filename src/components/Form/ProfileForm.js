import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, Platform, TextInput} from 'react-native';
import { Form, InputText } from "validate-form-in-expo-style";
import { FontAwesome, Feather } from "@expo/vector-icons";
// Ref https://github.com/react-native-datetimepicker/datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./FormStyle";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.minimumDate = new Date(1900, 1, 1);
    this.maximumDate = new Date().setFullYear((new Date()).getFullYear() - 18);
    this.showDatePicker = Boolean(Platform.OS === "ios");
    this.errorMessage = "";
  }

  changeHandler = (key, value) => {
    this.props.setUserInput({
      ...this.props.userInput,
      [key]: value
    })
  };

  handleFirstName = (first_name) => {
    this.changeHandler("firstName", first_name.trim());
  }
  handleLastName = (last_name) => {
    this.changeHandler("lastName", last_name.trim());
  }
  handleContactNo = (contact_no) => {
    this.changeHandler("contactNo", contact_no.trim());
  }
  handleDateOfBirth = (event, date_of_birth) => {
    this.changeHandler("dateOfBirth", new Date(date_of_birth));
    this.showDatePicker = Boolean(Platform.OS === 'ios');
  }

  handleSubmit = async () => {
    await this.formRef.current.submit();
  }

  render () {
    return (
      <View style={styles.action}>
        {/* onSubmit not  */}
        <Form ref={this.formRef} onSubmit={() => this.props.submitAction()}>
          <InputText
            type="text"
            name="first_name" label="First Name" placeholder="Enter First Name"
            value={this.props.userInput.firstName} onChangeText={this.handleFirstName}
            validateNames={['required', "isString", "maxStringLength:30"]}
            errorMessages={["This field is required", "Only characters allowed", "Max character limit is 30"]}
            leftIcon={<FontAwesome name="user-o" color="#0A3055" size={20} />}
            invalidIcon={< Feather name="alert-circle" color="red" size={20}/>}
            validIcon={<Feather name="check-circle" color="green" size={20} />}
          />
          <InputText
            type="text"
            name="last_name" label="Last Name" placeholder="Enter Last Name"
            value={this.props.userInput.lastName} onChangeText={this.handleLastName}
            validateNames={['required', "isString", "maxStringLength:30"]}
            errorMessages={["This field is required", "Only characters allowed", "Max character limit is 30"]}
            invalidIcon={<Feather name="alert-circle" color="red" size={20} />}
            validIcon={<Feather name="check-circle" color="green" size={20} />}
            leftIcon={<FontAwesome name="user-o" color="#0A3055" size={20} />}
          />
          <InputText
            type="number" keyboardType="number-pad"
            name="mobile_number" label="Mobile" placeholder="Enter Mobile Number"
            value={this.props.userInput.contactNo} onChangeText={this.handleContactNo}
            validateNames={['required', "isNumber", "maxStringLength:12", "minStringLength:8"]}
            errorMessages={["This field is required", "Only numbers allowed", "Mobile number max limit is 12 digits", "Invalid Mobile Number"]}
            invalidIcon={<Feather name="alert-circle" color="red" size={20} />}
            validIcon={<Feather name="check-circle" color="green" size={20} />}
            leftIcon={<FontAwesome name="phone" color="#0A3055" size={20} />}
          />
          <Text>Date of Birth</Text>
          {/* Show a clickable element for none IOS platform */}
          {Boolean(Platform.OS !== "ios") && (
            <TouchableOpacity onPress={() => {this.showDatePicker = !this.showDatePicker}}>
              <TextInput 
                placeholder="Select Date of Birth" editable={false}
                value={this.props.userInput.dateOfBirth.toISOString()}
              />
            </TouchableOpacity>
          )}
          {this.showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker" display="default"
              mode="date" is24Hour={false}
              maximumDate={this.maximumDate} minimumDate={this.minimumDate}
              value={this.props.userInput.dateOfBirth} onChange={this.handleDateOfBirth}
            />
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

export default ProfileForm;