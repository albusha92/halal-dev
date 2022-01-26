import { device } from "config/screensSizes";
import styled from "styled-components";

export const PressSLiderContainer = styled.div`
  position: relative;
  display: flex;
  background-color: #f7f7f7;
  width: 100%;
  margin-bottom: 2rem;
  padding: 2rem 0;
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
    > div {
      height: 100%;
    }
  }
  margin-top: 1rem;
  @media ${device.tablet768} {
    margin-top: 0;
  }
`;

export const PressItemContainer = styled.div`
  padding: 0.5rem 1rem;
  background-color: white;
  flex: 1;
  height: 100px;
  display: flex !important;
  border: 1px solid #DDDDDD;
  align-items: center;
  /* @media ${device.tablet768} {
    padding: 20px 80px;
  }
  @media ${device.lap1024} {
    padding: 20px 90px;
  }

  @media ${device.lap1280} {
    padding: 20px 40%;
  } */
`;
