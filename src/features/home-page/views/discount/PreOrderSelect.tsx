import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import * as React from 'react';
import { BeefOutline, ChickenOutline, LambOutline } from 'uikit/icon-component';
import { CheckAll, CheckboxItemContainer, IinquiryTitle, InquiryCheckboxContainer } from '../contact-us/InquiryCheckboxStyled';
import { CheckboxLabel } from './PreOrderModalStyled';

interface IPreOrderCheckboxProps {
}
const plainOptions = [
	{
		icon: <BeefOutline />,
		value: 'beef-&-beef-products',
		label: 'Beef & beef products'
	},
	{
		icon: <ChickenOutline />,
		value: 'Poultry-&-poultry-products',
		label: 'Poultry & poultry products'
	},
	{
		icon: <LambOutline />,
		value: 'did-not-liked-the-product',
		label: 'Did not liked the product'
	},
	{
		icon: <BeefOutline />,
		value: 'Lamb meat &  meat products',
		label: 'Lamb meat &  meat products'
	},
	{
		icon: <ChickenOutline />,
		value: 'beef-&-beef-products',
		label: 'Beef & beef products'
	},
	{
		icon: <LambOutline />,
		value: 'Poultry-&-poultry-products',
		label: 'Poultry & poultry products'
	},
	{
		icon: <BeefOutline />,
		value: 'did-not-liked-the-product',
		label: 'Did not liked the product'
	},
	{
		icon: <BeefOutline />,
		value: 'Lamb meat &  meat products',
		label: 'Lamb meat &  meat products'
	},
	{
		icon: <BeefOutline />,
		value: 'Fruits & vegetables',
		label: 'Fruits & vegetables'
	},
	{
		icon: <BeefOutline />,
		value: 'Milk & milk products',
		label: 'Milk & milk products'
	},
	{
		icon: <BeefOutline />,
		value: 'recall-alert',
		label: 'Recall alert'
	},
	{
		icon: <BeefOutline />,
		value: 'Bio products',
		label: 'Bio products'
	},
	{
		icon: <BeefOutline />,
		value: 'Frozen meat and poultry products',
		label: 'Frozen meat and poultry products'
	},
	{
		icon: <BeefOutline />,
		value: 'Sweets & candies',
		label: 'Sweets & candies'
	},
	{
		icon: <BeefOutline />,
		value: 'Cosmetics',
		label: 'Cosmetics'
	},
	{
		icon: <BeefOutline />,
		value: 'All grocery items',
		label: 'All grocery items'
	},
];

const PreOrderCheckbox: React.FunctionComponent<IPreOrderCheckboxProps> = (props) => {
	const [checkedList, setCheckedList] = React.useState([]);
	const [indeterminate, setIndeterminate] = React.useState(false);
	const [checkAll, setCheckAll] = React.useState(false);

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
				Select the pre order interset
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
								<CheckboxLabel>
									<span>{item.icon}</span>
									{item.label}
								</CheckboxLabel>
							</Checkbox>
						</CheckboxItemContainer>
					)
				})}
			</Checkbox.Group>
		</InquiryCheckboxContainer>
	);
};

export default PreOrderCheckbox;
