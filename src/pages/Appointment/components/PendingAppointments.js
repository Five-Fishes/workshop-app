import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import { GeneralStyles, ToastMessage } from "../../../components";
import styles from "../AppointmentStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALL_APPOINTMENTS, UPDATE_APPOINMENT } from "../../../graphql";
import { useLazyQuery, useMutation } from "@apollo/client";
// import { ToastMessage } from "../../../components/Notify/Toast";

const userImagePlaceholder = require("../../../staticResources/images/userPlaceholder.png");

export default (props) => {

  useEffect(() => {
    if ((!allPendingCalled && !pendingAppointments)) {
      fetchAppointments()
    }
  })

  const [getAllPendingAppointments, { 
    called: allPendingCalled, 
    loading: allPendingLoading, 
    data: pendingAppointments,
    error: allPendingErr,
    refetch
  }] = useLazyQuery(ALL_APPOINTMENTS);

  const [updateAppointment, { 
    data: appointmentUpdate, error: updateErr, called: updateCalled
  }] = useMutation(UPDATE_APPOINMENT);

  const fetchAppointments = () => {
    console.log("REFRESH")
    // TODO: Replace with async storage
    // branchID: AsyncStorage.getItem("BRANCH_ID"),
    const filter = {
      branchID: "60082edcbc6b09993f1ae93e",
      appointmentStatus: props.statuses.PENDING
    }
    console.log(JSON.stringify(filter))
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
    const filter = {
      branchID: "60082edcbc6b09993f1ae93e",
      appointmentStatus: props.statuses.PENDING
    }
    refetch({variables: {filter: JSON.stringify(filter)}});
    // ToastMessage({message: updateErr.message, title: "Error"});
  }
  
  if(appointmentUpdate) {
    console.log(appointmentUpdate, updateCalled)
    Alert.alert("Success", "Appointment Updated");
    // refreshAppointments()
    // ToastMessage({message:"Appointment Updated",title:"Success"});
  }

  if (allPendingCalled && pendingAppointments) {
    const appointments = pendingAppointments.appointments
    return (
      <FlatList
        style={styles.listView}
        data={appointments}
        extraData={pendingAppointments.appointments}
        keyExtractor={(appointment) => appointment.id.toString()}
        renderItem={({item}) => (
          <View style={styles.smallcon}>
            <View style={styles.itemList}>
              {/* TODO: replace with user image */}
              <Image source={userImagePlaceholder} style={styles.pic} />
              <View style={styles.itemList3}>
                {item.serviceID.serviceNm && (<Text style = {styles.name}>{ item.serviceID.serviceNm }</Text>)}
                {item.customerID.firstName && (<Text style = {styles.name}>{ item.customerID.firstName } { item.customerID.lastName }</Text>)}
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
                  <Text>Accpet</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  style={styles.buttonreject}
                  onPress={() => {
                    handleUpdate(item, props.statuses.REJECTED)
                  }}
                >
                  <Text>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      >
      </FlatList>
    )
  }
  else {
    return (
      <View>
        {Boolean(allPendingErr) ? (
          <Text style={GeneralStyles.errorText}>{allPendingErr.message}</Text>
        ) : (
          <Text style={GeneralStyles.errorText}>No Pending Appointment</Text>
        )}
      </View>
    )
  }
}