import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";
import { ResponsivePadding } from "../../../../uikit/GeneralStyled";

export const PaymentFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem .5rem;
  border-top: 0.5px solid #DDDDDD;
  @media ${device.mobileS} {
    flex-direction: column;
	gap: 1rem;
	font-size: .7rem;
  }
  @media ${device.tablet768} {
    flex-direction: row;
	gap: 1rem;
	font-size: .6rem;
  }
  @media ${device.tablet960} {
    flex-direction: row;
	gap: 1rem;
	font-size: .8rem;
  }
  @media ${device.lap1366}{
	  padding: 1rem 10rem;
  }
`;

export const LegalText = styled.div`
  color: ${colors.darkGrey};

  @media ${device.mobileS} {
    /* width: 70%; */
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileS} {
    gap: 0.5rem;
  }
`;

export const PaymentImage = styled.img`
	width: 100%;
  @media ${device.mobileS} {
	/* width: 2.5rem; */
  }
`;

export const CookiesText = styled.div`
	color: ${colors.darkGrey};
	cursor: pointer;
`;
