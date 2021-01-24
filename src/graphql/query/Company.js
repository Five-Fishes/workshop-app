import { gql } from "@apollo/client";

export const ALL_COMPANIES = gql`
  query Companies($filter: String!) {
    companies(filter: $filter) {
      id
      companyNm
      companyAddr
      ownerID
    }
  }
`;