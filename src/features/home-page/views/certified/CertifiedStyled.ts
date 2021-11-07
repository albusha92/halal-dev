import { device } from "./../../../../config/screensSizes";
import styled from "styled-components";
import { colors } from "./../../../../config/constants";

export const CertifiedContainer = styled.div`
  background-color: ${colors.secondary};
  @media ${device.tablet} {
    padding: 8% 100px;
  }

  @media ${device.lap1024} {
    padding: 8% 80px;
  }

  /* @media ${device.lap1366} {
    padding: 8% 75px;
  } */

  @media ${device.lap1440} {
    padding: 8% 100px;
  }

  @media ${device.lap1600} {
    padding: 8% 135px;
  }
`;

export const PrimaryText = styled.div`
  font-weight: 800;
  color: ${colors.primary};
  text-transform: capitalize;
  -webkit-text-stroke-width: 2px;
  letter-spacing: 1px;
  @media ${device.tablet} {
    font-size: 64px;
    line-height: 75px;
  }

  @media ${device.lap1024} {
    font-size: 31px;
    line-height: 55px;
  }

  @media ${device.lap1280} {
    font-size: 38px;
    line-height: 60px;
  }

  @media ${device.lap1366} {
    font-size: 38px;
    line-height: 60px;
  }

  @media ${device.lap1440} {
    font-size: 38px;
    line-height: 70px;
  }

  @media ${device.lap1600} {
    font-size: 42px;
    line-height: 70px;
  }

  @media ${device.lap1920} {
    font-size: 53px;
    line-height: 75px;
  }
`;

export const WhiteText = styled.p`
  color: ${colors.white};
  margin-bottom: 0;
`;

export const EnjoyText = styled.p`
  color: ${colors.white};
  font-weight: bold;
  font-size: 42px;
  margin-top: 60px;
  margin-bottom: 0;
  display: flex;
  @media ${device.tablet} {
    font-size: 42px;
    margin-top: 60px;
  }

  @media ${device.lap1024} {
    font-size: 24px;
    margin-top: 40px;
  }

  @media ${device.lap1280} {
    font-size: 31px;
    margin-top: 50px;
  }

  @media ${device.lap1366} {
    font-size: 30px;
    margin-top: 50px;
  }

  @media ${device.lap1440} {
    font-size: 28px;
    margin-top: 55px;
  }

  @media ${device.lap1600} {
    font-size: 30px;
    margin-top: 60px;
  }

  @media ${device.lap1920} {
    font-size: 38px;
    margin-top: 60px;
  }
`;

export const WhiteBackgroundText = styled.span`
  color: ${colors.secondary};
  background-color: ${colors.white};
`;

export const CertifiedLogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  @media ${device.tablet} {
    width: 350px;
  }

  @media ${device.lap1024} {
    width: 180px;
  }

  @media ${device.lap1280} {
    width: 230px;
  }

  @media ${device.lap1366} {
    width: 280px;
  }

  @media ${device.lap1440} {
    width: 280px;
  }

  @media ${device.lap1600} {
    width: 300px;
  }

  @media ${device.lap1920} {
    width: 320px;
  }
`;
