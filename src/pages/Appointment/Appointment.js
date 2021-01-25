import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity  } from "react-native";
import Background from "../../components/Background/Background";
import styles from "./AppointmentStyle";
import PendingAppointmentsList from "./components/PendingAppointments";
import AcceptedAppointmentsList from "./components/AcceptedAppointments";

const Appointment = ({navigation} ) => {

  const APPOINTMENT_STATUS = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED"
  }

  const tabs = {
    "PENDING": "Pending",
    "ACCEPTED": "Accepted"
  }
  const [tab, setTab] = useState(tabs.PENDING);
  const triggerTab = (tabSelected) => {
    setTab(tabSelected);
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.buttoncon}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              triggerTab(tabs.PENDING)
            }}
          >
            <Text>{tabs.PENDING}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              triggerTab(tabs.ACCEPTED)
            }}
          >
            <Text>{tabs.ACCEPTED}</Text>
          </TouchableOpacity>
        </View>
        <View>
          {Boolean(tab === tabs.PENDING) && (
            <PendingAppointmentsList statuses={APPOINTMENT_STATUS} />
          )}
          {Boolean(tab === tabs.ACCEPTED) && (
            <AcceptedAppointmentsList statuses={APPOINTMENT_STATUS} />
          )}
        </View>
      </View>
    </Background>
  );
};

export default Appointment;