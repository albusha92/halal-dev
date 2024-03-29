import { FirstLevelMenuContainer } from "./FirstLevelMenuStyled";
import styled from "styled-components";
import { colors } from "../../config/constants";

export const MenuContainer = styled.div`
  background-color: white;
  width: 300px;
  position: relative;
  border: 1px solid ${colors.borderGrey};
`;

export const OlContainer = styled.ol`
  list-style: none;
`;

export const LiItem = styled.li`
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  color: ${colors.lightGrey};
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  cursor: pointer;
  border-left: 5px solid white;
  &:hover {
    color: ${colors.primary} !important;
    font-weight: bold;
    border-left: 5px solid ${colors.primary};
  }
  &:hover ${FirstLevelMenuContainer} {
    visibility: visible;
    opacity: 1;
  }
`;

export const LiImage = styled.div`
  width: 1.4rem;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.darkGrey};
  font-size: 0.7rem;
  &:hover {
    color: ${colors.primary};
  }
`;
