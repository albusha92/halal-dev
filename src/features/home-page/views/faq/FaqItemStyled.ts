import { colors } from "config/constants";
import styled from "styled-components";

export const FaqItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  background-color: white;
`;
export const FaqItemContentContaner = styled.div`
  flex: 1;
`;

export const FaqItemTitle = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

export const FaqItemContent = styled.div`
  padding-top: 0.5rem;
  border-top: 1px solid ${colors.borderGrey};
`;

export const FaqItemArrownContainer = styled.div`
  padding-left: 1rem;
`;

export const CircleIcon = styled.div`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  background-color: ${colors.darkGrey};
  padding: 0.4rem;
  font-size: 0.7rem;
  border-radius: 1rem;
  transition: all 0.2s ease;
  &.open {
    transform: rotate(180deg);
    background-color: ${colors.primary};
  }
`;
