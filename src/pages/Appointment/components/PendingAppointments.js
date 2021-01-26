import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import { GeneralStyles } from "../../../components";
import styles from "../AppointmentStyle";
import { ALL_APPOINTMENTS, UPDATE_APPOINMENT } from "../../../graphql";
import { useLazyQuery, useMutation } from "@apollo/client";
import { getUserInfo } from "../../../utils/AuthenticationUtils";

const userImagePlaceholder = require("../../../staticResources/images/userPlaceholder.png");

export default (props) => {
  const [userInfo, setUserInfo] = useState();
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        console.log(res)
        fetchAppointments(res.employmentBranch)
        setUserInfo(res)
      })
    }
  }, [])

  const [getAllPendingAppointments, { 
    called: allPendingCalled, 
    loading: allPendingLoading, 
    data: pendingAppointments,
    error: allPendingErr,
    refetch
  }] = useLazyQuery(ALL_APPOINTMENTS);

  const [updateAppointment, { 
    data: appointmentUpdate, error: updateErr, called: updateCalled
  }] = useMutation(UPDATE_APPOINMENT, [{refetchQueries: ALL_APPOINTMENTS}]);

  const fetchAppointments = (branch) => {
    // TODO: Replace with async storage
    // branchID: AsyncStorage.getItem("BRANCH_ID"),
    const filter = {
      branchID: branch,
      appointmentStatus: props.statuses.PENDING
    }
    getAllPendingAppointments({variables: {filter: JSON.stringify(filter)}});
  }

  const handleUpdate = (appointment, status) => {
    updateAppointment({variables: {
      appointmentInput: {
        id: appointment.id,
        appointmentDate: appointment.appointmentDate,
        appointmentStatus: status,
        branchID: appointment.branchID,
        customerID: appointment.customerID,
        serviceID: appointment.serviceID,
        vehicleID: appointment.vehicleID
      }
    }})
  }
  if (updateErr) {
    Alert.alert("Error", updateErr.message);   
  }
  // if (pendingAppointments) {
  //   setAppointmentList(pendingAppointments.appointments);
  // }

  // const removeAppoinment = (appointment) => {
  //   console.log(appointment)
  //   setAppointmentList((prevAppoinments) => {
  //     return prevAppoinments.filter(data => data.id !== appointment.id);
  //   })
  // }
  
  if(appointmentUpdate) {
    Alert.alert("Success", "Appointment Updated");
    console.log(appointmentUpdate)
    // removeUpdated(appointmentUpdate)
  }

  return (
    <ScrollView>
      {pendingAppointments && (
        pendingAppointments.appointments.map(item => {
          return (
            <View key={item.id.toString()}>
              <View style={styles.smallcon}>
                <View style={styles.itemList}>
                  {/* TODO: replace with user image */}
                  <Image source={userImagePlaceholder} style={styles.pic} />
                  <View style={styles.itemList3}>
                    {item.customer.firstName && (<Text style = {styles.name}>{ item.customer.firstName + " " + item.customer.lastName }</Text>)}
                    {item.service.serviceNm && (<Text style = {styles.time}>{ item.service.serviceNm }</Text>)}
                    <Text style = {styles.time}>{ (new Date(item.appointmentDate).toDateString()) }</Text>
                  </View>
                </View>
                <View style={styles.buttoncon2}>
                  <TouchableOpacity 
                      style={styles.buttonaccept}
                      onPress={() => {
                        handleUpdate(item, props.statuses.ACCEPTED)
                      }}
                    >
                      <Text style={GeneralStyles.whiteText}>Accpet</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                      style={styles.buttonreject}
                      onPress={() => {
                        handleUpdate(item, props.statuses.REJECTED)
                      }}
                    >
                      <Text style={GeneralStyles.whiteText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        })
    )}
    {Boolean(allPendingErr) && (
      <Text style={GeneralStyles.errorText}>{allPendingErr.message}</Text>
    )}
    {!pendingAppointments && (
      <Text style={GeneralStyles.errorText}>No Accepted Appointment</Text>
    )}
    </ScrollView>
  )
}