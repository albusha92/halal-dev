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
	margin-bottom: 0.5rem;
`;

export const FaqItemContent = styled.div`
	padding-top: 0.5rem;
	border-top: 1px solid ${colors.borderGrey};
`;

export const FaqItemArrownContainer = styled.div`
	padding-left: 1rem;
`;