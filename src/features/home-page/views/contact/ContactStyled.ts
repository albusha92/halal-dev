import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const ContactContainer = styled.div`
  @media ${device.tablet} {
    padding: 2% 100px;
  }

  @media ${device.lap1024} {
    padding: 2% 25px;
  }

  /* @media ${device.lap1366} {
    padding: 8% 75px;
  } */

  @media ${device.lap1440} {
    padding: 2% 100px;
  }

  @media ${device.lap1600} {
    padding: 2% 135px;
  }
  background-color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media ${device.tablet} {
    gap: 50px;
  }

  @media ${device.lap1024} {
    gap: 30px;
  }

  @media ${device.lap1280} {
    gap: 50px;
  }

  @media ${device.lap1366} {
    gap: 50px;
  }

  @media ${device.lap1440} {
    gap: 50px;
  }

  @media ${device.lap1600} {
    gap: 50px;
  }

  @media ${device.lap1920} {
    gap: 50px;
  }
`;

export const RegisterTextContainer = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.lap1024} {
    font-size: 14px;
  }

  @media ${device.lap1280} {
    font-size: 15px;
  }

  @media ${device.lap1366} {
    font-size: 16px;
  }

  @media ${device.lap1440} {
    font-size: 18px;
  }

  @media ${device.lap1600} {
    font-size: 18px;
  }

  @media ${device.lap1920} {
    font-size: 18px;
  }
`;

export const IconContainer = styled.div`
  color: ${colors.white};
  font-size: 25px;
  display: inline-flex;
  @media ${device.tablet} {
    font-size: 25px;
  }

  @media ${device.lap1024} {
    font-size: 20px;
  }

  @media ${device.lap1280} {
    font-size: 22px;
  }

  @media ${device.lap1366} {
    font-size: 25px;
  }

  @media ${device.lap1440} {
    font-size: 25px;
  }

  @media ${device.lap1600} {
    font-size: 25px;
  }

  @media ${device.lap1920} {
    font-size: 25px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 120%;
`;

export const RegisterButton = styled.div`
  height: 100%;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0 20px;
  font-weight: bold;
  font-size: 18px;
  @media ${device.tablet} {
    padding: 7px 20px;
  }

  @media ${device.lap1024} {
    padding: 2px 20px;
  }

  @media ${device.lap1280} {
    padding: 3px 20px;
  }

  @media ${device.lap1366} {
    padding: 3px 20px;
  }

  @media ${device.lap1440} {
    padding: 5px 20px;
  }

  @media ${device.lap1600} {
    padding: 7px 20px;
  }

  @media ${device.lap1920} {
    padding: 7px 20px;
  }
`;

export const ContactArea = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  color: white;
  font-weight: bold;
  @media ${device.tablet} {
    gap: 60px;
  }

  @media ${device.lap1024} {
    gap: 20px;
  }

  @media ${device.lap1280} {
    gap: 30px;
  }

  @media ${device.lap1366} {
    gap: 40px;
  }

  @media ${device.lap1440} {
    gap: 50px;
  }

  @media ${device.lap1600} {
    gap: 60px;
  }

  @media ${device.lap1920} {
    gap: 60px;
  }
`;

export const PhoneContainer = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    gap: 20px;
    font-size: 18px;
  }

  @media ${device.lap1024} {
    gap: 10px;
    font-size: 14px;
  }

  @media ${device.lap1280} {
    gap: 15px;
    font-size: 16px;
  }

  @media ${device.lap1366} {
    gap: 15px;
    font-size: 16px;
  }

  @media ${device.lap1440} {
    gap: 20px;
    font-size: 18px;
  }

  @media ${device.lap1600} {
    gap: 20px;
    font-size: 18px;
  }

  @media ${device.lap1920} {
    gap: 20px;
    font-size: 18px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 45px;
  color: white;
  @media ${device.tablet} {
    gap: 45px;
  }

  @media ${device.lap1024} {
    gap: 20px;
  }

  @media ${device.lap1280} {
    gap: 30px;
  }

  @media ${device.lap1366} {
    gap: 40px;
  }

  @media ${device.lap1440} {
    gap: 45px;
  }

  @media ${device.lap1600} {
    gap: 45px;
  }

  @media ${device.lap1920} {
    gap: 45px;
  }
`;
