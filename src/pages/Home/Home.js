import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';
import styles from "./HomeStyle";
import Background from "../../components/Background/Background";

import { ALL_APPOINTMENTS, ALL_DISPATCH_SERVICES, BRANCH, ALL_PROMOTIONS } from "../../graphql";
import { useLazyQuery } from "@apollo/client";
import { getUserInfo } from "../../utils/AuthenticationUtils";


const Home = ({ navigation, route }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        setUserInfo(res)
      })
    }
    if ((!allAppointments)) {
      fetchAppointments();
    }
    if(!dispatchServiceList) {
      fetchDispatchServie();
    }
    if(!promotionsList) {
      fetchPromotions();
    }
    if(!allCompletedAppointments) {
      fetchCompletededAppointments();
    }
    if(!myBranch) {
      fetchBranchDetails();
    }
  }, [allAppointments, dispatchServiceList, promotionsList])

  const [getBranch, { 
    called: getBranchCalled, 
    loading: getBranchLoading, 
    data: myBranch,
    error: getBranchErr,
  }] = useLazyQuery(BRANCH);
  const fetchBranchDetails = () => {
    // TODO: Replace with async storage
    // branchID: AsyncStorage.getItem("BRANCH_ID"),
    getBranch({variables: {id: "60082edcbc6b09993f1ae93e"}});
  }

  const [getAllPendingAppointments, { 
    called: allPendingCalled, 
    loading: allPendingLoading, 
    data: allAppointments,
    error: allPendingErr,
  }] = useLazyQuery(ALL_APPOINTMENTS);  
  const fetchAppointments = () => {
    // TODO: Replace with async storage
    // branchID: AsyncStorage.getItem("BRANCH_ID"),
    const filter = {
      branchID: "60082edcbc6b09993f1ae93e",
      appointmentStatus: "PENDING"
    }
    getAllPendingAppointments({variables: {filter: JSON.stringify(filter)}});
  }

  const [getAllCompletedAppointments, { 
    called: allCompletedCalled, 
    loading: allCompletedLoading, 
    data: allCompletedAppointments,
    error: allCompletedErr,
  }] = useLazyQuery(ALL_APPOINTMENTS);  
  const fetchCompletededAppointments = () => {
    // TODO: Replace with async storage
    // branchID: AsyncStorage.getItem("BRANCH_ID"),
    const filter = {
      branchID: "60082edcbc6b09993f1ae93e",
      appointmentStatus: "COMPLETED"
    }
    getAllCompletedAppointments({variables: {filter: JSON.stringify(filter)}});
  }

  const [getALlDispatchServices, 
    {
      data: dispatchServiceList,
      error: getDispatchServiceErr,
      called: getDispatchServiceCalled
    }] = useLazyQuery(ALL_DISPATCH_SERVICES);
  const fetchDispatchServie = () => {
    getALlDispatchServices({variables: {
      filter: JSON.stringify({
        status: ["ACCEPTED"]
      })
    }})
  }

  const [getAllPromotions, 
    {data: promotionsList, error: getPromotionErr}] = useLazyQuery(ALL_PROMOTIONS);
  const fetchPromotions = () => {
    const filter = {
      
    }
    getAllPromotions({variables: {
      filter: JSON.stringify(filter)
    }})
  }
  if(getBranchErr) {
    console.log(getBranchErr.message)
  }

  return (
    <Background>
    <SafeAreaView style={{flex:1 }}>
      <View style={{flexDirection:"row", marginVertical: "auto"}}>
        <View style = {styles.infoCard}>
          <View style={{  paddingHorizontal: 1, flexDirection:"row" }}>
            {/* <Text style={{
              fontSize: 14, paddingHorizontal:2
              }}>
                  RM   
              </Text> */}
              <Text style={{
              fontSize: 28, fontWeight:"bold"
              }}>
                {allAppointments ? allAppointments.appointments.length : 0}
              </Text>
          </View>
          <View style={{  paddingHorizontal: 8, flexDirection:"row" }}>
              <Text style={{
              fontSize: 14,
              }}>
                  Pending Appointments
              </Text>
          </View>
        </View>
        <View style = {styles.infoCard}>
          <View style={{  paddingHorizontal: 1, flexDirection:"row" }}>
            {/* <Text style={{
              fontSize: 14, paddingHorizontal:2
              }}>
                  RM   
              </Text> */}
              <Text style={{
              fontSize: 28, fontWeight:"bold"
              }}>
                {allCompletedAppointments ? allCompletedAppointments.appointments.length : 0}
              </Text>
          </View>
          <View style={{  paddingHorizontal: 8, flexDirection:"row" }}>
              <Text style={{
              fontSize: 14,
              }}>
                  Completed Appointments
              </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:"row", marginVertical: "auto"}}>
        <View style = {styles.infoCard}>
          <View style={{  paddingHorizontal: 1, flexDirection:"row" }}>
            {/* <Text style={{
              fontSize: 14, paddingHorizontal:2
              }}>
                  RM   
              </Text> */}
              <Text style={{
              fontSize: 28, fontWeight:"bold"
              }}>
                {dispatchServiceList ? dispatchServiceList.getDispatchServices.length : 0}
              </Text>
          </View>
          <View style={{  paddingHorizontal: 8, flexDirection:"row" }}>
              <Text style={{
              fontSize: 14,
              }}>
                  Dispatch Service
              </Text>
          </View>
        </View>
        <View style = {styles.infoCard}>
            <View style={{  paddingHorizontal: 18, flexDirection:"row" }}>
                <Text style={{
                fontSize: 28, fontWeight:"bold"
                }}>
                  {promotionsList ? promotionsList.promotions.length : 0}
                </Text>
            </View>
            <View style={{  paddingHorizontal: 8, flexDirection:"row" }}>
                <Text style={{
                fontSize: 14,
                }}>
                  Active Promotions
                </Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
    </Background>

  );
}

export default Home;
