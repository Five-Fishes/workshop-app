import React, { useState, useCallback, useEffect } from "react";
// Reference on GiftedChat https://github.com/FaridSafi/react-native-gifted-chat
import { GiftedChat } from "react-native-gifted-chat";
import { ALL_MESSAGES, NEW_MESSAGE } from "../../graphql";
import { useMutation, useQuery } from "@apollo/client";
import { getUserInfo } from "../../utils/AuthenticationUtils";
import { Alert, Text, View } from "react-native";

const userImagePlaceholder = require("../../staticResources/images/userPlaceholder.png");
const defaultImage = "https://docs.google.com/folder/d/1VpvxihuL-hKDoENVlIzHiLXTNArwjgEt/preview?rm=minimal"

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

  const {data: messageList, error: getMessagesErr, refetch} =  useQuery(ALL_MESSAGES, {
    variables: {
      filter: JSON.stringify({
        chatID: route.params.conversationId
      })
    },
    pollInterval: 500,
  });

  const [createNewMessage, {data: newMessage, error: createMessageErr}] = useMutation(NEW_MESSAGE, {
    refetchQueries: [ {query: ALL_MESSAGES, variables: {
      filter: JSON.stringify({
        chatID: route.params.conversationId
      })
    }} ]
  });

  const onSend = useCallback((messages = []) => {
    console.log(messages)
    const messageInput = {
      messageType: "TEXT",
      messageText: messages[0].text,
      chatID: route.params.conversationId,
    }
    createNewMessage({
      variables: {messageInput: messageInput}})
  }, [])

  if (createMessageErr) {
    Alert.alert(createMessageErr.message)
  }

  // if(messageList) {
  //   console.log(messageList)
  // }

  return messageList ? (
    <GiftedChat
      messages={messageList.getMessages}
      onSend={messages => onSend(messages)}
      user={{
        _id: userInfo ? userInfo.userId : 1,
        name: "",
        avatar: userImagePlaceholder,
      }}
      renderTime={(props) => (
        <View>
          {console.log(props.currentMessage.createdAt)}
          {parseInt(props.currentMessage.createdAt) ? (
            <Text size={10} style={{marginHorizontal: 10, marginBottom: 5}} bold color={props.position === "left" ? 'gray' : 'white'}>
              {`${new Date(parseInt(props.currentMessage.createdAt)).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`}
            </Text>
          ) : (
            <Text size={10} style={{marginHorizontal: 10, marginBottom: 5}} bold color={props.position === "left" ? 'gray' : 'white'}>
              {`${new Date(props.currentMessage.createdAt).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`}
            </Text>
          )}
        </View>
      )}
      renderDay={(props) => (
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',}}>
          {parseInt(props.currentMessage.createdAt) ? (
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: "gray",
              marginTop: 5,
              marginBottom: 10,
            }} bold>
              {`${new Date(parseInt(props.currentMessage.createdAt)).toLocaleDateString()}`}
            </Text>
          ) : (
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: "gray",
              marginTop: 5,
              marginBottom: 10,
            }} bold>
              {`${new Date(props.currentMessage.createdAt).toLocaleDateString()}`}
            </Text>
          )}
        </View>
      )}
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