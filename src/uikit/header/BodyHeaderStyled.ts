import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";
import { ResponsivePadding } from "../GeneralStyled";

export const BodyHeaderWrapper = styled(ResponsivePadding)`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  min-height: 120px;
  margin-bottom: 4px;
  @media ${device.mobileS} {
    padding: 0.5rem 0.5rem 0;
  }
  @media ${device.tablet960} {
    align-items: flex-start;
    padding: 1.5rem 0.5rem 0;
  }
`;

export const HeaderLogo = styled.a`
  flex: 0 0 auto;
  @media ${device.mobile767} {
    margin-right: 0rem;
    width: 2rem;
    height: 2rem;
  }
  @media ${device.tablet768} {
    margin-right: 0rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  @media ${device.tablet960} {
    margin-right: 2rem;
    width: 4rem;
    height: 4rem;
  }
  @media ${device.lap1280} {
    margin-right: 7rem;
    width: 5rem;
    height: 5rem;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const SearchContainer = styled.div`
  flex: 1;
  order: 1;
  margin-top: 1rem;
  min-width: 17rem;
  @media ${device.mobileS} {
    flex-basis: 100%;
  }
  @media ${device.tablet960} {
    order: 0;
    margin-top: 0;
	flex-basis: min-content;
  }
`;

export const HalalSearchContainer = styled.div`
  display: inline-flex;
  padding-left: 8px;
  border: 1px solid #dddddd;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const SearchIconContainer = styled.div`
  height: 100%;
  cursor: pointer;
  padding: 0.7rem;
  background-color: ${colors.secondary};
  display: inline-flex;
`;

export const RegionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  @media ${device.mobileS} {
    font-size: 0.45rem;
    font-weight: 600;
    gap: 0.15rem;
  }
  @media ${device.mobileM} {
    font-size: 0.5rem;
    font-weight: 600;
    gap: 0.2rem;
  }
  @media ${device.mobileL} {
    font-size: 0.6rem;
    gap: 0.2rem;
  }
  @media ${device.tablet768} {
    font-size: 0.6rem;
    font-weight: 500;
    gap: 0.2rem;
  }
`;

export const RegionTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  @media ${device.mobileS} {
    font-size: 0.45rem;
    font-weight: 600;
  }
  @media ${device.mobileM} {
    font-size: 0.6rem;
    font-weight: 600;
  }
`;

export const RegionItem = styled.span`
  color: #9f9f9f;
`;

export const BodyMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 0 auto;
  margin-left: 5rem;
  @media ${device.mobile767} {
    margin-left: -1rem;
  }
  @media ${device.tablet960} {
    margin-left: 0rem;
    flex: inherit;
  }
  @media ${device.lap1280} {
    margin-left: 3rem;
  }
`;

export const BodyMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: 0.2rem;
  font-size: 0.75rem;
  margin-left: 1rem;
  @media (max-width: 959px) {
    & span {
      display: none !important;
    }
  }
  @media ${device.tablet960} {
    margin-left: 1rem;
  }
  &:hover {
    color: ${colors.primary};
  }
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  font-size: 1.5rem;
  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 1.5rem;
  }
  @media ${device.lap1280} {
    font-size: 1.5rem;
  }
  &:hover {
    color: ${colors.primary};
  }
`;

export const MenuIcon = styled.div`
  & span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${colors.darkGrey};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
  }
  & span:nth-child(2) {
    top: .4rem;
  }
  & span:nth-child(2) {
    top: .4rem;
  }
  & span:nth-child(4) {
    bottom: 0;
  }
`;

export const IconMenuWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1rem;
  margin-left: 1rem;
  @media ${device.tablet960} {
    display: none;
  }
`;
