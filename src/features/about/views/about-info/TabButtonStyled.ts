import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const TabContainer = styled.div`
  /* border-radius: 50px; */
  /* box-shadow: 0px 0px 0px 2px ${colors.secondary}; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex: 1;
  font-weight: bold;
  gap: 0.5rem;
  display: inline-flex;
  transition: all 0.3s linear;
  text-align: center;
  @media ${device.mobileS} {
    padding: 0.1rem 0.7rem;
    font-size: 0.5rem;

    & .icon {
      display: none;
      font-size: 1rem;
    }
  }
  @media ${device.mobileM} {
    padding: 0.2rem 1rem;
    font-size: 0.5rem;
  }
  @media ${device.mobileL} {
    padding: 0.2rem 1rem;
    font-size: 0.6rem;
  }
  @media ${device.tablet768} {
    padding: 0.3rem 2rem;
    font-size: 1rem;

    & .icon {
      display: inline-flex;
      font-size: 1.5rem;
    }
  }
  @media ${device.lap1024} {
    padding: 0.4rem 2.7rem;
    font-size: 1rem;
  }
  @media ${device.lap1280} {
    padding: 0.4rem 3.2rem;
    font-size: 1rem;
  }
  @media ${device.lap1440} {
    padding: 0.4rem 3.2rem;
    font-size: 1rem;
  }
  @media ${device.lap1920} {
    padding: 1rem 3.2rem;
    font-size: 1rem;
  }
  &:hover,
  &.focus {
    color: ${colors.primary};
    background-color: ${colors.white};
    cursor: pointer;
  }
`;
