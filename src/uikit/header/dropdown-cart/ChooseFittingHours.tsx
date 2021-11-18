import * as React from 'react';
import { FittingHourContainer, FittingHourItem, Hour } from './DropdownCartStyled';

interface IChooseFittingHoursProps {
}

const ChooseFittingHours: React.FunctionComponent<IChooseFittingHoursProps> = (props) => {
	const [current, setCurrent] = React.useState<number>(2);
	return (
		<FittingHourContainer>
			<FittingHourItem className={current === 1 ? "hour" : ""} onClick={() => setCurrent(1)}>
				<Hour>
					6:00 - 10:00
					<br />
					<span>1,00 €</span>
				</Hour>

			</FittingHourItem>
			<FittingHourItem className={current === 2 ? "hour" : ""} onClick={() => setCurrent(2)}>
				<Hour>
					10:00 - 16:00
					<br />
					<span>0,00 €</span>
				</Hour>

			</FittingHourItem>
			<FittingHourItem className={current === 3 ? "hour" : ""} onClick={() => setCurrent(3)}>
				<Hour>
					16:00 - 22:00
					<br />
					<span>2,00 €</span>
				</Hour>

			</FittingHourItem>
		</FittingHourContainer>
	);
};

export default ChooseFittingHours;
