import { gql } from "@apollo/client";

export const ALL_MESSAGES = gql`
  query GetMessages($filter: String) {
    getMessages(filter: $filter) {
      id
      chatID
      messageType
      messageText
      image {
        imageSize
        imageURL
        imageFileNm
        imageType
      }
      audio {
        audioContent
        audioURL
        audioType
        audioLength
      }
      video {
        videoSize
        videoURL
        videoFileNm
        videoType
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
      chatID
      messageType
      messageText
      image {
        imageSize
        imageURL
        imageFileNm
        imageType
      }
      audio {
        audioContent
        audioURL
        audioType
        audioLength
      }
      video {
        videoSize
        videoURL
        videoFileNm
        videoType
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

export const NEW_MESSAGE = gql`
  mutation CreateMessage($messageInput: MessageInput) {
    createMessage(messageInput: $messageInput) {
      id
      chatID
      messageType
      messageText
      image {
        imageSize
        imageURL
        imageFileNm
        imageType
      }
      audio {
        audioContent
        audioURL
        audioType
        audioLength
      }
      video {
        videoSize
        videoURL
        videoFileNm
        videoType
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