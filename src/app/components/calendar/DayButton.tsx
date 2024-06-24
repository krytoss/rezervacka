import { useCallback } from "react"

type Props = {
	start: Date,
	end: Date,
	setDate: (date: Date | undefined) => void,
	selected: boolean,
	booked: boolean
}

const DayButton = ({start, end, setDate, selected, booked}: Props) => {

	const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		if (booked)
			return
		if (selected) {
			setDate(undefined)
		} else {
			setDate(start)
		}
	}, [ start ])

	return (
		<td className='p-1'>
			<button
				className={
					`block w-full ${selected ? 'bg-gray-300 text-gray-900' : ''} ${booked ? 'cursor-not-allowed opacity-50 hover:border-transparent focus:outline-none' : ''}`
				}
				onClick={ handleClick }
			>
				{
					`${start.toLocaleTimeString('sk', { hour: '2-digit', minute: '2-digit' })}
					-
					${end.toLocaleTimeString('sk', { hour: '2-digit', minute: '2-digit' })}`
				}
			</button>
		</td>
	)

}

export default DayButton