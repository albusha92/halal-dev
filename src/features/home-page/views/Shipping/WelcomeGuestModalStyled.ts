import { colors } from "config/constants";
import styled from "styled-components";

export const WelcomeGuestTitle = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const WelcomeGuestSubTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const WelcomeGuestFormContainer = styled.div``;

export const InputHorizontal = styled.div`
  color: ${colors.grey};
  font-weight: bold;
  /* display: flex;
  align-items: flex-start; */
  gap: 1rem;
  /* justify-content: center; */
`;

export const DeliveryAddressContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
`;

export const FindLocationButton = styled.div`
  color: white;
  cursor: pointer;
  background-color: ${colors.secondary};
  padding: 0.5rem 2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
