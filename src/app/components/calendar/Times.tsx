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
		<div>
			{
				hours.map((hour, i) => {
					const start = new Date(selectedDate)
					start.setHours( parseInt( '' + hour/60 ), hour%60 )
					const endHour = hour + interval
					const end = new Date(selectedDate)
					end.setHours( parseInt( '' + endHour/60 ), endHour%60 )
					return (
						<button className='mr-5' key={i}>
							{`${start.toLocaleTimeString('sk', { hour: '2-digit', minute: '2-digit'})}`}
						</button>
					)
				})
			}
		</div>
	)

}

export default Times