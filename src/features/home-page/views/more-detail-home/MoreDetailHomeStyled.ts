import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const MoreDetailHomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    padding: 5% 100px;
  }

  @media ${device.lap1024} {
    padding: 5% 25px;
  }

  /* @media ${device.lap1366} {
    padding: 8% 75px;
  } */

  @media ${device.lap1440} {
    padding: 5% 100px;
  }

  @media ${device.lap1600} {
    padding: 5% 135px;
  }
`;

export const DetailItemContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 5px;
`;

export const IconContainer = styled.span`
  color: ${colors.primary};
  font-size: 40px;
  margin-bottom: 10px;
  display: inline-flex;
  @media ${device.tablet} {
    font-size: 40px;
    margin-bottom: 10px;
  }

  @media ${device.lap1024} {
    font-size: 30px;
    margin-bottom: 5px;
  }

  @media ${device.lap1280} {
    font-size: 35px;
    margin-bottom: 7px;
  }

  @media ${device.lap1366} {
    font-size: 37px;
    margin-bottom: 9px;
  }

  @media ${device.lap1440} {
    font-size: 40px;
    margin-bottom: 10px;
  }

  @media ${device.lap1600} {
    font-size: 40px;
    margin-bottom: 10px;
  }

  @media ${device.lap1920} {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;
export const Title = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.lap1024} {
    font-size: 14px;
  }

  @media ${device.lap1280} {
    font-size: 16px;
  }

  @media ${device.lap1366} {
    font-size: 17px;
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

export const SubTitle = styled.div`
  color: ${colors.black};
  font-size: 14px;
  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.lap1024} {
    font-size: 11px;
  }

  @media ${device.lap1280} {
    font-size: 12px;
  }

  @media ${device.lap1366} {
    font-size: 13px;
  }

  @media ${device.lap1440} {
    font-size: 14px;
  }

  @media ${device.lap1600} {
    font-size: 14px;
  }

  @media ${device.lap1920} {
    font-size: 14px;
  }
`;
