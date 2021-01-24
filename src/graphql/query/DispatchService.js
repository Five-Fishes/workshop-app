import { gql } from "@apollo/client";

export const ALL_DISPATCH_SERVICEs = gql`
  query getDispatchServices($filter: String) {
    getDispatchServices(filter: $filter) {
      id
      dispatchTimeStamp
      branch
      employee
      customer
      service
      vehicle
      customerLocationDesc
      serviceLocation
      foremanCurrentLocation
      foremanDepartTime
      estimatedArrivalTime
      status
    }
  }
`;

export const DISPATCH_SERVICE = gql`
  query GetDispatchService($id: ID!) {
    getDispatchService(id: $id) {
      id
      dispatchTimeStamp
      branch
      employee
      customer
      service
      vehicle
      customerLocationDesc
      serviceLocation
      foremanCurrentLocation
      foremanDepartTime
      estimatedArrivalTime
      status
    }
  }
`;

export const UPDATE_DISPATCH_SERVICE = gql`
  mutation UpdateDispatchService($dispatchServiceInput: DispatchServiceInput!) {
    updateDispatchService(dispatchServiceInput: $dispatchServiceInput) {
      id
      dispatchTimeStamp
      branch
      employee
      customer
      service
      vehicle
      customerLocationDesc
      serviceLocation
      foremanCurrentLocation
      foremanDepartTime
      estimatedArrivalTime
      status
    }
  }
`;