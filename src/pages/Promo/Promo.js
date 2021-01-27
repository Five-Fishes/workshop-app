import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert,FlatList,Image,TouchableOpacity } from "react-native";
import Background from "../../components/Background/Background";
import { ALL_PROMOTIONS } from "../../graphql";
import { useLazyQuery, useQuery } from "@apollo/client";
import { getUserInfo } from "../../utils/AuthenticationUtils";
import styles from "./PromoStyle";


const Promo = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        setUserInfo(res)
        console.log(res.userId)
        getAllPromotions({variables: {filter: "{}"}})
      })
    }
  }, [])

  const PROMOTION_TAB = {
    "ONGOING": "Ongoing",
    "SCHEDULED": "Scheduled"
  }
  const [tab, setTab] = useState(PROMOTION_TAB.ONGOING)

  const [getAllPromotions, 
    {data: promotionsList, error: getPromotionErr}] = useLazyQuery(ALL_PROMOTIONS);

  const triggerTab = (tab) => {
    console.log(tab)
    getAllPromotions({variables: {filter: "{}"}})
    setTab(tab);
  }


  return (
    <Background>
      
      <View style={styles.container}>
      <View style={styles.buttoncon}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => triggerTab(PROMOTION_TAB.ONGOING)}
          >
            <Text style={tab === PROMOTION_TAB.ONGOING ? styles.activeTab: "" }>Ongoing</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => triggerTab(PROMOTION_TAB.SCHEDULED)}
          >
            <Text style={tab === PROMOTION_TAB.SCHEDULED ? styles.activeTab: "" }>Scheduled</Text>
          </TouchableOpacity>
          
        </View>
      {promotionsList && (
        <View>
          {tab === PROMOTION_TAB.ONGOING && (
            <FlatList
              style={styles.listView}
              data={promotionsList.promotions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.promoItemWrapper}>
                  {Boolean(
                    new Date(parseInt(item.promotionEnd)) > new Date() &&
                    new Date(parseInt(item.promotionStart)) < new Date()
                  )&& (
                    <View style={styles.itemList}>
                      <Text style = {styles.name}>{ item.promotionNm }</Text>
                      <View style={styles.itemList}>
                        <Text style = {styles.details}>Code: { item.promoCode }</Text>
                      {/* <Image source={{uri:item.Photo}}  style={styles.pic} /> */}
                        <Text style = {styles.details}>Expiry Date: { new Date(parseInt(item.promotionEnd)).toDateString() }</Text>
                        <Text style = {styles.details}>Discount Amount: MYR { item.discountAmt }</Text>
                      </View>
                    </View>
                  )}
                </View>
    
              )}
            >
            </FlatList>
          )}
          {tab === PROMOTION_TAB.SCHEDULED && (
            <FlatList
              style={styles.listView}
              data={promotionsList.promotions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.promoItemWrapper}>
                  {Boolean(
                    new Date(parseInt(item.promotionEnd)) > new Date() &&
                    new Date(parseInt(item.promotionStart)) > new Date()
                  )&& (
                    <View style={styles.itemList}>
                      <Text style = {styles.name}>{ item.promotionNm }</Text>
                      <View style={styles.itemList}>
                        <Text style = {styles.details}>Code: { item.promoCode }</Text>
                        <Text style = {styles.details}>Start: { new Date(parseInt(item.promotionStart)).toDateString() }</Text>
                        <Text style = {styles.details}>Expiry Date: { new Date(parseInt(item.promotionEnd)).toDateString() }</Text>
                        <Text style = {styles.details}>Discount Amount: MYR{ item.discountAmt }</Text>
                      </View>
                    </View>
                  )}
                </View>
    
              )}
            >
            </FlatList>
          )}
        </View>
      )}
    </View>

    </Background>
  );
};

export default Promo;