import styled from "styled-components";
import { device } from "../config/screensSizes";

export const ResponsivePadding = styled.div`
  @media ${device.tablet960} {
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
    max-width: 95rem;
  }
`;

export const HeaderPaddingStyled = styled.div`
  @media ${device.tablet768} {
    padding: 0 20px;
  }

  @media ${device.lap1024} {
    padding: 0 25px;
  }

  @media ${device.lap1440} {
    padding: 0 100px;
  }

  @media ${device.lap1600} {
    padding: 0 135px;
  }
`;

export const ResponsiveHeaderFontSize = styled.div`
  @media ${device.tablet768} {
    font-size: 9px;
    gap: 10px;
  }

  @media ${device.lap1024} {
    font-size: 11px;
    gap: 8px;
  }

  @media ${device.lap1440} {
    font-size: 12px;
    gap: 10px;
  }

  @media ${device.lap1600} {
    font-size: 12px;
    gap: 10px;
  }
`;
