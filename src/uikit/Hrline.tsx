import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../config/constants';

interface IHrlineProps {
}

const HrlineContainer = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${colors.borderGrey}; 
`;

const Hrline: React.FunctionComponent<IHrlineProps> = (props) => {
  return (
	  <HrlineContainer>
	  </HrlineContainer>
  );
};

export default Hrline;
