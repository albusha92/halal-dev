import * as React from 'react';
import styled from 'styled-components';

interface IVrLineProps {
	height: number;
	style?: object;
}

const VrLineContainer = styled.span<IVrLineProps>`
	background-color: white;
	width: 1px;
	height: ${props => props.height}px;
`;

const VrLine: React.FunctionComponent<IVrLineProps> = (props) => {
	return (
		<VrLineContainer style={props.style} height={props.height}>

		</VrLineContainer>
	);
};

export default VrLine;
