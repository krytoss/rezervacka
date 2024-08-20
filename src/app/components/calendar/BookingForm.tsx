import { ChangeEvent, useState } from "react";
import Input from "../form/Input";

type Props = {
	setConfirmation: (confirmation: boolean) => void
}

const BookingForm = ({ setConfirmation }: Props ) => {

	const [ name, setName ] = useState<string>('')
	const [ phone, setPhone ] = useState<string>('')
	const [ email, setEmail ] = useState<string>('')
	const [ note, setNote ] = useState<string>('')

	const handleNameChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setName(event.target.value)
	}

	const handlePhoneChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setPhone(event.target.value)
	}

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setEmail(event.target.value)
	}

	const handleNoteChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setNote(event.target.value)
	}
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setConfirmation(true)
	}
	
	return (
		<form className="max-w-md mx-auto mt-10" onSubmit={ handleSubmit }>
			<div className="mb-4">
				<Input id='name' className='bg-gray-200' label="Meno a priezvisko" type="text" value={ name } onChange={ handleNameChange } />
			</div>
			<div className="mb-4 flex gap-x-4">
				<Input id='tel' inline={ true } className='w-1/2 bg-gray-200' label="Telefónne číslo" type="tel" value={ phone } onChange={ handlePhoneChange }/>
				<Input id='mail' inline={ true } className='w-1/2 bg-gray-200' label="E-mail" type="email" value={ email } onChange={ handleEmailChange }/>
			</div>
			<div className="mb-4">
				<textarea className="w-full px-3 py-2 border border-gray-300 bg-gray-200 rounded-md" placeholder="Poznámka" value={ note } onChange={ handleNoteChange }></textarea>
			</div>
			<div className="text-center">
				<button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Potvrdiť rezerváciu</button>
			</div>
		</form>
	);
}

export default BookingForm