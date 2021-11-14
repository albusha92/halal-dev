import styled from "styled-components";
import { colors } from "../../../../config/constants";
import { device } from "../../../../config/screensSizes";

export const MeetTeamContainer = styled.div`
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
    margin: 1rem auto;
  }
`;

export const MembersContainer = styled.div`
  margin-top: 1rem;
  @media ${device.lap1280} {
    margin-top: 2rem;
  }
`;

export const MemberCardItem = styled.div`
  background-color: white;
  box-shadow: 3px 3px 4px rgba(200, 199, 199, 0.25);
  border-radius: 10px;
  @media ${device.mobileS} {
    padding: 0.8rem 1rem;
  }
  @media ${device.tablet960} {
    padding: 1rem 2rem;
  }
`;

export const AvatarCircle = styled.img`
  width: 100%;
`;

export const MenberInforContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const Name = styled.div`
  font-weight: bold;
  -webkit-text-stroke-width: 0.1px;
  @media ${device.mobileS} {
    font-size: 0.65rem;
  }
  @media ${device.tablet960} {
    font-size: 0.8rem;
  }
`;

export const Position = styled.div`
  margin-bottom: 0.5rem;
  @media ${device.mobileS} {
    font-size: 0.55rem;
  }
`;
