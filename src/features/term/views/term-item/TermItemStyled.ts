import styled, { keyframes } from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const TermItemContainer = styled.div`
  border: 1px solid #eeeeee;
  overflow: hidden;
`;

export const RecContainer = styled.div`
  position: absolute;
  height: 100%;
  left: 1rem;
  top: 0;
  display: grid;
  place-items: center;
`;

export const TermItemHeader = styled.div`
  background-color: ${colors.greyBackground};
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  position: relative;
`;

export const TermTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  color: ${colors.darkGrey};
  font-size: 0.7rem;
  @media ${device.lap1024} {
    font-size: 0.9rem;
  }
`;

export const ExpandIcon = styled.div`
  position: absolute;
  top: 0;
  display: grid;
  place-items: center;
  height: 100%;
  right: 0.5rem;
  cursor: pointer;
  color: #737373;
`;

export const slideUp = keyframes`
  from {
    visibility: visible;
    height: 100px;
  }

  to {
    visibility: hidden;
    height: 0;
	padding: 0 2.5rem;
  }
`;

export const slideDown = keyframes`
  0% {
    visibility: hidden;
    height: 0;
	padding: 0 2.5rem;
  }

  95% {
    visibility: visible;
    height: 100px;
  }

  /* Set height to 'auto' after animation for spacing showing form-invalid feedback message */
  100% {
    visibility: visible;
    height: auto;
  }
`;

export const TermContent = styled.div`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  &.slide-down {
    animation: ${slideDown} 0.2s linear both;
  }
  &.slide-up {
    animation: ${slideUp} 0.2s linear both;
  }
`;
