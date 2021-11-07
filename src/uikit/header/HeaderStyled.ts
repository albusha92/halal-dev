import styled from "styled-components";
import { device } from "../../config/screensSizes";
import {
  HeaderPaddingStyled,
  ResponsiveHeaderFontSize,
} from "../GeneralStyled";
import { colors } from "./../../config/constants";

export const HeaderContainer = styled.div`
  /* @media ${device.tablet} {
    font-size: 60px;
  }

  @media ${device.lap1024} {
    font-size: 50px;
  }

  @media ${device.lap1440} {
    font-size: 60px;
  }

  @media ${device.lap1600} {
    font-size: 60px;
  } */
`;

export const TopHeaderContainer = styled(HeaderPaddingStyled)`
  background-color: ${colors.primary};
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const FreeShippingContainer = styled(ResponsiveHeaderFontSize)`
  display: flex;
  align-items: center;
  color: white;
`;

export const RatingImage = styled.img`
  @media ${device.tablet} {
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

export const MenuItem = styled(ResponsiveHeaderFontSize)`
  display: flex;
  align-items: center;
  color: white;
`;

// Footer
export const FooterHeaderContainer = styled(HeaderPaddingStyled)`
  margin-top: 40px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  align-items: center;
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
  @media ${device.tablet} {
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

export const MenuFooterContainer = styled.div`
  flex: 1;
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
    color: #125c07;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
    border: 3px solid #125c07;
    transition: border-color 0.005s linear;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu {
    display: flex;
    align-items: center;
    font-weight: bold;
    @media ${device.tablet} {
      font-size: 18px;
      padding: 0 20px;
    }

    @media ${device.lap1024} {
      font-size: 12px;
      padding: 0 15px;
    }

    @media ${device.lap1440} {
      font-size: 15px;
      padding: 0 20px;
    }

    @media ${device.lap1600} {
      font-size: 18px;
      padding: 0 20px;
    }
  }
  .ant-menu-item,
  .ant-menu-submenu-title {
    transition: all 0.1s !important;
  }
  .ant-menu-item .ant-menu-item-icon + span,
  .ant-menu-submenu-title .ant-menu-item-icon + span,
  .ant-menu-item .anticon + span,
  .ant-menu-submenu-title .anticon + span {
    margin-left: 5px;
    transition: border-color 0.005s linear;
  }
`;

export const IconContainer = styled.div`
  display: inline-flex;
  font-size: 20px !important;
  /* color: red; */
`;

export const RecentlyViewContainer = styled.div`
  display: inline-flex;
`;
