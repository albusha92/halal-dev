import { colors } from "config/constants";
import { device } from "config/screensSizes";
import styled from "styled-components";

export const ThankModalContainer = styled.div``;

export const ThankModalHeader = styled.div`
  height: 70px;
  width: 100%;
  position: relative;
  background-color: ${colors.primary};
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: -2rem;
`;

export const ImageLogo = styled.img`
  width: 5rem;
`;

export const ThankModalContent = styled.div`
  background-color: white;
  padding: 3rem 5rem 1rem;
  text-align: center;
  @media ${device.mobileS} {
    padding: 3rem 1rem 1rem;
  }
  @media ${device.mobileL} {
    padding: 3rem 1rem 1rem;
  }
  @media ${device.lap1024} {
    padding: 3rem 5rem 1rem;
  }
  @media ${device.lap1440} {
    padding: 3rem 5rem 1rem;
  }
  @media ${device.lap1920} {
    padding: 3rem 5rem 1rem;
  }
`;

export const ThankForSubText = styled.div`
  color: black;
  text-align: center;
  font-weight: 500;
`;

export const MeetLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid ${colors.borderGrey};
`;

export const ShareText = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 1.2rem;
`;

export const ShareOrInviteBtn = styled.div`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  background-color: ${colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  gap: 0.5rem;
`;

export const FollowText = styled(ThankForSubText)`
  color: ${colors.darkGrey};
`;

export const ThankModalFooter = styled.div`
  margin: 0 5rem;
  padding: 1rem 0;
  border-top: 1px solid ${colors.borderGrey};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileS} {
    margin: 0 1rem;
  }
  @media ${device.lap1024} {
    margin: 0 5rem;
  }
`;
