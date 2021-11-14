import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const HistoryContainer = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: #f7f7f7;
  flex-wrap: wrap;
  padding: 0.5rem;
  @media ${device.tablet768} {
  }
  @media ${device.tablet960} {
    margin: 2rem auto;
	padding: 1rem;
    box-sizing: border-box;
    flex-wrap: nowrap;
    min-height: unset;
    box-shadow: none;
  }
  @media ${device.lap1024} {
    margin: 2rem 3rem;
  }
  @media ${device.lap1440} {
    padding: 1rem 7rem;
  }
  @media ${device.lap1600} {
    max-width: 90rem;
	margin: 0 auto 2rem;
    /* padding: 1rem 7rem; */
  }
`;

export const HistoryTitle = styled.div`
  font-weight: bold;
  color: ${colors.primary};
  @media ${device.mobileS} {
    font-size: 1rem;
  }
  @media ${device.lap1024} {
    font-size: 1.5rem;
  }
`;

export const DetailText = styled.div`
  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
  @media ${device.lap1440} {
    font-size: 0.8rem;
  }
`;

export const HistoryProgressMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HistoryItem = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 1px solid #eeeeee;
  @media ${device.lap1024} {
    padding: 2rem;
  }
  @media ${device.lap1280} {
    padding: 2rem 4rem;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DateTimeText = styled.div`
  font-weight: bold;
  color: ${colors.primary};
  @media ${device.mobileS} {
    font-size: 0.5rem;
  }
  @media ${device.lap1024} {
    font-size: 0.8rem;
  }
`;

export const ItemDetail = styled.div`
  font-weight: bold;
  @media ${device.mobileS} {
    font-size: 0.5rem;
  }
  @media ${device.lap1024} {
    font-size: 0.75rem;
  }
`;

export const HistoryProgress = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: #eee;
  position: relative;
`;

export const CirclePoint = styled.div`
  width: 11px;
  height: 11px;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  border-color: #cccccc;
  border-radius: 50px;
  left: -3px;
  top: -3px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    border-width: 3px;
    border-color: ${colors.primary};
  }
  &.chosen {
    border-width: 3px;
    border-color: ${colors.primary};
  }
`;

export const PointContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
