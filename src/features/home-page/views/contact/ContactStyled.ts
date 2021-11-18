import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const ContactContainer = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobileS} {
    padding: 1rem 0.5rem;
    flex-direction: column;
  }
  @media ${device.tablet768} {
    padding: 2rem 0.5rem;
    flex-direction: row;
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
`;

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    flex-direction: column;
    gap: 1rem;
  }

  @media ${device.tablet768} {
    /* gap: 50px; */
    gap: 1rem;
    flex-direction: column;
    flex: 1;
  }

  @media ${device.lap1024} {
    gap: 30px;
    flex-direction: row;
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
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  @media ${device.mobileS} {
    font-size: 0.9rem;
  }
  @media ${device.tablet768} {
    font-size: 0.8rem;
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
  display: inline-flex;
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
  @media ${device.tablet768} {
    font-size: 1.4rem;
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
  align-items: stretch;
`;

export const InputWrapper = styled.div`
  .ant-input {
    @media ${device.mobileS} {
      font-size: 0.8rem;
    }
    @media ${device.tablet768} {
      font-size: 0.8rem;
      height: 100%;
    }
	@media ${device.lap1024} {
      font-size: 1rem;
      height: 100%;
	  padding: .5rem;
    }
  }
`;

export const RegisterButton = styled.div`
  height: 100%;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0 20px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.tablet768} {
    padding: 7px 20px;
  }

  @media ${device.lap1024} {
    padding: 2px 20px;
	font-size: 1rem;
	letter-spacing: 0.5px;
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
  color: white;
  font-weight: bold;
  @media ${device.mobileS} {
    gap: 0.5rem;
    width: 100%;
    margin-top: 1rem;
  }
  @media ${device.tablet768} {
    gap: 0.8rem;
    flex: 1;
    flex-direction: column;
    margin-top: 0;
  }

  @media ${device.lap1024} {
    flex-direction: row;
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
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    font-size: 0.7rem;
    flex: 1 1 auto;
    gap: 1rem;
    justify-content: flex-end;
  }
  @media ${device.mobileL} {
    font-size: 0.8rem;
    flex: 1 1 auto;
    gap: 1rem;
    justify-content: flex-end;
  }
  @media ${device.tablet768} {
    gap: 20px;
    font-size: 1rem;
  }

  @media ${device.lap1024} {
    gap: 10px;
    font-size: 14px;
    flex: 1;
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
  display: flex;
  align-items: center;
  color: white;
  @media ${device.mobileS} {
    gap: 1.5rem;
    justify-content: space-between;
    flex: 1 1 auto;
    font-size: 0.95rem;
  }
  @media ${device.tablet768} {
    gap: 1.5rem;
    justify-content: flex-end;
  }

  @media ${device.lap1024} {
    gap: 20px;
	font-size: 1rem;
  }

  @media ${device.lap1280} {
    gap: 2rem;
	font-size: 1.2rem;
  }

  @media ${device.lap1366} {
    gap: 40px;
  }

  @media ${device.lap1440} {
    gap: 45px;
  }

  @media ${device.lap1600} {
	gap: 2rem;
	font-size: 1.5rem;
  }

  @media ${device.lap1920} {
    gap: 45px;
  }
`;
