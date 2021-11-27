import * as React from 'react';
import { TabContainer } from './TabButtonStyled';

interface ITabButtonProps {
	name: string;
	onClick: () => void;
	focus: boolean
}

const TabButton: React.FunctionComponent<ITabButtonProps> = ({name, onClick, focus}) => {
	return (
		<TabContainer className={focus ? "focus": ""} onClick={onClick}>
			{name}
		</TabContainer>
	);
};

export default TabButton;
