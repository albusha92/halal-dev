import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";

export const RegisterContainer = styled.div`
  text-align: center;
  background-color: ${colors.secondary};
  padding: 2% 0;
`;

export const RegisterTitle = styled.h1`
  font-weight: bold;
  font-size: 44px;
  color: ${colors.white};
  -webkit-text-stroke-width: 1px;
  letter-spacing: 2px;
  @media ${device.tablet} {
    font-size: 44px;
  }

  @media ${device.lap1024} {
    font-size: 36px;
  }

  @media ${device.lap1280} {
    font-size: 38px;
  }

  @media ${device.lap1366} {
    font-size: 40px;
  }

  @media ${device.lap1440} {
    font-size: 42px;
  }

  @media ${device.lap1600} {
    font-size: 44px;
  }

  @media ${device.lap1920} {
    font-size: 44px;
  }
`;

export const CheckboxContainer = styled.div`
  margin: 40px auto;
  color: white;
`;

export const NotifyButton = styled.div`
  color: white;
  font-size: 24px;
  padding: 8px 40px;
  background-color: ${colors.primary};
  cursor: pointer;
  display: inline-block;
`;
