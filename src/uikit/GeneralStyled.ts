import styled from "styled-components";
import { device } from "../config/screensSizes";

export const HeaderPaddingStyled = styled.div`
  @media ${device.tablet} {
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
  @media ${device.tablet} {
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
