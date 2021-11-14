import styled from "styled-components";
import { colors } from "../../config/constants";

export const StickyContactContainer = styled.div`
  background-color: ${colors.primary};
  padding: 10px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: white;
  font-size: 20px;
  position: sticky;
  top: 45%;
  z-index: 100;
  left: 100%;
`;

export const IconContainer = styled.div`
  display: inline-flex;
  cursor: pointer;
`;
