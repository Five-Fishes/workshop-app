import { gql } from "@apollo/client";

export const ALL_CONVERSATIONS = gql`
  query GetConversations($filter: String, $users: [ID!]) {
    getConversations(filter: $filter, users: $users) {
      id
      type
      conversationName
      members {
        ... {
          type
          firstName
          lastName
          contactNo
        }
      }
    }
  }
`;

export const CONVERSATION = gql`
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      type
      conversationName
      members {
        ... {
          type
          firstName
          lastName
          contactNo
        }
      }
    }
  }    
`;

export const NEW_CONVERSATION = gql`
  mutation CreateConversation($conversationInput: ConversationInput!) {
    createConversation(conversationInput: $conversationInput) {
      id
      type
      conversationName
      members {
        ... {
          type
          firstName
          lastName
          contactNo
        }
      }
    }
  }    
`;