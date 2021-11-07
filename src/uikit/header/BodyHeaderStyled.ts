import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";
import { HeaderPaddingStyled } from "../GeneralStyled";

export const BodyHeaderContainer = styled(HeaderPaddingStyled)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  @media ${device.tablet} {
    gap: 40px;
  }

  @media ${device.lap1024} {
    gap: 40px;
  }

  @media ${device.lap1440} {
    gap: 60px;
  }
`;

export const LogoImage = styled.img`
  width: 100px;
  @media ${device.tablet} {
    width: 100px;
  }

  @media ${device.lap1024} {
    width: 80px;
  }

  @media ${device.lap1440} {
    width: 90px;
  }

  @media ${device.lap1600} {
    width: 100px;
  }
`;

export const SearchContainer = styled.div`
  flex: 1; ;
`;

export const HalalSearchContainer = styled.div`
  display: inline-flex;
  padding-left: 8px;
  border: 1px solid #dddddd;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  /* @media ${device.tablet} {
    gap: 5px;
  }

  @media ${device.lap1024} {
    gap: 10px;
  }

  @media ${device.lap1440} {
    gap: 15px;
  }

  @media ${device.lap1600} {
    gap: 20px;
  } */
`;

export const SearchIconContainer = styled.div`
  height: 100%;
  padding: 15px;
  background-color: ${colors.secondary};
  cursor: pointer;
  margin-left: 10px;
  display: inline-flex;
  @media ${device.tablet} {
    padding: 8px;
  }

  @media ${device.lap1024} {
    padding: 10px;
  }

  @media ${device.lap1440} {
    padding: 10px;
  }

  @media ${device.lap1600} {
    padding: 15px;
  }
`;

export const RegionContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media ${device.tablet} {
    gap: 8px;
  }

  @media ${device.lap1024} {
    gap: 8px;
  }

  @media ${device.lap1440} {
    gap: 8px;
  }

  @media ${device.lap1600} {
    gap: 10px;
  }
`;

export const RegionTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

export const RegionItem = styled.span`
  color: #9f9f9f;
`;

export const BodyMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 43%; */

  @media ${device.lap1024} {
    gap: 15px;
    margin-top: 10px;
    font-size: 9px;
  }

  @media ${device.lap1440} {
    gap: 15px;
    margin-top: 6px;
    font-size: 10px;
  }

  @media ${device.lap1600} {
    gap: 30px;
    margin-top: 10px;
    font-size: 11px;
  }
`;

export const BodyMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  cursor: pointer;
`;
