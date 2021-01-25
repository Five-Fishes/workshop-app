import { gql } from "@apollo/client";

export const ALL_MESSAGES = gql`
  query GetMessages($filter: String) {
    getMessages(filter: $filter) {
      id
      _id
      chatID
      messageType
      messageText
      image 
      audio
      video
      text
      user {
        _id
      }
      sender {
        id
        type
        firstName
        lastName
      }
      createdAt
    }
  }
`;

export const MESSAGE = gql`
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      _id
      chatID
      messageType
      messageText
      sender {
        id
        type
        firstName
        lastName
      }
      user {
        _id
      }
      createdAt
    }
  }
`;

export const NEW_MESSAGE = gql`
  mutation CreateMessage($messageInput: MessageInput!) {
    createMessage(messageInput: $messageInput) {
      id
      _id
      chatID
      messageType
      messageText
      sender {
        id
        type
        firstName
        lastName
      }
      user {
        _id
      }
      createdAt
    }
  }
`;