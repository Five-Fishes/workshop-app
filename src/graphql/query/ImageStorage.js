import { gql } from "@apollo/client";

export const ALL_IMAGE_STOARGES = gql`
  query {
    getImageStorages(filter: filter) {
      getImages(filter: $filter) {
        id
        imageURL
        imageSize
        imageType
        imageFileNm
      } 
    }
  }
`;

export const CERATE_NEW_IMAGE = gql`
  mutation {
    createImageStorage(imageStorageInput: ImageStorageInput) {
      createImage(imageStorageInput: $imageStorageInput){
        id
        imageURL
        imageSize
        imageType
        imageFileNm
      }
    }
  }
`;
