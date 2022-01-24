import { colors } from "config/constants";
import { device } from "config/screensSizes";
import styled from "styled-components";

export const PreOrderModalContent = styled.div`
  background-color: white;
  padding: 3rem 4rem 2rem;
  text-align: center;
  @media ${device.mobileS} {
    padding: 3rem 1rem 2rem;
  }
  @media ${device.mobileL} {
    padding: 3rem 1rem 2rem;
  }
  @media ${device.lap1024} {
    padding: 3rem 4rem 2rem;
  }
  @media ${device.lap1440} {
    padding: 3rem 4rem 2rem;
  }
  @media ${device.lap1920} {
    padding: 3rem 4rem 2rem;
  }
`;

export const PreOrderModalTitle = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }
  @media ${device.lap1024} {
    font-size: 1.5rem;
  }

  @media ${device.lap1440} {
    font-size: 1.8rem;
  }
`;

export const PreOrderSubTitle = styled.div``;

// PreOrder Form
export const PreOrderFormContainer = styled.div`
  padding: 2rem;
  border: 1px solid ${colors.lightGrey};
  width: 70%;
  margin: 2rem auto 0;
  @media ${device.mobileS} {
    width: 100%;
	padding: 1rem 0.5rem;
  }
  @media ${device.lap1024} {
    width: 70%;
	padding: 2rem;
  }
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
  @media ${device.mobileS} {
	  font-size: 0.6rem;
  }
  
  @media ${device.mobileL} {
	  font-size: 0.8rem;
  }
  @media ${device.lap1024} {
	  font-size: 1rem;
  }
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
  & span {
    font-size: 1.5rem;
    display: flex;
  }
`;
