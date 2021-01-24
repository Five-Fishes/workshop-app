import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SignUp($userInput: UserInput!) {
    signUp(userInput: $userInput) {
      id
      type
      employeeType
      employmentBranch
      firstName
      lastName
      dateOfBirth
      contactNo
      email
      token
    }
  }
`;

export const SIGN_IN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      type
      employeeType
      employmentBranch
      firstName
      lastName
      dateOfBirth
      contactNo
      email
      token
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateUser($userInput: UserInput!) {
    updateUser(userInput: $userInput) {
      id
      type
      employeeType
      employmentBranch
      firstName
      lastName
      dateOfBirth
      contactNo
      email
      token
    }
  }
`;

export const GET_USER = gql`
  query User($id: String!) {
    user(userId: $id) {
      id
      type
      employeeType
      employmentBranch
      firstName
      lastName
      dateOfBirth
      contactNo
      email
      token
    }
  }
`;