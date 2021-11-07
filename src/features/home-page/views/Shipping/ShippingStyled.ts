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
  font-size: 96px;
  color: ${colors.primary};
  -webkit-text-stroke-width: 4px;
  margin-bottom: 0;
  @media ${device.tablet} {
    font-size: 96px;
	line-height: 96px;
  }

  @media ${device.lap1024} {
    font-size: 48px;
	line-height: 52px;
  }

  @media ${device.lap1280} {
    font-size: 59px;
	line-height: 63px;
  }

  @media ${device.lap1366} {
    font-size: 64px;
	line-height: 68px;
  }

  @media ${device.lap1440} {
    font-size: 61px;
	line-height: 65px;
  }

  @media ${device.lap1600} {
    font-size: 71px;
	line-height: 75px;
  }

  @media ${device.lap1920} {
    font-size: 92px;
	line-height: 96px;
  }
`;

export const ShippingImage = styled.img`
  width: 100%;
`;

export const ShippingImageText = styled.img`
  width: 50%;
`;
