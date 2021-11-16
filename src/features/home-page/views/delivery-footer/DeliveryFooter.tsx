import { Col, Row, Select } from 'antd';
import * as React from 'react';
import { PartnerIamge, Title } from '../../../../uikit/footer/FooterStyled';
import dhl from '../../../../assets/deliveries/dhl.png'
import goHalal from '../../../../assets/deliveries/go-halal.png';
import hermes from '../../../../assets/deliveries/hermes.png';
import ups from '../../../../assets/deliveries/ups.png';
import { ContactContainer, DeliveryContainer, Image, ImageContainer, PartnerContainer, RatingContainer, SafetyContainer } from './DeliveryFooterStyled';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../ultils/store';
import { colors } from '../../../../config/constants';
import { update_language } from '../../slices/homeSlice';
import { languages } from '../../../../uikit/header/TopHeaderMenu';
import SvgGlobal from '../../../../uikit/icon-component/Global';
import rating from '../../../../assets/deliveries/rating.png';

interface IDeliveryFooterProps {
}

const { Option } = Select;

const DeliveryFooter: React.FunctionComponent<IDeliveryFooterProps> = (props) => {
	const lap1440 = useMediaQuery({ query: '(min-width: 1440px)' });
	const lap1024 = useMediaQuery({ query: '(min-width: 1024px)' });
	const tablet768 = useMediaQuery({ query: '(min-width: 768px)' });
	const dispatch = useDispatch();

	const { language } = useSelector((state: RootState) => state.home);
	return (
		<DeliveryContainer>
			<Row justify="space-between" gutter={[20, 20]}>
				<Col xs={24} md={12}>
					<PartnerContainer>
						<Title>
							Delivery Partners
						</Title>
						<PartnerIamge>
							<Row justify="space-between" gutter={tablet768 ? 20 : 10}>
								<Col span={6}>
									<Image>
										<img src={goHalal} alt="" width="100%" />
									</Image>
								</Col>
								<Col span={6}>
									<Image>
										<img src={hermes} alt="" width="100%" />
									</Image>
								</Col>
								<Col span={4}>
									<Image>
										<img src={ups} alt="" width="100%" />
									</Image>
								</Col>
								<Col span={6}>
									<Image>
										<img src={dhl} alt="" width="100%" />
									</Image>
								</Col>
							</Row>
						</PartnerIamge>
					</PartnerContainer>
				</Col>
				<Col xs={24} md={10}>
					<SafetyContainer>
						<Title>
							Safety
						</Title>
						<Row style={{flex: 1}} justify="space-between" gutter={lap1440 ? 40 : 20}>
							<Col span={lap1024 ? 12 : 12}>
								<Image>
									<img src={rating} alt="" width="100%" />
								</Image>
							</Col>
							<Col span={lap1024 ? 9 : 12}>
								<ImageContainer>
									<SvgGlobal fontSize={20} />
									<Select
										value={language}
										style={{
											// width: 120,
											fontSize: "1rem",
											color: colors.darkGrey,
											padding: 0,
											display: 'flex',
											alignItems: "center",
											justifyContent: "center"
										}} bordered={false}
										onChange={(value) => {
											dispatch(update_language(value))
										}}
									>
										{languages.map(item => {
											return (
												<Option style={{ color: colors.darkGrey, width: 120 }} value={item.value}>
													{item.name} {item.icon}
												</Option>
											)
										})}

									</Select>
								</ImageContainer>
							</Col>
						</Row>
					</SafetyContainer>
				</Col>
			</Row>
		</DeliveryContainer>
	);
};

export default DeliveryFooter;
