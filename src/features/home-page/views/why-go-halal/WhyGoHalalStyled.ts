import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";
import { HeaderPaddingStyled } from "../../../../uikit/GeneralStyled";

export const WhyContainer = styled(HeaderPaddingStyled)`
  @media ${device.tablet} {
    padding: 120px 0px 80px;
  }

  @media ${device.lap1024} {
    padding: 120px 80px 80px;
  }

  @media ${device.lap1440} {
    padding: 140px 100px 100px;
  }

  @media ${device.lap1600} {
    padding: 180px 135px 120px;
  }
`;

export const WhyTextConatiner = styled.div`
  font-weight: bold;
  font-family: "Neutraface 2 Display Titling";
  text-transform: uppercase;
  color: ${colors.primary};
  @media ${device.tablet} {
    font-size: 110px;
    line-height: 148px;
  }

  @media ${device.lap1024} {
    font-size: 125px;
    line-height: 95px;
  }

  @media ${device.lap1440} {
    font-size: 175px;
    line-height: 148px;
  }

  @media ${device.lap1600} {
    font-size: 205px;
    line-height: 148px;
  }
`;

export const GoHalalText = styled.div`
  font-weight: bold;

  font-family: "Neutraface 2 Display Titling";
  text-transform: uppercase;
  color: ${colors.secondary};
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 190px;
  }

  @media ${device.lap1024} {
    font-size: 58px;
    line-height: 115px;
  }

  @media ${device.lap1440} {
    font-size: 83px;
    line-height: 190px;
  }

  @media ${device.lap1600} {
    font-size: 96px;
    line-height: 190px;
  }
`;

export const RightWhyContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const Description = styled.div`
  font-weight: 600;
  color: ${colors.black};
  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.lap1024} {
    font-size: 16px;
  }

  @media ${device.lap1440} {
    font-size: 21px;
  }

  @media ${device.lap1600} {
    font-size: 24px;
  }
`;

export const HightLightText = styled.span`
  font-size: 28px;
  font-weight: 800;
  color: ${colors.secondary};
  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.lap1024} {
    font-size: 18px;
  }

  @media ${device.lap1440} {
    font-size: 24px;
  }

  @media ${device.lap1600} {
    font-size: 28px;
  }
`;

export const HightBackgroundText = styled.div`
  font-size: 24px;
  /* font-weight: bold; */
  display: inline-flex;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.secondary};
  padding: 0 5px;
  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.lap1024} {
    font-size: 16px;

    margin-top: 15px;
  }

  @media ${device.lap1440} {
    font-size: 21px;

    margin-top: 30px;
  }

  @media ${device.lap1600} {
    font-size: 24px;
  }
`;

export const BoldText = styled(HightLightText)`
  color: ${colors.white};
`;

export const OutStoryBtn = styled.div`
  display: inline-flex;
  padding: 13px 29px;
  font-size: 24px;
  color: ${colors.white};
  text-transform: capitalize;
  background-color: ${colors.primary};

  @media ${device.tablet} {
    font-size: 24px;
    padding: 13px 29px;
  }

  @media ${device.lap1024} {
    font-size: 16px;
    padding: 10px 20px;
    margin: 30px 0 0 30px;
  }

  @media ${device.lap1440} {
    font-size: 21px;
    padding: 11px 24px;
    margin: 50px 0 0 40px;
  }

  @media ${device.lap1600} {
    font-size: 24px;
    padding: 13px 29px;
    margin: 50px 0 0 40px;
  }
`;
