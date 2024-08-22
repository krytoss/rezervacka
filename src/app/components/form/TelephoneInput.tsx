import { CountrySelector, getActiveFormattingMask, usePhoneInput } from "react-international-phone";
import Input from "./Input";
import 'react-international-phone/style.css';
import Button from "./Button";
import { useEffect, useRef } from "react";

type Props = {
	className?: string,
	value: string,
	onChange: (phone: string) => void
}

const TelephoneInput: React.FC<Props> = ({ className, value, onChange }) => {
	
	const phoneInput = usePhoneInput({
		defaultCountry: "cz",
		value,
		disableFormatting: false,
		forceDialCode: true,
		onChange: (data) => {
			console.log(data)
		  onChange(data.phone);
		}
	});

	return (
		<div className={ `flex items-stretch ${className}` }>
			<CountrySelector
				selectedCountry={ phoneInput.country.iso2 }
				preferredCountries={ ['cz', 'sk', 'ua', 'pl'] }
				onSelect={(country) => phoneInput.setCountry(country.iso2)}
				renderButtonWrapper={({ children, rootProps }) => {
					console.log(rootProps)
					return (
					<Button className='p-5 bg-gray-200 rounded-tr-none rounded-br-none h-full' {...rootProps}>
						{children}
					</Button>
				)}}
			/>
			<Input
				id='tel'
				inline={ true }
				label="Telefónne číslo"
				type="tel"
				value={ phoneInput.inputValue }
				onChange={ phoneInput.handlePhoneValueChange }
				required={ true }
				className='bg-gray-200 rounded-tl-none rounded-bl-none border-0'
			/>
		</div>
	);
};

export default TelephoneInput;
