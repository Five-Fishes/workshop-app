import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ALL_MESSAGES, NEW_MESSAGE } from "../../graphql";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { getUserInfo } from "../../utils/AuthenticationUtils";
import { Text, View } from "react-native";

const userImagePlaceholder = require("../../staticResources/images/userPlaceholder.png");

export default Message = ({props, route}) => {
  const [userInfo, setUserInfo] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(route.params.conversationId)
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        console.log("EFECT", res);
        setUserInfo(res)
      })
    }
  }, [])

  // const [getAllMessage, {data: messageList, error: getMessagesErr}] =  useLazyQuery(ALL_MESSAGES);
  const {data: messageList, error: getMessagesErr, refetch} =  useQuery(ALL_MESSAGES, {variables: {
    filter: JSON.stringify({
      chatID: route.params.conversationId
    })
  }});

  const [createNewMessage, {data: newMessage, error: createMessageErr}] = useMutation(NEW_MESSAGE, {
    refetchQueries: [ {query: ALL_MESSAGES} ]
  });

  // const fetchMessages = () => {
    // getAllMessage({variables: {
    //   filter: JSON.stringify({
    //     chatID: route.params.conversationId
    //   })
    // }})
  // }

  const onSend = useCallback((messages = []) => {
    console.log("MESSAGE", messages)
    const messageInput = {
      messageType: "TEXT",
      messageText: messages[0].text,
      chatID: route.params.conversationId}
    console.log(messageInput)
    createNewMessage({
      variables: {messageInput: messageInput}})
      
      // refetch({variables: {
      //   filter: JSON.stringify({
      //     chatID: route.params.conversationId
      //   })
      // }})
    // })
    // setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  if(newMessage) {
    console.log("NEW MESSAGE: ", newMessage);
    // messageList.getMessages.push(newMessage)
    refetch({variables: {
      filter: JSON.stringify({
        chatID: route.params.conversationId
      })
    }})
  }
  if (createMessageErr) {
    console.log('ERR: ', createMessageErr.message)
  }
  if (getMessagesErr) {
    console.log('ERR: ', getMessagesErr.message)
  }
  if (messageList) {
    console.log(messageList);
  }

  return messageList ?(
    <GiftedChat
      messages={messageList.getMessages}
      onSend={messages => onSend(messages)}
      user={{
        _id: userInfo ? userInfo.userId : 1,
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