import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const PaymentContainer = styled.div`
  text-align: center;
  border-top: 1px solid ${colors.lightGrey};
  @media ${device.mobileS} {
    padding: 1rem 0.5rem;
  }
  @media ${device.lap1024} {
    padding: 2rem 4rem;
  }
  @media ${device.lap1440} {
    padding: 2rem 8rem;
  }
`;

export const PaymentImage = styled.div`
  margin-top: 2rem;
`;
