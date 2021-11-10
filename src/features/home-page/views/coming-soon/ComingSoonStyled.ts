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
    padding: 0 0.5rem 1.2rem;
  }
  @media ${device.tablet768} {
    padding: 0 25% 4rem 3rem;
    /* padding-right: 37%; */
  }

  @media ${device.lap1024} {
    padding: 0 30% 5rem 4.5rem;
  }

  @media ${device.lap1280} {
    padding: 0 37% 9% 100px;
  }

  @media ${device.lap1440} {
    padding: 0 34% 8rem 7%;
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
  @media ${device.mobileS} {
    bottom: -15px;
  }
  @media ${device.mobileM} {
    bottom: -1.5rem;
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
    width: 3rem;
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
    line-height: 1rem;
    letter-spacing: 2px;
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
    line-height: 1.5rem;
    letter-spacing: 2px;
  }
  @media ${device.mobileL} {
    font-size: 1.3rem;
    line-height: 1.5rem;
    letter-spacing: 2px;
  }
  /* text-transform: uppercase; */
  @media ${device.tablet768} {
    font-size: 2.2rem;
    line-height: 2.8rem;
    letter-spacing: 2px;
  }

  @media ${device.tablet960} {
    font-size: 3rem;
    line-height: 3.8rem;
    letter-spacing: 2px;
  }

  @media ${device.lap1024} {
    font-size: 2.8rem;
    line-height: 4rem;
    -webkit-text-stroke-width: 2px;
    letter-spacing: 4px;
  }

  @media ${device.lap1280} {
    font-size: 43px;
    line-height: 50px;
    -webkit-text-stroke-width: 2px;
  }

  @media ${device.lap1440} {
    font-size: 4rem;
    line-height: 6rem;
    -webkit-text-stroke-width: 2px;
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
  color: white;
  @media ${device.mobileS} {
    font-size: 0.4rem;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    width: 70%;
    font-weight: 400;
  }
  @media ${device.mobileS} {
    font-size: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    width: 70%;
    font-weight: 400;
  }
  @media ${device.mobileL} {
    font-size: 0.6rem;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
    width: 70%;
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
    margin-top: 1rem;
    margin-bottom: 0rem;
    width: 100%;
    font-weight: 600;
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
  @media ${device.mobile767} {
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${device.tablet768} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    white-space: nowrap;
    margin-bottom: 1rem;
  }
  @media ${device.tablet960} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    white-space: nowrap;
    margin-bottom: 1rem;
  }
  @media ${device.lap1024} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    margin-bottom: 2rem;
  }
`;

export const SubscribeNowBtn = styled.div`
  background-color: ${colors.secondary};

  color: white;
  padding-left: 15px;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  @media ${device.mobileS} {
    flex: 1;
    font-size: 0.5rem;
    padding: 0 1rem;
  }
  @media ${device.tablet768} {
    font-size: 0.9rem;
    flex: initial;
    display: inline-flex;
    padding: 0.2rem 1rem;
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
  @media ${device.mobileS} {
    flex-basis: 100%;
  }
  @media ${device.tablet768} {
    flex-basis: 100%;
    justify-content: flex-end;
  }
  @media ${device.tablet960} {
    margin-top: 2rem;
  }
  @media ${device.lap1024} {
    margin-top: 0rem;
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
    }
    @media ${device.tablet768} {
      font-size: 0.8rem;
      width: 180px;
    }
    @media ${device.lap1440} {
      font-size: 1rem;
	  width: 213px;
    }
  }
`;
