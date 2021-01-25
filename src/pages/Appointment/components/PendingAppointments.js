import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import GeneralStyles from "../../../components/Styling/GeneralStyle";
import styles from "../AppointmentStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALL_APPOINTMENTS, UPDATE_APPOINMENT } from "../../../graphql";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect } from "react";

const userImagePlaceholder = require("../../../staticResources/images/userPlaceholder.png");

export default (props) => {

  const APPOINTMENT_STATUS = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED"
  }

  useEffect(() => {
    if (!allPendingCalled && !pendingAppointments) {
      refreshAppointments()
    }
  })

  const [getAllPendingAppointments, { 
    called: allPendingCalled, 
    loading: allPendingLoading, 
    data: pendingAppointments,
    error: allPendingErr
  }] = useLazyQuery(ALL_APPOINTMENTS);

  const [updateAppointment, { data: appointment, error: updateErr }] = useMutation(UPDATE_APPOINMENT);

  const refreshAppointments = () => {
    // TODO: Replace with async storage
    // branchID: AsyncStorage.getItem("BRANCH_ID"),
    const filter = {
      branchID: "60082edcbc6b09993f1ae93e",
      appointmentStatus: APPOINTMENT_STATUS.PENDING
    }
    console.log(filter)
    getAllPendingAppointments({variables: {filter: JSON.stringify(filter)}});
  }

  const handleUpdate = (appointment, status) => {
    updateAppointment({variables: {
      ...appointment,
      appointmentStatus: status
    }})
  }
  if(allPendingErr) {
    console.log(allPendingErr.graphQLErrors)
    console.log(allPendingErr.message)
  }
  if (pendingAppointments) {
    console.log(pendingAppointments.appointments[0])
  }

  if (!allPendingLoading && pendingAppointments && pendingAppointments.appointments && pendingAppointments.appointments.length > 0) {
    return (
      <FlatList
        style={styles.listView}
        data={pendingAppointments.appointments}
        keyExtractor={(appointment) => appointment.id.toString()}
        renderItem={({ appointment }) => (
          <View style={styles.smallcon}>
            {console.log(appointment)}
            <View style={styles.itemList}>
              {/* TODO: replace with user image */}
              <Image source={{userImagePlaceholder}} style={styles.pic} />
              <View style={styles.itemList3}>
                {/* <Text style = {styles.name}>{ appointment.serviceID }</Text> */}
                <Text style = {styles.time}>{ new Date(appointment.appointmentDate) }</Text>
              </View>
            </View>
            <View style={styles.buttoncon2}>
              <TouchableOpacity 
                  style={styles.buttonaccept}
                  onPress={() => {
                    handleUpdate(appointment, APPOINTMENT_STATUS.ACCEPTED)
                  }}
                >
                  <Text>Accpet</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  style={styles.buttonaccept}
                  onPress={() => {
                    handleUpdate(appointment, APPOINTMENT_STATUS.REJECTED)
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