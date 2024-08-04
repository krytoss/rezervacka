import { useEffect, useState } from "react"
import DayButton from "./DayButton"

type Props = {
	selectedDate: Date,
	allowedHours: { min: number, max: number },
	interval: number
}

const Times = ({ selectedDate, allowedHours, interval }: Props) => {

	const [ hours, setHours ] = useState<number[]>([])

	useEffect(() => {
		const currHours = []
		for (var i = allowedHours.min*60; i <= allowedHours.max*60; i += interval) {
			currHours.push(i)
		}
		setHours(currHours)
		console.log()
	}, [ allowedHours, interval ])

	return (
		<div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2'>Select Hour</h3>
			<div className='grid grid-cols-4 gap-2'>
				{
					hours.map((hour, i) => {
						const start = new Date(selectedDate)
						start.setHours( parseInt( '' + hour/60 ), hour%60 )
						const endHour = hour + interval
						const end = new Date(selectedDate)
						end.setHours( parseInt( '' + endHour/60 ), endHour%60 )
						return (
							<button key={i} className={`hour-btn p-2 rounded bg-gray-300 hover:bg-gray-400`}>
								{`${start.toLocaleTimeString('sk', { hour: '2-digit', minute: '2-digit'})}`}
							</button>
						)
					})
				}
			</div>
		</div>
	)

}

export default Times