import { gql } from "@apollo/client";

export const ALL_APPOINTMENTS = gql`
  query Appointments($filter: String!) {
    appointments(filter: $filter) {
      id
      appointmentDate
      customerID {
        firstName
        lastName
        contactNo
      }
      branchID {
        branchAddr
        branchContactNo
      }
      serviceID {
        serviceNm
      }
      vehicleID
      appointmentStatus
    }
  }
`;

export const APPOINTMENT = gql`
  query Appointment($id: String!) {
    appointment(id: $id) {
      id
      appointmentDate
      customerID {
        firstName
        lastName
        contactNo
      }
      branchID {
        branchAddr
        branchContactNo
      }
      serviceID {
        serviceNm
      }
      vehicleID
      appointmentStatus
    }
  }
`;

export const UPDATE_APPOINMENT = gql`
  mutation UpdateAppointment($appointmentInput: AppointmentInput!) {
    updateAppointment(appointmentInput: $appointmentInput) {
      id
      appointmentDate
      customerID {
        firstName
        lastName
        contactNo
      }
      branchID {
        branchAddr
        branchContactNo
      }
      serviceID {
        serviceNm
      }
      vehicleID
      appointmentStatus
    }
  }
`;