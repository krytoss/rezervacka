import { Dispatch, SetStateAction, useCallback } from "react"

type Props = {
	day: Date,
	disabled: boolean,
	setAllowedHours: Dispatch<SetStateAction<{ min: string; max: string; } | undefined>>,
	setDate: (date: Date | undefined) => void,
	selected: boolean,
	booked: boolean,
	className: string
}

const DayButton = ({day, disabled, setAllowedHours, setDate, selected, booked, className}: Props) => {

	const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setAllowedHours(undefined)
		if (booked || disabled)
			return
		if (selected) {
			setDate(undefined)
		} else {
			setDate(day)
		}
	}, [ day, setDate, setAllowedHours, selected, booked, disabled ])

	return (
		<td className='p-1'>
			<button
				className={`
					block p-0 sm:p-1 md:p-2 w-full rounded-md font-semibold
					${disabled ? 'text-gray-400 opacity-50 cursor-not-allowed' : (!selected && 'hover:bg-gray-300')}
					${selected ? 'bg-gray-400 hover:bg-gray-400 text-gray-900' : ''}
					${booked ? 'cursor-not-allowed opacity-50 hover:border-transparent focus:outline-none' : ''}
					${className}
				`}
				onClick={ handleClick }
			>
				{ day.getDate() }
			</button>
		</td>
	)

}

export default DayButton