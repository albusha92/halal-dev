import * as React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { CountryContainer } from './RegisterStyled';

interface ISelectCountryProps {
}

const SelectCountry: React.FunctionComponent<ISelectCountryProps> = (props) => {
	const [selected, setSelected] = React.useState<string>("DE");
	const onSelect = (code: string): void => setSelected(code);
	return (
		<CountryContainer>
			<ReactFlagsSelect
				selected={selected}
				onSelect={onSelect}
				showSelectedLabel={true}
				showSecondarySelectedLabel={true}
				selectedSize={16}
				showOptionLabel={true}
				showSecondaryOptionLabel={true}
				optionsSize={16}
				placeholder={"search"}
				searchable={false}
				searchPlaceholder={""}
				alignOptionsToRight={false}
				fullWidth={true}
				disabled={false}
			/>
		</CountryContainer>
	);
};

export default SelectCountry;
