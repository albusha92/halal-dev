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
  @media ${device.mobileS} {
    padding: 0 0.5rem 1rem;
  }
  @media ${device.tablet768} {
    padding: 0 25% 2.5rem 3rem;
    /* padding-right: 37%; */
  }

  @media ${device.lap1024} {
    padding: 0 30% 3rem 4.5rem;
  }

  @media ${device.lap1280} {
    padding: 0 37% 5rem 100px;
  }

  @media ${device.lap1440} {
    padding: 0 34% 5rem 7%;
  }

  @media ${device.lap1600} {
    padding: 0 37% 7% 135px;
  }
  @media ${device.lap1920} {
    padding: 0 37% 8rem 12rem;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${device.mobileS} {
    bottom: -15px;
  }
  @media ${device.mobileM} {
    bottom: -1rem;
  }
  @media ${device.tablet768} {
    bottom: -35px;
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
  @media ${device.mobileS} {
    width: 30px;
  }
  @media ${device.mobileM} {
    width: 2rem;
  }

  @media ${device.tablet768} {
    width: 70px;
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
  letter-spacing: 5px;
  color: ${colors.white};
  font-weight: 800;
  white-space: nowrap;
  @media ${device.mobileS} {
    font-size: 0.9rem;
    line-height: 0.9rem;
    letter-spacing: 2px;
  }
  @media ${device.mobileM} {
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 2px;
  }
  @media ${device.tablet768} {
    font-size: 2.2rem;
    line-height: 2.2rem;
    letter-spacing: 2px;
    -webkit-text-stroke-width: 0.3px;
  }

  @media ${device.tablet960} {
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: 2px;
  }

  @media ${device.lap1024} {
    font-size: 2.8rem;
    line-height: 3rem;
    -webkit-text-stroke-width: 2px;
    letter-spacing: 4px;
  }

  @media ${device.lap1280} {
    font-size: 3.5rem;
    line-height: 3.5rem;
    -webkit-text-stroke-width: 2px;
  }

  @media ${device.lap1440} {
    /* font-size: 4rem;
    line-height: 4.5rem;
    -webkit-text-stroke-width: 2px; */
  }

  @media ${device.lap1600} {
    -webkit-text-stroke-width: 3px;
    line-height: 4rem;
    letter-spacing: 5px;
  }
  @media ${device.lap1920} {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;

export const Subtitle = styled.div`
  color: white;
  @media ${device.mobileS} {
    font-size: 0.4rem;
    margin-top: 0rem;
    margin-bottom: 0.2rem;
    width: 100%;
    font-weight: 400;
  }
  @media ${device.mobileM} {
    font-size: 0.5rem;
    margin-bottom: 0.2rem;
    font-weight: 400;
  }
  @media ${device.mobileL} {
    font-size: 0.6rem;
    margin-top: 0.3rem;
    /* margin-bottom: 1rem; */
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
    width: 100%;
    font-weight: 600;
  }
  @media ${device.tablet960} {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
    width: 100%;
    font-weight: 600;
  }

  @media ${device.lap1024} {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    letter-spacing: 1px;
  }

  @media ${device.lap1024} {
    font-size: 0.9rem;
    margin-top: 1rem;
    letter-spacing: 1px;
  }

  @media ${device.lap1440} {
    font-size: 1rem;
    margin-top: 1rem;
  }

  @media ${device.lap1600} {
    /* font-size: 21px;
    margin-top: 20px; */
  }
  @media ${device.lap1920} {
    letter-spacing: 2px;
  }
`;

export const SubscribeNowBtn = styled.div`
  background-color: ${colors.secondary};

  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media ${device.mobileS} {
    font-size: 0.5rem;
    padding: 0 1rem;
    height: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 0.9rem;
    flex: initial;
    display: inline-flex;
    padding: 0.2rem 1rem;
    height: auto;
  }

  @media ${device.lap1024} {
    font-size: 14px;
    width: 130px;
  }
  @media ${device.lap1024} {
    padding: 0.5rem 1rem;
  }

  @media ${device.lap1440} {
    font-size: 1rem;
    width: 180px;
  }

  @media ${device.lap1600} {
  }
`;

export const InputContainer = styled.div`
  display: flex;
  @media ${device.mobileS} {
  }
  @media ${device.tablet768} {
    margin-top: 0.5rem;
  }
  @media ${device.tablet960} {
    margin-top: 1rem;
  }
  @media ${device.lap1024} {
    margin-top: 1rem;
  }
  @media ${device.lap1920} {
    margin-top: 1.5rem;
  }
`;

export const InputWrapper = styled.div`
  display: inline-flex;
  .ant-input {
    background-color: white;
    font-size: 0.5rem;
    border-radius: 0;
    @media ${device.mobileS} {
      font-size: 0.5rem;
      height: 1rem;
    }
    @media ${device.tablet768} {
      font-size: 0.8rem;
      width: 180px;
      height: auto;
    }
    @media ${device.lap1440} {
      font-size: 1rem;
      width: 213px;
    }
  }
`;
