import { gql } from "@apollo/client";

export const ALL_PROMOTIONS = gql`
  query Promotions($filter: String!) {
    promotions(filter: $filter) {
      id
      promotionNm
      promotionStart
      promotionEnd
      image {
        imageURL
        imageSize
        imageType
        imageFileNm
      }
      promotionService {
        serviceNm
        isDispatchAvailable
        isInHouseAvailable
        estimatedServiceTime
      }
      promotionBranch {
        branchAddr
        branchContactNo
      }
      promoCode
      discountAmt
    }
  }
`;

export const PROMOTION = gql`
  query Promotion($id: String!) {
    promotion(id: $id) {
      id
      promotionNm
      promotionStart
      promotionEnd
      image {
        id
        imageURL
        imageSize
        imageType
        imageFileNm
      }
      promotionService {
        id
        serviceNm
        isDispatchAvailable
        isInHouseAvailable
        estimatedServiceTime
      }
      promotionBranch {
        id
        branchAddr
        branchContactNo
      }
      promoCode
      discountAmt
    }
  }
`;

export const NEW_PROMOTION = gql`
  mutation CreatePromotion($promotionInput: PromotionInput!) {
    createPromotion(promotionInput: $promotionInput) {
      id
      promotionNm
      promotionStart
      promotionEnd
      image {
        id
        imageURL
        imageSize
        imageType
        imageFileNm
      }
      promotionService {
        id
        serviceNm
        isDispatchAvailable
        isInHouseAvailable
        estimatedServiceTime
      }
      promotionBranch {
        id
        branchAddr
        branchContactNo
      }
      promoCode
      discountAmt
    }
  }
`;

export const UPDATE_PROMOTION = gql`
  mutation UpadatePromotion($promotionInput: PromotionInput!) {
    updatePromotion(promotionInput: $promotionInput) {
      id
      promotionNm
      promotionStart
      promotionEnd
      image {
        id
        imageURL
        imageSize
        imageType
        imageFileNm
      }
      promotionService {
        id
        serviceNm
        isDispatchAvailable
        isInHouseAvailable
        estimatedServiceTime
      }
      promotionBranch {
        id
        branchAddr
        branchContactNo
      }
      promoCode
      discountAmt
    }
  }
`;

export const REMOVE_PROMOTION = gql`
  mutation DeletePromotion($id: String!) {
    deletePromotion(id: $id) {
      id
      promotionNm
      promotionStart
      promotionEnd
      image {
        id
        imageURL
        imageSize
        imageType
        imageFileNm
      }
      promotionService {
        id
        serviceNm
        isDispatchAvailable
        isInHouseAvailable
        estimatedServiceTime
      }
      promotionBranch {
        id
        branchAddr
        branchContactNo
      }
      promoCode
      discountAmt
    }
  }
`;