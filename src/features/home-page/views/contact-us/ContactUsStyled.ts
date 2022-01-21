import { colors } from "config/constants";
import styled from "styled-components";
import { FaqTitle, HaveQuestionText } from "../faq/FqaStyled";

export const ContactUsContainer = styled.div`
  background-color: ${colors.borderGrey};
  padding: 2rem 0;
`;

export const CtuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const CtuTitle = styled(FaqTitle)`
  color: ${colors.primary};
`;

export const CtuSubTitle = styled(HaveQuestionText)`
  color: black;
`;

export const CtsInforContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CtsInforItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3rem;
`;

export const ArrowDownInput = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  background: ${colors.secondary};
  display: flex;
  align-items: center;
  padding: 0.8rem;
  top: 0;
  right: 0;
`;
