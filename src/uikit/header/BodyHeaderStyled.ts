import styled from "styled-components";
import { colors } from "../../config/constants";
import { device } from "../../config/screensSizes";
import { ResponsivePadding } from "../GeneralStyled";

export const BodyHeaderWrapper = styled(ResponsivePadding)`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
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
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }
  @media ${device.lap1280} {
    /* margin-right: 7rem; */
    /* width: 4rem; */
    /* height: 4rem; */
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
  padding: 0.6rem;
  background-color: ${colors.secondary};
  display: inline-flex;
  /* @media ${device.lap1280} {
    padding: 1.3rem 0.8rem;
  } */
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
    font-size: 0.7rem;
    font-weight: 500;
    gap: 0.4rem;
  }
  @media ${device.lap1024} {
    font-size: 0.6rem;
    gap: 0.2rem;
  }
  @media ${device.lap1280} {
    font-size: 0.7rem;
    gap: 0.3rem;
  }
  @media ${device.lap1440} {
    font-size: 0.8rem;
    gap: 0.3rem;
  }
`;

export const RegionTitle = styled.span`
  font-weight: 600;
  @media ${device.mobileS} {
    font-size: 0.45rem;
  }
  @media ${device.mobileM} {
    font-weight: 600;
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }
  @media ${device.lap1280} {
    font-size: 0.7rem;
  }
  @media ${device.lap1440} {
    font-size: 0.8rem;
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
    margin-left: 0.5rem;
  }
`;

export const BodyMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: 0.2rem;
  font-size: 0.6rem;
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
    font-size: 1.3rem;
  }
  @media ${device.lap1024} {
    /* font-size: 1.9rem; */
  }
  @media ${device.lap1280} {
    /* font-size: 1.9rem; */
  }
  &:hover {
    color: ${colors.primary};
  }
`;

export const BurgerBtn = styled.div`
  width: 1.4rem;
  height: 2px;
  background-color: ${colors.darkGrey};
  border: 3px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.3s ease-in-out;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1.4rem;
    height: 2px;
    background: ${colors.darkGrey};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.3s ease-in-out;
  }
  &::before {
    transform: translateY(-6px);
  }
  &::after {
    transform: translateY(6px);
  }
`;

export const MenuIcon = styled.div`
  height: 100%;
  display: grid;
  place-items: center;

  &.open ${BurgerBtn} {
    transform: translateX(-5px);
    background: transparent;
    box-shadow: none;
  }

  &.open ${BurgerBtn} {
    &::before {
      transform: rotate(45deg) translate(5px, -5px);
    }
    &::after {
      transform: rotate(-45deg) translate(5px, 5px);
    }
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

export const FollowContainer = styled.div`
  /* border: 1px solid; */
  background-color: white;
  min-width: 180px;
  font-weight: bold;
  box-shadow: 0 0 2px 0px ${colors.darkGrey};
`;

export const FollowTitle = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
`;

export const SocialItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  border-bottom: 0.5px solid ${colors.lightGrey};
`;

export const SocialName = styled.div`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
