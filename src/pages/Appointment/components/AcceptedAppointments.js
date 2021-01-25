import React, {useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import GeneralStyles from "../../../components/Styling/GeneralStyle";
import styles from "../AppointmentStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALL_APPOINTMENTS } from "../../../graphql";
import { useLazyQuery } from "@apollo/client";

const userImagePlaceholder = require("../../../staticResources/images/userPlaceholder.png");

export default (props) => {

  useEffect(() => {
    if (!allAcceptedCalled && !acceptedAppointments) {
      refreshAppointments()
    }
  })

  const [getallAcceptedAppointments, { 
    called: allAcceptedCalled, 
    loading: allAcceptedLoading, 
    data: acceptedAppointments,
    error: allAcceptedErr
  }] = useLazyQuery(ALL_APPOINTMENTS);

  const refreshAppointments = () => {
    const filter = {
      // TODO: Replace with async storage
      // branchID: AsyncStorage.getItem("BRANCH_ID"),
      branchID: "60082edcbc6b09993f1ae93e",
      appointmentStatus: "ACCEPTED"
    }
    console.log(filter)
    getallAcceptedAppointments({variables: {filter: JSON.stringify(filter)}});
  }

  if (acceptedAppointments && acceptedAppointments.appointments.length > 0) {
    return (
      <FlatList
        style={styles.listView}
        data={acceptedAppointments.appointments}
        keyExtractor={(appointment) => appointment.id.toString()}
        renderItem={({ appointment }) => (
          <View style={styles.smallcon}>
            <View style={styles.itemList}>
              {/* TODO: replace with user image */}
              <Image source={{userImagePlaceholder}} style={styles.pic} />
              <View style={styles.itemList3}>
                <Text style = {styles.name}>{ appointment.serviceID }</Text>
                <Text style = {styles.time}>{ new Date(appointment.appointmentDate) }</Text>
              </View>
            </View>
            <View style={styles.buttoncon2}>
              <TouchableOpacity 
                  style={styles.buttonaccept}
                  onPress={() => {
                    handleView()
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