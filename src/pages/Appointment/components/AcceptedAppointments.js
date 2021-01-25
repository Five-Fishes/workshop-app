import React, {useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import GeneralStyles from "../../../components/Styling/GeneralStyle";
import styles from "../AppointmentStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALL_APPOINTMENTS } from "../../../graphql";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react/cjs/react.development";
import ModalComponent from "./Modal";

const userImagePlaceholder = require("../../../staticResources/images/userPlaceholder.png");

export default (props) => {

  useEffect(() => {
    if (!allAcceptedCalled && !acceptedAppointments) {
      refreshAppointments()
    }
  })

  const [selectedAppointment, setSelectedAppointment] = useState();

  const [getallAcceptedAppointments, { 
    called: allAcceptedCalled, 
    loading: allAcceptedLoading, 
    data: acceptedAppointments,
    error: allAcceptedErr
  }] = useLazyQuery(ALL_APPOINTMENTS);

  const handleView = (appointment) => {
    console.log(appointment)
    setSelectedAppointment(appointment);
  }
  const refreshAppointments = () => {
    const filter = {
      // TODO: Replace with async storage
      // branchID: AsyncStorage.getItem("BRANCH_ID"),
      branchID: "60082edcbc6b09993f1ae93e",
      appointmentStatus: props.statuses.ACCEPTED
    }
    getallAcceptedAppointments({variables: {filter: JSON.stringify(filter)}});
  }
  // {selectedAppointment && (
  //       <ModalComponent appointment={selectedAppointment} />
  //     )}

  if (!allAcceptedLoading && acceptedAppointments) {
    const appointments = acceptedAppointments.appointments
    return (
      <FlatList
        style={styles.listView}
        data={appointments}
        keyExtractor={(appointment) => appointment.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.smallcon}>
            <View style={styles.itemList}>
              {/* TODO: replace with user image */}
              <Image source={userImagePlaceholder} style={styles.pic} />
              <View style={styles.itemList3}>
                {item.serviceID.serviceNm && (<Text style = {styles.name}>{ item.serviceID.serviceNm }</Text>)}
                {item.customerID.firstName && (<Text style = {styles.name}>{ item.customerID.firstName } { item.customerID.lastName }</Text>)}
                <Text style = {styles.time}>{ new Date(item.appointmentDate).toDateString() }</Text>
              </View>
            </View>
            <View style={styles.buttoncon2}>
              <TouchableOpacity 
                  style={styles.buttonaccept}
                  onPress={() => {
                    handleView(item)
                  }}
                >
                  <Text>View</Text>
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
        {Boolean(allAcceptedCalled && !allAcceptedLoading && allAcceptedErr) ? (
          <Text style={GeneralStyles.errorText}>{allAcceptedErr.message}</Text>
        ) : (
          <Text style={GeneralStyles.errorText}>No Accepted Appointment</Text>
        )}
      </View>
    )
  }
}