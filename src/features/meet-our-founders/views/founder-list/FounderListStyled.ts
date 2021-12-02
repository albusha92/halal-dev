import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const FoundersContainer = styled.div`
  background-color: ${colors.greyBackground};
  padding: 1rem 0.5rem;
  @media ${device.tablet768} {
    flex-direction: row;
    padding: 1.5rem 0.5rem;
  }
  @media ${device.tablet960} {
    padding: 2rem 0.5rem;
  }
  @media ${device.lap1024} {
    padding: 2rem 5rem;
  }
  @media ${device.lap1440} {
  }
  @media ${device.lap1600} {
    /* max-width: 90rem; */
    padding: 4rem 14rem;
    margin: 0 auto;
  }
`;

export const FounderItemContainer = styled.div``;

export const FounderImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const InforContainer = styled.div``;

export const NameContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: flex-end;
  color: ${colors.primary};
  white-space: nowrap;
  font-weight: bold;
  & span {
    color: ${colors.darkGrey};
  }
  @media ${device.mobileS} {
    gap: 2px;
    font-size: 0.45rem;
    & span {
      font-size: 0.4rem;
    }
  }
  @media ${device.tablet768} {
    gap: 0.2rem;
    font-size: 0.8rem;
    & span {
      font-size: 0.7rem;
    }
  }
  @media ${device.lap1024} {
    gap: 0.2rem;
    font-size: 1rem;
    & span {
      font-size: 0.8rem;
    }
  }
  @media ${device.lap1600} {
    gap: 0.3rem;
    font-size: 1.2rem;
    & span {
      font-size: 0.8rem;
    }
  }
`;

export const Position = styled.div`
  color: #737373;
  @media ${device.mobileS} {
    font-size: 0.4rem;
  }
  @media ${device.tablet768} {
    font-size: 0.7rem;
  }
`;

export const IconContainer = styled.div`
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  @media ${device.tablet768} {
    gap: 0.4rem;
  }
  @media ${device.lap1024} {
	margin-top: 0.6rem;
  }
`;

export const Icon = styled.div`
  color: #aaaaaa;
  cursor: pointer;
  display: inline-flex;
  &:hover {
    color: ${colors.primary};
  }
  @media ${device.mobileS} {
    font-size: 0.6rem;
  }
  @media ${device.tablet768} {
    font-size: 0.9rem;
  }
  @media ${device.lap1440} {
    font-size: 1.1rem;
  }
`;
