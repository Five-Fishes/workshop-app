import { gql } from "@apollo/client";

export const ALL_APPOINTMENTS = gql`
  query Appointments($filter: String) {
    appointments(filter: $filter) {
      id
      appointmentDate
      customerID
      branchID
      vehicleID
      serviceID
      appointmentStatus
    }
  }
`;

export const APPOINTMENT = gql`
  query Appointment($id: String!) {
    appointment(id: $id) {
      id
      appointmentDate
      customerID
      branchID
      vehicleID
      serviceID
      appointmentStatus
    }
  }
`;

export const UPDATE_APPOINMENT = gql`
  mutation CreateAppointment($appointmentInput: appointmentInput!) {
    createAppointment(appointmentInput: $appointmentInput) {
      id
      appointmentDate
      customerID
      branchID
      vehicleID
      serviceID
      appointmentStatus
    }
  }
`;