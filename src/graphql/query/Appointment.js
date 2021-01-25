import { gql } from "@apollo/client";

export const ALL_APPOINTMENTS = gql`
  query Appointments($filter: String!) {
    appointments(filter: $filter) {
      id
      appointmentDate
      customer {
        firstName
        lastName
      }
      branch {
        branchAddr
      }
      vehicle {
        vehicleBrand
        vehicleModel
        vehiclePlateNumber
      }
      service {
        serviceNm
      }
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
      customer {
        firstName
        lastName
      }
      branch {
        branchAddr
      }
      vehicle {
        vehicleBrand
        vehicleModel
        vehiclePlateNumber
      }
      service {
        serviceNm
      }
      customerID
      branchID
      vehicleID
      serviceID
      appointmentStatus
    }
  }
`;

export const UPDATE_APPOINMENT = gql`
  mutation UpdateAppointment($appointmentInput: AppointmentInput!) {
    updateAppointment(appointmentInput: $appointmentInput) {
      id
      appointmentDate
      customerID
      branchID 
      serviceID 
      vehicleID
      appointmentStatus
    }
  }
`;