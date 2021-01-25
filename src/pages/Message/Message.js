import React, { useState, useCallback, useEffect } from "react";
// Reference on GiftedChat https://github.com/FaridSafi/react-native-gifted-chat
import { GiftedChat } from "react-native-gifted-chat";
import { ALL_MESSAGES, NEW_MESSAGE } from "../../graphql";
import { useMutation, useQuery } from "@apollo/client";
import { getUserInfo } from "../../utils/AuthenticationUtils";
import { Alert } from "react-native";

const userImagePlaceholder = require("../../staticResources/images/userPlaceholder.png");

const Message = ({props, route}) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        setUserInfo(res)
      })
    }
  }, [])

  const {data: messageList, error: getMessagesErr, refetch} =  useQuery(ALL_MESSAGES, {variables: {
    filter: JSON.stringify({
      chatID: route.params.conversationId
    })
  }});

  const [createNewMessage, {data: newMessage, error: createMessageErr}] = useMutation(NEW_MESSAGE, {
    refetchQueries: [ {query: ALL_MESSAGES, variables: {
      filter: JSON.stringify({
        chatID: route.params.conversationId
      })
    }} ]
  });

  const onSend = useCallback((messages = []) => {
    console.log("MESSAGE", messages)
    const messageInput = {
      messageType: "TEXT",
      messageText: messages[0].text,
      chatID: route.params.conversationId}
    console.log(messageInput)
    createNewMessage({
      variables: {messageInput: messageInput}})
  }, [])

  if (createMessageErr) {
    Alert.alert(createMessageErr.message)
  }

  return messageList ?(
    <GiftedChat
      messages={messageList.getMessages}
      onSend={messages => onSend(messages)}
      user={{
        _id: userInfo ? userInfo.userId : 1,
        name: "",
        avatar: userImagePlaceholder,
      }}
    />
  ) : (
    <GiftedChat
      messages={[]}
      onSend={messages => onSend(messages)}
      user={{
        _id: userInfo ? userInfo.userId : 1,
      }}
    />
  )
}

export default Message;