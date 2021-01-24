import { gql } from "@apollo/client";

export const ALL_IMAGE_STOARGES = gql`
  query GetImageStorages($filter: String!) {
    getImageStorages(filter: $filter) {
      id
      imageURL
      imageSize
      imageType
      imageFileNm
    }
  }
`;

export const CERATE_NEW_IMAGE = gql`
  mutation CreateImageStorage($imageStorageInput: ImageStorageInput!) {
    createImageStorage(imageStorageInput: $imageStorageInput) {
      id
      imageURL
      imageSize
      imageType
      imageFileNm
    }
  }
`;
