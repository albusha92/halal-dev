import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const ComingSoonContainer = styled.div`
  position: relative;
  background-color: ${colors.primary};
`;

export const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media ${device.tablet} {
    padding: 0 37% 8% 100px;
  }

  @media ${device.lap1024} {
    padding: 0 37% 7% 25px;
  }

  @media ${device.lap1280} {
    padding: 0 37% 9% 100px;
  }

  @media ${device.lap1440} {
    padding: 0 37% 8% 100px;
  }

  @media ${device.lap1600} {
    padding: 0 37% 7% 135px;
  }
  @media ${device.lap1920} {
    padding: 0 37% 9% 135px;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    bottom: -75px;
  }

  @media ${device.lap1024} {
    bottom: -45px;
  }

  @media ${device.lap1440} {
    bottom: -70px;
  }

  @media ${device.lap1600} {
    bottom: -75px;
  }
`;

export const LogoTrustImage = styled.img`
  @media ${device.tablet} {
    width: 100px;
  }

  @media ${device.lap1024} {
    width: 90px;
  }

  @media ${device.lap1440} {
    width: 140px;
  }

  @media ${device.lap1600} {
    width: 150px;
  }
`;

export const BigTitle = styled.div`
  -webkit-text-stroke-color: #fff;
  letter-spacing: 5px;
  color: ${colors.white};
  font-weight: 800;
  /* text-transform: uppercase; */
  @media ${device.tablet} {
    font-size: 80px;
    line-height: 85px;
  }

  @media ${device.lap1024} {
    font-size: 40px;
    line-height: 50px;
    -webkit-text-stroke-width: 2px;
  }

  @media ${device.lap1280} {
    font-size: 43px;
    line-height: 50px;
    -webkit-text-stroke-width: 2px;
  }

  @media ${device.lap1440} {
    font-size: 53px;
    line-height: 65px;
    -webkit-text-stroke-width: 3px;
  }

  @media ${device.lap1600} {
    font-size: 60px;
    line-height: 95px;
    -webkit-text-stroke-width: 3px;
  }
  @media ${device.lap1920} {
    font-size: 73px;
  }
`;

export const Subtitle = styled.div`
  font-weight: 600;
  color: white;
  @media ${device.tablet} {
    font-size: 24px;
    margin-top: 20px;
  }

  @media ${device.lap1024} {
    font-size: 14px;
    margin-top: 20px;
  }

  @media ${device.lap1440} {
    font-size: 19px;
    margin-top: 20px;
  }

  @media ${device.lap1600} {
    font-size: 21px;
    margin-top: 20px;
  }
  @media ${device.lap1920} {
    font-size: 24px;
  }
`;

export const SendEmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubscribeNowBtn = styled.div`
  background-color: ${colors.secondary};

  color: white;
  padding-left: 15px;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    font-size: 24px;
    width: 230px;
  }

  @media ${device.lap1024} {
    font-size: 14px;
    width: 130px;
  }

  @media ${device.lap1440} {
    font-size: 20px;
    width: 180px;
  }

  @media ${device.lap1600} {
    font-size: 24px;
    width: 200px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  padding-top: 5px;
`;
