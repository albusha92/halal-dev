import styled from "styled-components";
import { device } from "../../config/screensSizes";
import {
  HeaderPaddingStyled,
  ResponsiveHeaderFontSize,
  ResponsivePadding,
} from "../GeneralStyled";
import { colors } from "./../../config/constants";

export const HeaderContainer = styled.div``;

export const FontSizeTopHeader = styled.div`
  font-size: 0.75rem;
  gap: 0.5rem;
  @media ${device.lap1280} {
    font-size: 0.875rem;
    gap: 1rem;
  }
`;

export const TopHeaderWrapper = styled.div`
  background-color: ${colors.primary};
  @media (max-width: 959px) {
    display: none;
  }
`;

export const TopHeaderContainer = styled(ResponsivePadding)`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const FreeShippingContainer = styled(FontSizeTopHeader)`
  display: flex;
  align-items: center;
  color: white;
`;

export const RatingImage = styled.img`
  @media ${device.tablet768} {
    width: 100px;
  }

  @media ${device.lap1024} {
    width: 80px;
  }

  @media ${device.lap1440} {
    width: 100px;
  }

  @media ${device.lap1600} {
    width: 100px;
  }
`;

export const TopHeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MenuItem = styled(FontSizeTopHeader)`
  display: flex;
  align-items: center;
  color: white;
`;

// Footer
export const FooterHeaderContainer = styled(ResponsivePadding)`
  margin-top: 1rem;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
  padding-right: .5rem;
  padding-left: .5rem;
`;

export const ArrowLeft = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 1rem;
  display: flex;
  align-items: center;
  background-color: white;
  color: red;
`;

export const ArrowRight = styled.div`
  position: absolute;
  right: 0rem;
  height: 100%;
  width: 1rem;
  display: flex;
  align-items: center;
  background-color: white;
  color: red;
`;

export const MenuIconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MenuImage = styled.img`
  width: 40px;
  margin-right: 30px;
  cursor: pointer;
  @media ${device.tablet768} {
    width: 40px;
    margin-right: 30px;
  }

  @media ${device.lap1024} {
    width: 30px;
    margin-right: 15px;
  }

  @media ${device.lap1440} {
    width: 35px;
    margin-right: 25px;
  }

  @media ${device.lap1600} {
    width: 40px;
    margin-right: 30px;
  }
`;

export const MenuFooterContainer = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  /* @media ${device.tablet960} { */
  display: flex;
  flex: 1 1 auto;
  overflow-x: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  -webkit-overflow-scrolling: touch;
  /* } */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  position: relative;
  background-color: white;
  /* @media ${device.tablet960} { */
  display: flex;
  flex: 1 1 auto;
  overflow-x: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  -webkit-overflow-scrolling: touch;
  /* } */
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface MenuFooterItemProps {
  chosen: boolean;
}

export const MenuFooterItem = styled.a<MenuFooterItemProps>`
  margin: 0 2rem 0 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.chosen ? colors.primary : colors.darkGrey)};
  font-weight: bold;
  white-space: nowrap;
  border-bottom: 5px solid;
  line-height: 0.5rem;
  border-color: ${(props) => (props.chosen ? colors.primary : colors.white)};
  transition: all 0.3s linear;
  font-size: .85rem;
  @media ${device.tablet768} {
    font-size: 1rem;
  }
  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
  }

`;

export const IconContainer = styled.div`
  display: inline-flex;
  margin-right: 0.2rem;
  @media ${device.mobileS} {
   font-size: 1rem;
  }
  @media ${device.tablet768} {
   font-size: 1.5rem;
  }
`;

export const RecentlyViewContainer = styled.div`
  display: inline-flex;
`;
