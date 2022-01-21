import * as React from 'react';
import { Term } from 'schema/model';
import { ArrowDown, ChevronDown } from 'uikit/icon-component';
import { CircleIcon, FaqItemArrownContainer, FaqItemContainer, FaqItemContent, FaqItemContentContaner, FaqItemTitle } from './FaqItemStyled';
import $ from 'jquery';
interface IFaqItemProps {
	item: Term
}

const createIdFromTitle = (title: string) => {
	return title.toLowerCase().replaceAll(" ", "-");
}

const FaqItem: React.FunctionComponent<IFaqItemProps> = ({ item }) => {
	const [open, setOpen] = React.useState<boolean>(false);
	const handleChangeTree = (): void => {
		setOpen(!open);
		const id = createIdFromTitle(item.title);
		if (!open) {
			$("#" + id).slideDown();
		} else {
			$("#" + id).slideUp();
		}
	}

	return (
		<FaqItemContainer>
			<FaqItemContentContaner>
				<FaqItemTitle onClick={handleChangeTree} >{item.title}</FaqItemTitle>
				<FaqItemContent style={{ display: "none" }} id={createIdFromTitle(item.title)} >{item.content}</FaqItemContent>
			</FaqItemContentContaner>
			<FaqItemArrownContainer>
				<CircleIcon className={open ? 'open' : ''} onClick={handleChangeTree}>
					<ChevronDown />
				</CircleIcon>
			</FaqItemArrownContainer>
		</FaqItemContainer>
	);
};

export default FaqItem;
