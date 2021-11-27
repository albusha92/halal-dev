import styled from "styled-components";
import { colors } from "../../config/constants";
import { SecondLevelMenuContainer } from "./SecondLevelMenuStyled";

export const FirstLevelMenuContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 300px;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  top: 0;
  right: -300px;
  z-index: 1000;
  border: 1px solid ${colors.borderGrey};
`;

export const MenuTitle = styled.div`
  font-weight: bold;
  color: ${colors.primary};
  padding: 0.5rem 1rem 0.5rem 3rem;
  font-size: 0.8rem;
  border-left: 5px solid white;
`;

export const LiItem = styled.li`
  /* border-bottom: 1px solid #f2f2f2; */
  display: flex;
  color: ${colors.lightGrey};
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  padding-left: 3rem;
  font-weight: 400;
  cursor: pointer;
  border-left: 5px solid white;
  &:hover {
    color: ${colors.primary} !important;
    font-weight: bold;
    border-left: 5px solid ${colors.primary};
  }
  &:hover ${SecondLevelMenuContainer} {
    visibility: visible;
    opacity: 1;
  }
`;
