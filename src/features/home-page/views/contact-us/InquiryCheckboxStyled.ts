import { colors } from "config/constants";
import styled from "styled-components";

export const InquiryCheckboxContainer = styled.div`
  background-color: white;
  border: 1px solid ${colors.borderGrey};
`;

export const IinquiryTitle = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

export const CheckAll = styled.div`
  text-align: right;
  padding: 0.5rem;
  & .ant-checkbox-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-direction: row-reverse;
	& .ant-checkbox-indeterminate .ant-checkbox-inner{
		background-color: white;
	}
    & .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${colors.primary};
    }
    & .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
    }
    & .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${colors.primary};
    }
  }
`;

export const CheckboxItemContainer = styled.div`
  padding: 1rem 0.5rem;
  font-weight: 600;
  border-top: 1px solid ${colors.borderGrey};
  & .ant-checkbox-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row-reverse;
    & .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${colors.primary};
    }
    & .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
    }
  }
  & .ant-checkbox-wrapper::after {
    display: none;
  }
`;
