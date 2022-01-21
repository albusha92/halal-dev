import { Space } from 'antd';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { MarkQuestion } from 'uikit/icon-component';
import { RootState } from 'ultils/store';
import FaqItem from './FaqItem';
import { FaqContainer, FaqTitle, FaqTitleContainer, HaveQuestionText } from './FqaStyled';

interface IFaqProps {
}

const Faq: React.FunctionComponent<IFaqProps> = (props) => {
	const { terms } = useSelector((state: RootState) => state.term);
	return (
		<FaqContainer>
			<FaqTitleContainer>
				<FaqTitle>
					<MarkQuestion />
					Frequently Asked Questions (FAQ)
				</FaqTitle>
				<HaveQuestionText>
					Do you have questions, please find the answers for frequently asked questions. You can also write to us if you are not able to find your question.
				</HaveQuestionText>
				<Space direction="vertical" style={{ width: "100%", marginTop: "1rem" }}>
					{terms.map(item => {
						return <FaqItem item={item} />
					})}
				</Space>
			</FaqTitleContainer>
		</FaqContainer>
	);
};

export default Faq;
