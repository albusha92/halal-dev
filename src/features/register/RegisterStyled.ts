import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";

export const RegisterContainer = styled.div`
  text-align: center;
  background-color: ${colors.secondary};
  padding: 3% 0.5rem;
`;

export const RegisterTitle = styled.h1`
  font-weight: bold;
  color: ${colors.white};

  letter-spacing: 2px;
  @media ${device.mobileS} {
    font-size: 1rem;
    /* -webkit-text-stroke-width: 0.1px; */
    letter-spacing: 1px;
  }
  @media ${device.tablet768} {
    font-size: 1.3rem;
    /* -webkit-text-stroke-width: 0.1px; */
    letter-spacing: 1px;
  }

  @media ${device.lap1024} {
    font-size: 1.5rem;
    /* -webkit-text-stroke-width: 0.1px; */
    letter-spacing: 1px;
  }

  /* @media ${device.lap1280} {
    font-size: 38px;
  }

  @media ${device.lap1366} {
    font-size: 40px;
  } */

  @media ${device.lap1440} {
    font-size: 1.7rem;
    /* -webkit-text-stroke-width: 0.1px; */
    letter-spacing: 1px;
  }

  @media ${device.lap1600} {
    font-size: 40px;
  }

  @media ${device.lap1920} {
    font-size: 2.5rem;
    /* -webkit-text-stroke-width: 0.1px; */
    letter-spacing: 1px;
  }
`;

export const CheckboxContainer = styled.div`
  margin: 40px auto;
  color: white;
  @media ${device.mobileS} {
    font-size: 0.6rem;
    margin: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 0.8rem;
    margin: 0.5rem;
  }
  @media ${device.lap1440} {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  @media ${device.lap1920} {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const NotifyButton = styled.div`
  color: white;
  background-color: ${colors.primary};
  cursor: pointer;
  display: inline-block;
  border-radius: 50px;
  @media ${device.mobileS} {
    font-size: 0.7rem;
    padding: 0.3rem 1.5rem;
  }
  @media ${device.lap1440} {
    font-size: 0.9rem;
    padding: 0.5rem 2rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const InputContainer = styled.div`
  .ant-input {
    @media ${device.mobileS} {
      font-size: 0.8rem;
    }
    @media ${device.lap1440} {
      font-size: 1rem;
    }
    @media ${device.lap1920} {
      font-size: 1rem;
    }
  }
`;

export const CountryContainer = styled.div`
  & button {
    padding: 0 0.5rem;
    background-color: white;
    color: ${colors.black};
  }
`;

export const CityOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
`;
