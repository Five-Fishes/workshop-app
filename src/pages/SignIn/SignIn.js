import React from "react";
import { View, Button, Alert, FlatList, Text } from "react-native";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_IMAGE_STOARGES, CERATE_NEW_IMAGE } from "../../graphql";

const SignIn = ({ navigation }) => {
  const { loading, error, data: imagesData } = useQuery(ALL_IMAGE_STOARGES, {
    variables: { filter: "{}" },
  });

  const [addImage, { data: newImage, error: createImageErr }] = useMutation(
    CERATE_NEW_IMAGE
  );

  const dumbImage = {
    id: null,
    imageURL: "http://www.storage/abc",
    imageSize: 10,
    imageType: "images/jpeg",
    imageFileNm: "Image from Workshop",
  };

  /**
   * Fix
   */
  if (imagesData) {
    console.log("imagesData :>> ", imagesData.getImageStorages);
  }

  if (newImage) {
    console.log("newImage :>> ", newImage);
  }

  if (createImageErr) {
    console.log("error :>> ", createImageErr);
  }

  return (
    <View>
      {console.log(loading, error, imagesData)}
      <Button
        title="Go To Home"
        onPress={() => {
          addImage({ variables: { imageStorageInput: dumbImage } });
        }}
      />
      {imagesData && <Text>{imagesData.getImageStorages.toString()}</Text>}
    </View>
  );
};

export default SignIn;
