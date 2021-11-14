import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const InforContainer = styled.div`
  @media ${device.tablet768} {
    background-image: linear-gradient(to right, white 50%, #eeeeee 50%);
  }
`;

export const InforConent = styled.div`
  @media ${device.tablet768} {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    box-sizing: border-box;
    flex-wrap: nowrap;
    min-height: unset;
    box-shadow: none;
  }
  @media ${device.lap1280} {
    max-width: 90rem;
  }
`;

export const InforTextContainer = styled.div`
  width: 100%;
  @media ${device.mobileS} {
    padding: 0.5rem 0.5rem;
  }
  @media ${device.tablet768} {
    padding: 1.5rem 2rem;
  }
  @media ${device.tablet960} {
    padding: 1.5rem 3rem;
  }
  @media ${device.lap1280} {
    padding: 2rem 4rem;
  }
  @media ${device.lap1440} {
    padding: 3rem 7rem;
  }
  @media ${device.lap1600} {
    padding: 3rem 5rem 3rem 0;
    margin: 0 auto;
    /* max-width: 40rem; */
  }
  @media ${device.lap1600} {
    padding: 3rem 8rem 3rem 0;
    margin: 0 auto;
    /* max-width: 30rem; */
  }
`;

export const AboutText = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  padding-bottom: 0.3rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 1rem;
  }

  @media ${device.lap1440} {
    font-size: 1.2rem;
  }
`;

export const ExplainText = styled.div`
  color: ${colors.black};
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.tablet768} {
    font-size: 1.2rem;
  }
  @media ${device.tablet960} {
    font-size: 1.3rem;
  }
  @media ${device.lap1280} {
    font-size: 1.5rem;
  }
  @media ${device.lap1440} {
    font-size: 1.8rem;
  }
`;

export const ProductionContainer = styled.div`
  /* background-color: #eeeeee; */
  width: 100%;
  @media ${device.mobileS} {
    padding: 0.5rem 0.5rem;
    margin-top: 1rem;
    background-color: #eeeeee;
  }
  @media ${device.tablet768} {
    padding: 1.5rem 2rem;
    margin-top: 0rem;
    background-color: unset;
  }
  @media ${device.lap1280} {
    padding: 2rem 3rem;
  }
  @media ${device.lap1440} {
    padding: 3rem 7rem 3rem 3rem;
  }
  @media ${device.lap1600} {
    padding: 3rem 0rem 3rem 3rem;
  }
  @media ${device.lap1920} {
    padding: 3rem 0rem 3rem 3rem;
  }
`;

export const ProductionItemContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.div`
  color: ${colors.primary};
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #dddddd;
  @media ${device.mobileS} {
    font-size: 0.55rem;
  }
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
  @media ${device.tablet768} {
    font-size: 0.55rem;
  }
  @media ${device.tablet960} {
    font-size: 0.7rem;
  }
  @media ${device.lap1280} {
    font-size: 0.8rem;
  }
  @media ${device.lap1440} {
    font-size: 0.7rem;
  }
  @media ${device.lap1920} {
    font-size: 1rem;
  }
`;

export const Caption = styled.div`
  font-weight: bold;
  display: table-header-group;
  color: ${colors.black};
  @media ${device.mobileS} {
    font-size: 0.6rem;
    min-height: 2rem;
  }
  @media ${device.mobileL} {
    font-size: 0.8rem;
    min-height: 3rem;
  }
  @media ${device.tablet768} {
    font-size: 0.6rem;
    min-height: 2rem;
  }
  @media ${device.tablet960} {
    font-size: 0.85rem;
    min-height: 3rem;
  }
  @media ${device.lap1280} {
    font-size: 1rem;
    min-height: 3.5rem;
  }
  @media ${device.lap1440} {
    font-size: 1rem;
    min-height: 3.5rem;
  }
  @media ${device.lap1600} {
    font-size: 1.2rem;
    min-height: 4rem;
  }
  @media ${device.lap1920} {
    font-size: 1.3rem;
    min-height: 4.5rem;
  }
`;

export const ContentText = styled.div`
  color: black;
  /* margin-top: 0.5rem; */
  @media ${device.mobileS} {
    font-size: 0.55rem;
  }
  @media ${device.tablet768} {
    font-size: 0.55rem;
  }
  @media ${device.tablet960} {
    font-size: 0.6rem;
  }
  @media ${device.lap1024} {
    font-size: 0.55rem;
  }
  @media ${device.lap1280} {
    font-size: 0.65rem;
  }
  @media ${device.lap1440} {
    font-size: 0.65rem;
  }
  @media ${device.lap1600} {
    font-size: 0.8rem;
  }
  @media ${device.lap1920} {
    font-size: 0.8rem;
  }
`;
