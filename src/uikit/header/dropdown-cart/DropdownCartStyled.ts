import { slideUp } from "./../../../features/term/views/term-item/TermItemStyled";
import styled from "styled-components";
import { colors } from "../../../config/constants";
import { slideDown } from "../../../features/term/views/term-item/TermItemStyled";

export const DropdownCartContainer = styled.div`
  background-color: white;
  border: 1px solid ${colors.borderGrey};
`;

export const DropdownPadding = styled.div`
  padding: 0.5rem 1.2rem;
  border-bottom: 1px solid ${colors.borderGrey};
`;

export const DropdownHeader = styled(DropdownPadding)`
  background-color: ${colors.greyBackground};
  color: #737373;
  font-size: 0.7rem;
`;

export const HeaderText = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 0.8rem;
`;

export const SlideDownItem = styled(DropdownPadding)`
  color: ${colors.darkGrey};
  font-weight: bold;
  font-size: 0.8rem;
`;

export const DropdownTab = styled(DropdownPadding)`
  display: flex;
  gap: 0.2rem;
  padding-bottom: 0;
`;

export const TabItem = styled.div`
  font-size: 0.8rem;
  flex: 1;
  font-weight: bold;
  -webkit-text-stroke-width: thin;
  color: #999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px solid;
  border-color: white;
  transition: all 0.2s linear;
  &:hover,
  &.chosen {
    color: ${colors.primary};
    border-color: ${colors.primary};
  }
  cursor: pointer;
`;

export const TabIcon = styled.div`
  font-size: 2.5rem;
  display: inline-flex;
`;

export const SlideDown = styled.div``;

export const SlideContent = styled(DropdownPadding)`
  &.slidedown {
    animation: ${slideDown} 0.2s linear;
  }
  /* &.slideup {
    animation: ${slideUp} 0.2s linear ;
  } */
`;

export const Caption = styled.div`
  color: #737373;
  font-size: 0.8rem;
`;

export const Zipcode = styled.div`
  color: ${colors.darkGrey};
  font-weight: bold;
  margin-top: 0.3rem;
`;

export const InputZipcode = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.borderGrey};
  flex: 1;
  justify-content: space-between;
  display: flex;
  & .ant-input {
    max-width: 2rem;
    text-align: center;
    font-size: 1rem;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    &::after {
      content: "";
      width: 1px;
      height: 70%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: red;
    }
  }
`;

export const VrLine = styled.div`
	width: 1px;
	height: 100%;
	background-color: ${colors.borderGrey};
`;

export const Address = styled(Zipcode)``;

export const InputContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.3rem;
  & .ant-input {
    font-size: 1rem;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
  }
`;

export const InputAddress = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.borderGrey};
  flex: 1;
`;

export const InputIcon = styled.div`
  width: 2.7rem;
  display: grid;
  place-items: center;
  background-color: ${colors.primary};
  font-size: 1rem;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  & .ant-picker-calendar {
    max-width: 320px;
    border: 1px solid ${colors.primary};
  }
  & .ant-picker-calendar-header {
    background-color: ${colors.primary};
    display: flex;
    justify-content: center;
  }
  & .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
    background: ${colors.primary};
  }
  & .ant-picker-calendar-header .ant-picker-calendar-mode-switch {
    display: none;
  }
`;

export const FittingHourContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const FittingHourItem = styled.div`
  padding: 0.5rem 0.7rem;
  border: 2px solid ${colors.borderGrey};
  flex: 1;
  cursor: pointer;
  &:hover,
  &.hour {
    font-weight: bold;
    border-color: ${colors.primary};
  }
`;

export const Hour = styled.div`
  color: ${colors.darkGrey};
  font-size: 0.7rem;
  text-align: center;
  white-space: nowrap;
  & span {
    color: ${colors.primary};
  }
`;

export const ConfirmDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & span {
    font-weight: bold;
  }
`;

export const ButtonConfirm = styled.div`
  font-weight: bold;
  color: white;
  background-color: ${colors.primary};
  padding: 0.5rem 1.5rem;
  display: inline-flex;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin: 1.5rem 0 0.5rem;
  display: flex;
  justify-content: center; ;
`;

export const FastDelivery = styled(DropdownPadding)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const DeliveryContainer = styled.div`
  font-size: 0.7rem;
`;

export const DeliveryCaption = styled.div`
  font-size: 1rem;
  line-height: 1rem;
  font-weight: bold;
`;
