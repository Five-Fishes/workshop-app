import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import GeneralStyles from "../../../components/Styling/GeneralStyle";
import styles from "../AppointmentStyle";
import { ALL_APPOINTMENTS } from "../../../graphql";
import { useLazyQuery } from "@apollo/client";
import { getUserInfo } from "../../../utils/AuthenticationUtils";
// import ModalComponent from "./Modal";

const userImagePlaceholder = require("../../../staticResources/images/userPlaceholder.png");

export default (props) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        setUserInfo(res)
      })
    }
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
                {item.service.serviceNm && (<Text style = {styles.name}>{ item.service.serviceNm }</Text>)}
                {item.customer.firstName && (<Text style = {styles.name}>{ item.customer.firstName + " " + item.customer.lastName }</Text>)}
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
                  <Text style={GeneralStyles.whiteText}>View</Text>
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