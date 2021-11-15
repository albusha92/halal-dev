import * as React from 'react';
import { Term } from '../../../../schema/model';
import SvgMinus from '../../../../uikit/icon-component/Minus';
import SvgMinusSolid from '../../../../uikit/icon-component/MinusSolid';
import SvgPlusSolid from '../../../../uikit/icon-component/PlusSolid';
import SvgRectangle from '../../../../uikit/icon-component/Rectangle';
import { TermDescription } from '../../pages/TermStyled';
import { ExpandIcon, RecContainer, TermContent, TermItemContainer, TermItemHeader, TermTitle } from './TermItemStyled';

interface ITermItemProps {
	item: Term;
}

const TermItem: React.FunctionComponent<ITermItemProps> = ({ item }) => {
	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<TermItemContainer>
			<TermItemHeader>
				<RecContainer>
					<SvgRectangle fontSize={10} />
				</RecContainer>
				<TermTitle>
					{item.title}
				</TermTitle>
				<ExpandIcon onClick={() => setOpen(!open)}>
					{open ? <SvgMinusSolid fontSize={12} /> : <SvgPlusSolid  fontSize={12}/>}
				</ExpandIcon>
			</TermItemHeader>
			<TermContent className={open ? 'slide-down' : 'slide-up'}>
				<TermDescription>
					{item.content}
				</TermDescription>
			</TermContent>
		</TermItemContainer>
	);
};

export default TermItem;
