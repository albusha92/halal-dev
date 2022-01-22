import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import * as React from 'react';
import { CheckAll, CheckboxItemContainer, IinquiryTitle, InquiryCheckboxContainer } from './InquiryCheckboxStyled';

interface IInquiryCheckboxProps {
}
const plainOptions = [
	{
		value: 'product-quality',
		label: 'Product quality'
	},
	{
		value: 'new-products',
		label: 'New products'
	},
	{
		value: 'did-not-liked-the-product',
		label: 'Did not liked the product'
	},
	{
		value: 'need-a-new-product-due-to-the-defecs-in-the-recieved-product',
		label: 'Need a new product due to the defecs in the recieved product '
	},
	{
		value: 'damage-in-the-recieved-product ',
		label: 'Damage in the recieved product '
	},
	{
		value: 'wrong-item-sent',
		label: 'Wrong item sent'
	},
	{
		value: 'recall-alert',
		label: 'Recall alert'
	},
	{
		value: 'affliate-freelancer',
		label: 'Affliate Freelancer'
	},
	{
		value: 'supplier-request',
		label: 'Supplier request'
	},
	{
		value: 'franchise-applicant',
		label: 'Franchise applicant'
	},
	{
		value: 'suggestions',
		label: 'Suggestions'
	},
	{
		value: 'other',
		label: 'Other'
	},
];
const InquiryCheckbox: React.FunctionComponent<IInquiryCheckboxProps> = (props) => {
	const [checkedList, setCheckedList] = React.useState([]);
	const [indeterminate, setIndeterminate] = React.useState(true);
	const [checkAll, setCheckAll] = React.useState(true);

	const onChange = list => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);
	};

	const onCheckAllChange = e => {
		setCheckedList(e.target.checked ? plainOptions.map(item => item.value) : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};

	return (
		<InquiryCheckboxContainer>
			<IinquiryTitle>
				Your Query
				<CloseOutlined style={{ cursor: "pointer" }} />
			</IinquiryTitle>
			<CheckAll>
				<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
					Select All
				</Checkbox>
			</CheckAll>
			<Checkbox.Group value={checkedList} onChange={onChange} style={{
				width: "100%",
				maxHeight: '300px',
				overflowY: 'auto'
			}}>
				{plainOptions.map(item => {
					return (
						<CheckboxItemContainer>
							<Checkbox value={item.value}>
								{item.label}
							</Checkbox>
						</CheckboxItemContainer>
					)
				})}
			</Checkbox.Group>
		</InquiryCheckboxContainer>
	);
};

export default InquiryCheckbox;
