import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";

export const FooterContainer = styled.div`
  @media ${device.mobileS} {
    padding: 2% 0.5rem;
    flex-wrap: wrap;
  }
  @media ${device.tablet768} {
    padding: 4% 100px;
  }

  @media ${device.lap1024} {
    padding: 4% 25px;
    flex-wrap: nowrap;
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
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
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
  margin-bottom: 1rem;
`;

export const PartOne = styled(FooterPartContainer)`
  @media ${device.mobileS} {
    width: 100%;
    flex-basis: 100%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  @media ${device.lap1024} {
    width: 20%;
    gap: 1rem;
    flex: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }
  width: 20%;
`;

export const PartTwo = styled(FooterPartContainer)`
  @media ${device.mobileS} {
    gap: 1rem;
    /* justify-content: center; */
    /* align-items: center; */
  }
`;

export const Title = styled(FooterFontSize)`
  font-weight: bold;
  white-space: nowrap;
`;

export const ContentContainer = styled(FooterFontSize)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${device.mobileS} {
    gap: 0.5rem;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  & button {
    border: none;
    &::after {
      display: none;
    }
  }
  & .ant-select-selector {
    padding: 0 !important;
  }
  & .ant-select-selection-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  & .ReactFlagsSelect-module_selectBtn__19wW7[aria-expanded="true"]:after {
    display: none;
  }
  & ul {
    margin: 0;
  }
`;

export const IconContainer = styled.div`
  font-size: 20px;
  color: ${colors.black};
  @media ${device.mobileS} {
    font-size: 1rem;
  }
`;

export const PhoneNumber = styled.div`
  color: ${colors.black};
  font-weight: bold;
  font-size: 22px;
  margin-left: 40px;
  @media ${device.mobileS} {
    font-size: 1rem;
  }
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
  @media ${device.mobileS} {
    gap: 0.3rem;
  }
`;

export const PartThree = styled(FooterPartContainer)`
  @media ${device.mobileS} {
    gap: 1rem;
    flex-basis: 100%;
    text-align: center;
    align-items: center;
  }
  @media ${device.lap1024} {
    gap: 1rem;
    text-align: center;
    align-items: center;
    flex: 0;
    white-space: nowrap;
  }
`;

export const PartThreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 70%;
  align-items: center;
  @media ${device.mobileS} {
    flex-direction: row;
  }
  @media ${device.lap1024} {
    flex-direction: column;
  }
`;

export const PartFourContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  @media ${device.mobileS} {
    gap: 1rem;
    align-items: center;
  }
`;

export const RatingImage = styled.img`
  margin: 0 auto;

  @media ${device.mobileS} {
    width: 70%;
  }
  @media ${device.lap1024} {
    width: 100%;
  }
`;
