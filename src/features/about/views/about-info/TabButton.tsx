import * as React from 'react';
import { TabContainer } from './TabButtonStyled';

interface ITabButtonProps {
	name: string;
	onClick: () => void;
	focus: boolean;
	icon?: any;
}

const TabButton: React.FunctionComponent<ITabButtonProps> = ({ name, onClick, focus, icon }) => {
	return (
		<TabContainer className={focus ? "focus" : ""} onClick={onClick}>
			<div className='icon'>{icon}</div> {name}
		</TabContainer>
	);
};

export default TabButton;
