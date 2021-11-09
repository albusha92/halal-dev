import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const ShippingContainer = styled.div`
  text-align: center;
  padding: 4% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeyMunChenText = styled.p`
  font-weight: bold;
  font-style: italic;
  color: ${colors.primary};
  margin-bottom: 0;
  @media ${device.mobileS} {
    font-size: 0.7rem;
    -webkit-text-stroke-width: 0.3px;
  }
  @media ${device.mobileL} {
    font-size: 0.9rem;
    -webkit-text-stroke-width: 0.3px;
  }
  @media ${device.tablet768} {
    font-size: 2rem;
    -webkit-text-stroke-width: 0.3px;
    line-height: 2rem;
  }

  @media ${device.lap1024} {
    font-size: 2.5rem;
    -webkit-text-stroke-width: 0.3px;
    line-height: 2.5rem;
  }

  @media ${device.lap1280} {
    font-size: 59px;
    line-height: 63px;
  }

  @media ${device.lap1366} {
    font-size: 3rem;
    -webkit-text-stroke-width: 0.3px;
    line-height: 2.5rem;
  }

  @media ${device.lap1440} {
    font-size: 3rem;
    -webkit-text-stroke-width: 0.3px;
    line-height: 3rem;
  }

  @media ${device.lap1600} {
    font-size: 3.2rem;
    -webkit-text-stroke-width: 0.3px;
    line-height: 3.2rem;
  }

  @media ${device.lap1920} {
    font-size: 3.6rem;
    -webkit-text-stroke-width: 0.3px;
    line-height: 3.2rem;
  }
`;

export const ShippingImage = styled.img`
  width: 100%;
`;

export const ShippingImageText = styled.img`
  width: 50%;
`;
