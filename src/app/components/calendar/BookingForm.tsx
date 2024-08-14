import Input from "../form/Input";

const BookingForm = () => {
	
	return (
		<form className="max-w-md mx-auto mt-10">
			<div className="mb-4">
				<Input className='bg-gray-200' label="Meno a priezvisko" type="text" />
			</div>
			<div className="mb-4 flex gap-x-4">
				<Input inline={ true } className='w-1/2 bg-gray-200' label="Telefónne číslo" type="tel" />
				<Input inline={ true } className='w-1/2 bg-gray-200' label="E-mail" type="email" />
			</div>
			<div className="mb-4">
				<textarea className="w-full px-3 py-2 border border-gray-300 bg-gray-200 rounded-md" placeholder="Poznámka"></textarea>
			</div>
			<div className="text-center">
				<button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Potvrdiť rezerváciu</button>
			</div>
		</form>
	);
}

export default BookingForm