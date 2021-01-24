import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { Form, InputText } from "validate-form-in-expo-style";
import { FontAwesome, Feather } from "@expo/vector-icons";
import styles from "./FormStyle";

// TODO: Implement dropdown with react-native-dropdown-picker
// https://www.npmjs.com/package/react-native-dropdown-picker

class EmploymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  // this.props.userInput
  // this.props.setUserInput
  changeHandler = (key, value) => {
    this.props.setUserInput({
      ...this.props.userInput,
      [key]: value.trim()
    })
  };

  handleFirstName = (first_name) => {
    this.changeHandler("firstName", first_name);
  }
  handleLastName = (last_name) => {
    this.changeHandler("lastName", last_name);
  }
  handleContactNo = (contact_no) => {
    this.changeHandler("contactNo", contact_no);
  }
  handleDateOfBirth = (date_of_birth) => {
    this.changeHandler("dateOfBirth", new Date(date_of_birth).toISOString());
  }

  handleSubmit = async () => {
    await this.formRef.current.submit();
  }

  render () {
    return (
      <View style={styles.action}>
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

export default EmploymentForm;