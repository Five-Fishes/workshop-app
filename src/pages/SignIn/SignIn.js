import React from "react";
import { View, Button, Alert } from "react-native";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_IMAGE_STOARGES, CERATE_NEW_IMAGE } from "../../graphql";

const SignIn = ({ navigation }) => {
  const { loading, error, imagesData } = useQuery(ALL_IMAGE_STOARGES);
  
  const [addImage, { newImage }] = useMutation(CERATE_NEW_IMAGE, {variables: {imageStorageInput: dumbImage}});

  const dumbImage = {
    imageURL: "http://www.storage/abc",
    imageSize: 10,
    imageType: "images/jpeg",
    imageFileNm: "Image from Workshop"
  }
  
  return (
    <View>
      {console.log(loading, error, imagesData)}
      <Button
        title="Go To Home"
        onPress={() => {
          addImage();
          console.log(newImage);
        }}
      />
    </View>
  );
};

export default SignIn;
