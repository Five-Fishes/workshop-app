import { gql } from "@apollo/client";

// Branches.fragments = {
//   branch: gql`
//     fragment BranchesType on Branch {
//       id
//       companyId
//       branchAddr
//       branchContactNo
//       hasDispatchService
//       businesshours {
//         mon {
//           open
//           break
//           close
//         }
//         tue {
//           open
//           break
//           close
//         }
//       }
//     }
//   `,
// };

// const BusinessHoursType = gql`
//   type BusinessHours {
//     mon: {
//       String
//       break
//       close
//     }
//         tue {
//           open
//           break
//           close
//         }
//   }
// `

export const ALL_BRANCHES = gql`
  query Branches($filter: String!) {
    branches(filter: $filter) {
      id
      companyId
      branchAddr
      branchContactNo
      hasDispatchService
    }
  }
`;

export const BRANCH = gql`
  query Branch($id: String!) {
    branch(id: $id) {
      id
      companyId
      branchAddr
      branchContactNo
      hasDispatchService
    }
  }
`;