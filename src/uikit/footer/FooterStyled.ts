import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";

export const FooterContainer = styled.div`
  @media ${device.tablet768} {
    padding: 4% 100px;
  }

  @media ${device.lap1024} {
    padding: 4% 25px;
  }

  /* @media ${device.lap1366} {
    padding: 8% 75px;
  } */

  @media ${device.lap1440} {
    padding: 4% 100px;
  }

  @media ${device.lap1600} {
    padding: 4% 135px;
  }
  display: flex;
  justify-content: space-between;
`;

export const FooterFontSize = styled.div`
  @media ${device.tablet768} {
    font-size: 14px;
  }

  @media ${device.lap1024} {
    font-size: 12px;
  }

  @media ${device.lap1280} {
    font-size: 13px;
  }

  @media ${device.lap1366} {
    font-size: 14px;
  }

  @media ${device.lap1440} {
    font-size: 13px;
  }

  @media ${device.lap1600} {
    font-size: 14px;
  }

  @media ${device.lap1920} {
    font-size: 14px;
  }
`;

export const FooterPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

export const PartOne = styled(FooterPartContainer)`
  width: 20%;
`;

export const PartTwo = styled(FooterPartContainer)``;

export const Title = styled(FooterFontSize)`
  font-weight: bold;
`;

export const ContentContainer = styled(FooterFontSize)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const IconContainer = styled.div`
  font-size: 20px;
  color: ${colors.black};
`;

export const PhoneNumber = styled.div`
  color: ${colors.black};
  font-weight: bold;
  font-size: 22px;
  margin-left: 40px;
  @media ${device.tablet768} {
    font-size: 14px;
  }

  @media ${device.lap1024} {
    font-size: 18px;
    margin-left: 10px;
  }

  @media ${device.lap1280} {
    font-size: 18px;
    margin-left: 30px;
  }

  @media ${device.lap1366} {
    font-size: 19px;
  }

  @media ${device.lap1440} {
    font-size: 20px;
    margin-left: 30px;
  }

  @media ${device.lap1600} {
    font-size: 22px;
  }

  @media ${device.lap1920} {
    font-size: 22px;
  }
`;

export const ContactInfor = styled.span`
  cursor: pointer;
`;

export const PartTwoContainer = styled(FooterFontSize)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PartThree = styled(FooterPartContainer)``;

export const PartThreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 70%;
  align-items: center;
`;

export const PartFourContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;
