import styled from "styled-components";
import { colors } from "../../../config/constants";
import { device } from "../../../config/screensSizes";

export const AboutUsContainer = styled.div`
	position: relative;
`;

export const GreenBackground = styled.div`
  background-color: ${colors.secondary};
  @media ${device.mobileS} {
    height: 3rem;
  }
  @media ${device.mobileL} {
    height: 4rem;
  }
  @media ${device.lap1024} {
    height: 5rem;
  }
  @media ${device.lap1440} {
    height: 7rem;
  }
  @media ${device.lap1920} {
    height: 8rem;
  }
`;

export const HrLine = styled.div`
  height: 1px;
  background-color: #eeeeee;
  margin: 1rem 0.5rem;
  margin-bottom: 0rem;
  /* width: 100%; */
  box-sizing: border-box;
  flex-wrap: nowrap;
  min-height: unset;
  box-shadow: none;
  @media ${device.tablet768} {
    margin: 3rem 2rem 0rem;
  }
  @media ${device.tablet960} {
    margin: 3rem 3rem 0rem;
  }
  @media ${device.lap1280} {
    margin: 3rem 4rem 0rem;
  }
  @media ${device.lap1440} {
    margin: 3rem 7rem 0rem;
  }
  @media ${device.lap1600} {
    max-width: 90rem;
	margin: 3rem auto 1rem;
  }
`;
