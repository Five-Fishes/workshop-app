import React, { useEffect } from "react";
import { View, Button, Alert } from "react-native";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_IMAGE_STOARGES, CERATE_NEW_IMAGE } from "../../graphql";
import { signIn } from "../../utils/AuthenticationUtils";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({ navigation }) => {
  // TESTING PURPOSE
  // const testToken = "PUT_YOUR_TOKEN"

  // useEffect(() => {
  //   signIn(testToken)
  //   // const savedToken = await AsyncStorage.getItem("AUTH_TOKEN")
  //   // console.log(savedToken)
  // })
  // const { loading, error, data: imagesData } = useQuery(ALL_IMAGE_STOARGES, {
  //   variables: { filter: "{}" },
  // });

  // const [addImage, { data: newImage, error: createImageErr }] = useMutation(
  //   CERATE_NEW_IMAGE
  // );

  // const dumbImage = {
  //   id: null,
  //   imageURL: "http://www.storage/abc",
  //   imageSize: 70,
  //   imageType: "images/jpeg",
  //   imageFileNm: "Image from Workshop",
  // };

  // /**
  //  * Fix
  //  */
  // if (imagesData) {
  //   console.log("imagesData :>> ");
  // }

  // if (newImage) {
  //   console.log("newImage :>> ", newImage);
  // }

  // if (createImageErr) {
  //   console.log("error :>> ", createImageErr);
  // }

  return (
    <View>
      <Button
        title="Go To Home"
        onPress={() => {
          Alert.alert("HOME")
          // addImage({ variables: { imageStorageInput: dumbImage } });
        }}
      />
    </View>
  );
};

export default SignIn;
