import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";
import { HeaderPaddingStyled } from "../../../../uikit/GeneralStyled";

export const WhyContainer = styled(HeaderPaddingStyled)`
  text-align: center;
  @media ${device.mobileS} {
    padding: 1rem 0.5rem;
  }

  @media ${device.mobileM} {
    padding: 2rem 0.5rem;
  }

  @media ${device.tablet768} {
    padding: 3rem 3rem;
  }

  @media ${device.lap1024} {
    padding: 4rem 3rem;
  }

  @media ${device.lap1440} {
    padding: 7rem 4rem 2rem;
  }

  @media ${device.lap1600} {
    padding: 8rem 5rem 3rem;
  }
`;

export const WhyTextConatiner = styled.div`
  font-weight: bold;
  font-family: "Neutraface 2 Display Titling";
  text-transform: uppercase;
  color: ${colors.primary};
  @media ${device.mobileS} {
    text-align: center;
    font-size: 2.5rem;
    line-height: 2.8rem;
  }
  @media ${device.tablet768} {
    text-align: left;
    font-size: 5rem;
    line-height: 5rem;
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

export const GoHalalText = styled(WhyTextConatiner)`
  color: ${colors.secondary};
  @media ${device.mobileS} {
    text-align: center;
    font-size: 2.5rem;
  }
  @media ${device.tablet768} {
    text-align: left;
    font-size: 3rem;
    line-height: 5rem;
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
  @media ${device.mobileS} {
    margin-top: 0.5rem;
  }
  @media ${device.tablet768} {
    margin: 0;
    text-align: left;
  }
`;

export const Description = styled.div`
  font-weight: 600;
  color: ${colors.black};
  @media ${device.mobileS} {
    font-size: 0.6rem;
  }
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: .9rem;
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
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.mobileL} {
    font-size: 0.8rem;
  }
  @media ${device.tablet768} {
    font-size: 1rem;
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
  display: inline-flex;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.secondary};
  padding: 0 5px;
  @media ${device.mobileS} {
    font-size: 0.5rem;
    margin-top: 0.7rem;
  }
  @media ${device.mobileS} {
    font-size: 0.6rem;
    margin-top: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
    margin-top: 0.7rem;
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
  @media ${device.tablet768} {
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
  }
  @media ${device.lap1024} {
    font-size: 0.9rem;
    padding: 0.3rem 0.7rem;
  }
  @media ${device.lap1440} {
    font-size: 1.5rem;
    padding: 0.3rem 0.7rem;
  }
`;

export const OutStoryBtn = styled.div`
  display: inline-flex;
  padding: 13px 29px;
  font-size: 24px;
  color: ${colors.white};
  text-transform: capitalize;
  cursor: pointer;
  background-color: ${colors.primary};
  @media ${device.mobileS} {
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
    margin-top: 1rem;
    /* margin: 0 auto; */
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
    margin-top: 1rem;
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
