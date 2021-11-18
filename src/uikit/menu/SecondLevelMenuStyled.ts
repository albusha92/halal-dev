import styled from "styled-components";
import { colors } from "../../config/constants";

export const SecondLevelMenuContainer = styled.div`
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
