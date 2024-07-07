import { useCallback } from "react"

type Props = {
	day: Date,
	disabled: boolean,
	setDate: (date: Date | undefined) => void,
	selected: boolean,
	booked: boolean
}

const DayButton = ({day, disabled, setDate, selected, booked}: Props) => {

	const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		if (booked)
			return
		if (selected) {
			setDate(undefined)
		} else {
			setDate(day)
		}
	}, [ day ])

	return (
		<td className='p-1'>
			<button
				className={`
					block p-0 sm:p-1 md:p-2 w-full rounded-md
					${disabled ? 'text-gray-400 opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}
					${selected ? 'bg-gray-300 hover:bg-gray-300 text-gray-900' : ''}
					${booked ? 'cursor-not-allowed opacity-50 hover:border-transparent focus:outline-none' : ''}
				`}
				onClick={ handleClick }
			>
				{ day.getDate() }
			</button>
		</td>
	)

}

export default DayButton