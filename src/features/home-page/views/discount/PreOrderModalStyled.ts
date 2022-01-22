import { colors } from "config/constants";
import styled from "styled-components";

export const PreOrderModalContent = styled.div`
  background-color: white;
  padding: 3rem 4rem 2rem;
  text-align: center;
`;

export const PreOrderModalTitle = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const PreOrderSubTitle = styled.div``;

// PreOrder Form
export const PreOrderFormContainer = styled.div`
  padding: 2rem;
  border: 1px solid ${colors.lightGrey};
  width: 70%;
  margin: 2rem auto 0;
`;

export const LikedProduct = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding-left: 0.7rem;
  cursor: pointer;
  align-items: center;
  top: 0;
  right: 0;
  font-weight: 500;
  border: 1px solid ${colors.lightGrey};
`;

export const FirstStepText = styled.div`
	font-weight: bold;
	font-size: 0.9rem;
	text-align: left;
	margin-bottom: 1rem;
`;

export const PreOrderCheckboxText = styled.div`
  text-align: left;
  color: ${colors.darkGrey};
  font-size: 0.9rem;
  & a {
    color: ${colors.primary};
    text-decoration: underline;
    font-weight: 500;
  }
`;

export const CheckboxLabel = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	& span{
		font-size: 1.5rem;
		display: flex;
	}
`;