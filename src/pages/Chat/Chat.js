import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Background from "../../components/Background/Background";
import styles from "./ChatStyle";
import { getUserInfo, getToken } from "../../utils/AuthenticationUtils";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ALL_CONVERSATIONS } from "../../graphql";

const userImagePlaceholder = require("../../staticResources/images/userPlaceholder.png");

const Chat = ({ navigation }) => {

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        console.log("EFECT", res);
        setUserInfo(res)
      })
    }
    if (!conversationList && !getConversationsErr) {
      fetchConversation();
    }
  })

  const {data: conversationList, error: getConversationsErr} = useQuery(ALL_CONVERSATIONS, {variables: {
    filter: "{}"
  }});

  const fetchConversation = () => {    
    console.log("FETCH CONVERSATION", userInfo);
    // const filter = {};
    // getAllConversation({variables: {
    //   filter: JSON.stringify(filter)
    // }})
  }

  if (conversationList) {
    console.log(conversationList)
  }

  if (getConversationsErr) {
    console.log("ERR", getConversationsErr)
  }

  return (
    <Background>
      {Boolean(conversationList) && (
        <View style={styles.container}>
          <FlatList
            style={styles.listView}
            data={conversationList.getConversations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Message", {conversationId: item.id})
                }}
              >
                <View style={styles.smallcon}>
                  <View style={styles.itemList}>
                    {item.type === "PERSONAL" ? (
                      <Image source={userImagePlaceholder}  style={styles.pic} />
                    ) : (
                      // TODO: Replace with Group Default Image
                      <Image source={userImagePlaceholder}  style={styles.pic} />
                    )}
                    <View style={styles.chatInfo}>
                      <Text style = {styles.name}>{ item.conversationName }</Text>
                    </View>
                  </View>
                  {/* <View style={styles.itemList2}>
                    <Text style = {styles.details}>{ item.Message }</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
            )}
          >
          </FlatList>
        </View>
      )}
    </Background>
  );
};

export default Chat;
