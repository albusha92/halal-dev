import * as React from 'react';
import { Term } from 'schema/model';
import { ArrowDown } from 'uikit/icon-component';
import { FaqItemArrownContainer, FaqItemContainer, FaqItemContent, FaqItemContentContaner, FaqItemTitle } from './FaqItemStyled';
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
				<FaqItemTitle>{item.title}</FaqItemTitle>
				<FaqItemContent style={{ display: "none" }} id={createIdFromTitle(item.title)} >{item.content}</FaqItemContent>
			</FaqItemContentContaner>
			<FaqItemArrownContainer onClick={handleChangeTree}>
				<ArrowDown />
			</FaqItemArrownContainer>
		</FaqItemContainer>
	);
};

export default FaqItem;
