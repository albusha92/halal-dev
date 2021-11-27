import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";

export const StickyContactContainer = styled.div`
  background-color: ${colors.primary};
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: white;
  padding: 10px;
  font-size: 20px;
  position: sticky;
  top: 45%;
  z-index: 100;
  left: 100%;
  @media ${device.mobileS} {
    padding: 0.3rem;
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    padding: 0.3rem;
    font-size: 1rem;
  }
  @media ${device.tablet768} {
    padding: 0.5rem;
    font-size: 1rem;
  }
  @media ${device.lap1024} {
    padding: 0.6rem;
    font-size: 1rem;
    gap: 1rem;
  }
  @media ${device.lap1440} {
    padding: 0.7rem;
    font-size: 1.3rem;
    gap: 1.2rem;
  }
  @media ${device.lap1920} {
	padding: 0.7rem;
    font-size: 1.3rem;
    gap: 1.2rem;
  }
`;

export const IconContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
`;
