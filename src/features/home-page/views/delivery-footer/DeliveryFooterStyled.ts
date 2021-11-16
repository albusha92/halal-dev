import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const DeliveryContainer = styled.div`
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

export const PartnerContainer = styled.div`
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
  & button {
    border: none;
    &::after {
      display: none;
    }
  }
  & .ant-select-selector {
    padding: 0 !important;
	@media ${device.lap1024} {
    font-size: 0.7rem;
	@media ${device.lap1280} {
    font-size: 1rem;
  }
  }
  }
  & .ant-select-selection-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  /* & .ReactFlagsSelect-module_selectBtn__19wW7[aria-expanded="true"]:after {
    display: none;
  } */
  & ul {
    margin: 0;
  }
  
  
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const SafetyContainer = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const RatingContainer = styled.div``;

export const ContactContainer = styled.div``;
