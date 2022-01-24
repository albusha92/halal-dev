import { colors } from "config/constants";
import { device } from "config/screensSizes";
import styled from "styled-components";
import { FaqTitle, HaveQuestionText } from "../faq/FqaStyled";

export const ContactUsContainer = styled.div`
  background-color: ${colors.borderGrey};
  padding: 2rem 0;
  @media ${device.mobileS} {
    padding: 2rem 5%;
  }
  @media ${device.tablet768} {
    padding: 2rem 3%;
  }
  @media ${device.lap1440} {
    padding: 2rem 0;
  }
  @media ${device.lap1920} {
    padding: 2rem 0;
  }
`;

export const CtuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const CtuTitle = styled(FaqTitle)`
  color: ${colors.primary};

  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
  @media ${device.tablet768} {
    font-size: 1.2rem;
  }
  @media ${device.lap1024} {
    font-size: 1.4rem;
    gap: 0.8rem;
  }
  @media ${device.lap1280} {
    font-size: 1.5rem;
  }
  @media ${device.lap1440} {
    font-size: 1.8rem;
  }
  @media ${device.lap1920} {
    font-size: 2.5rem;
  }
`;

export const CtuSubTitle = styled(HaveQuestionText)`
  color: black;
`;

export const CtsInforContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CtsInforItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3rem;
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }
  @media ${device.lap1024} {
    font-size: 1rem;
  }
`;

export const ArrowDownInput = styled.div`
  height: 100%;
  background: ${colors.secondary};
  display: flex;
  align-items: center;
  padding: 0.8rem;
`;

export const YourInquiry = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding-left: 0.7rem;
  cursor: pointer;
  align-items: center;
  top: 0;
  right: 0;
`;
