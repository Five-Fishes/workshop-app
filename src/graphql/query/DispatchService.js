import { gql } from "@apollo/client";

export const ALL_DISPATCH_SERVICES = gql`
  query getDispatchServices($filter: String) {
    getDispatchServices(filter: $filter) {
      id
      dispatchTimeStamp
      customerLocationDesc
      serviceLocation
      foremanCurrentLocation
      foremanDepartTime
      estimatedArrivalTime
      status
      branch {
        id
        branchAddr
        branchContactNo
      }
      employee {
        id
        firstName
        lastName
        contactNo
        ip
        employeeType
        employmentBranch
      }
      customer {
        id
        firstName
        lastName
        contactNo
        ip
      }
      service {
        id
        serviceNm
        estimatedServiceTime
      }
      vehicle {
        vehicleType
        vehicleBrand
        vehicleModel
        vehiclePlateNumber
      }
    }
  }
`;

export const DISPATCH_SERVICE = gql`
  query GetDispatchService($id: ID!) {
    getDispatchService(id: $id) {
      id
      dispatchTimeStamp
      customerLocationDesc
      serviceLocation
      foremanCurrentLocation
      foremanDepartTime
      estimatedArrivalTime
      status
      branch {
        branchAddr
        branchContactNo
      }
      employee {
        firstName
        lastName
        contactNo
        ip
        employeeType
        employmentBranch
      }
      customer {
        firstName
        lastName
        contactNo
        ip
      }
      service {
        serviceNm
        estimatedServiceTime
      }
      vehicle {
        vehicleType
        vehicleBrand
        vehicleModel
        vehiclePlateNumber
      }
    }
  }
`;

export const UPDATE_DISPATCH_SERVICE = gql`
  mutation UpdateDispatchService($dispatchServiceInput: DispatchServiceInput!) {
    updateDispatchService(dispatchServiceInput: $dispatchServiceInput) {
      id
      dispatchTimeStamp
      customerLocationDesc
      serviceLocation
      foremanCurrentLocation
      foremanDepartTime
      estimatedArrivalTime
      status
      branch {
        id
        branchAddr
        branchContactNo
      }
      employee {
        id
        firstName
        lastName
        contactNo
        ip
        employeeType
        employmentBranch
      }
      customer {
        id
        firstName
        lastName
        contactNo
        ip
      }
      service {
        id
        serviceNm
        estimatedServiceTime
      }
      vehicle {
        vehicleType
        vehicleBrand
        vehicleModel
        vehiclePlateNumber
      }
    }
  }
`;