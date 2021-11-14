import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const AdvisoryBoardContainer = styled.div`
  background-color: ${colors.greyBackground};
  margin-top: 1rem;
  padding: 1rem 0.5rem;
  @media ${device.tablet768} {
    flex-direction: row;
    padding: 1.5rem 0.5rem;
  }
  @media ${device.tablet960} {
    padding: 2rem 0.5rem;
  }
  @media ${device.lap1024} {
    padding: 2rem 5rem;
  }
  @media ${device.lap1440} {
  }
  @media ${device.lap1600} {
    /* max-width: 90rem; */
    padding: 4rem 14rem;
    margin: 0 auto;
  }
`;
