import styled from "styled-components";
import { device } from "../../config/screensSizes";

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 5rem;
  overflow: auto;
  overscroll-behavior: contain;
  right: 0;
  height: calc(100vh - 0rem);
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  @media ${device.mobileS} {
    top: 3rem;
  }
  overflow-x: hidden;
 
`;

export const MenuContainer = styled.div`
  background-color: white;
  float: right;
  border: 1px solid #DDD;
  padding-bottom: 10rem;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 80%
  }
  /* @media ${device.tablet768} {
    width: 70%;
  } */
`;

export const ListMenu = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItemLi = styled.li`
	padding: .5rem .5rem;
	border-bottom: 1px solid #DDD;
`;
