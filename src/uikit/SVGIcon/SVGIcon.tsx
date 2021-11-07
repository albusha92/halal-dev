import React from 'react';
import styled from 'styled-components';

interface SVGContainerProps {
	size?: number;
	hasRing?: boolean;
}

const SVGContainer = styled.span<SVGContainerProps>`
	width: ${props => props.size ? props.size : 20}px;
	height: ${props => props.size ? props.size : 20}px;
	display: inline-flex;
	/* animation: ${props => props.hasRing === true ? `ring 0.3s linear infinite` : false}; */
`;

interface SVGIconProps {
	size?: number;
	src: string;
}

const SVGIcon = ({ size, src }: SVGIconProps) => {

	return (
		<SVGContainer size={size}>
			<img width="100%" src={src} alt="" />
		</SVGContainer>
	)
}

export default SVGIcon;