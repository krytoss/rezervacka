"use client"

import { useCallback, useEffect, useState } from "react"
import DayButton from "./DayButton"
import { SlArrowLeft, SlArrowRight } from "rocketicons/sl"
import Form from "../form/Form"
import { AiOutlineLoading3Quarters } from "rocketicons/ai"

const Calendar = () => {

	const [ weekDates, setWeekDates ] = useState<Date[]>([])
	const [ hours, setHours ] = useState<number[]>([])
	const [ offset, setOffset ] = useState<number>(0)
	const [ selectedDate, setSelectedDate ] = useState<Date>()
	const [ loading, setLoading ] = useState<boolean>(true)

	const allowedDays = [0, 1, 2, 3, 4, 5]
	const holidayDays = ['2024/5/31']
	const bookedDays = [ '5. 6. 2024 10:00:00' ]
	const allowedHours = {
		min: 8, // čas začiatku prvého termínu
		max: 17 // čas začiatku posledného termínu
	} // treba nejak pridať obed?
	const interval = 60

	useEffect(() => {
		let currWeekDays = []
		for (var i = 0; i < 7; i++) {
			const day = new Date
			const curr = day.getDate() - day.getDay() + 1 + i + offset*7
			day.setDate(curr)
			day.setHours(0, 0, 0, 0)
			currWeekDays.push(day)
		}
		setWeekDates(currWeekDays)

		let currHours = []
		for (var i = allowedHours.min*60; i <= allowedHours.max*60; i += interval) {
			currHours.push(i)
		}
		setHours(currHours)

		setLoading(false)
	}, [ setHours, offset, setLoading ])

	const increaseOffset = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setOffset(old => old + 1)
	}, [ setOffset ])

	const decreaseOffset = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setOffset(old => old < 1 ? old : old - 1)
	}, [ setOffset ])

	return (
		<>
			{
				loading ?
					<AiOutlineLoading3Quarters className='icon-7xl icon-black animate-spin' />
					: <Form>
						<table className='text-center m-auto'>
							<thead className='border-b-2 border-white'>
								<tr>
									<td className='' colSpan={7}>
										<button
											className={ offset === 0 ? 'opacity-40 cursor-not-allowed hover:border-transparent focus:border-transparent focus:outline-none' : '' }
											onClick={ decreaseOffset }
										>
											<SlArrowLeft className='icon-white icon-lg' />
										</button>
										<span className='inline-block w-80 px-10'>
											{ `${weekDates[0]?.toLocaleDateString('sk')} -  ${weekDates[6]?.toLocaleDateString('sk' )}` }
										</span>
										<button onClick={ increaseOffset }>
											<SlArrowRight className='icon-white icon-lg' />
										</button>
									</td>
								</tr>
								<tr>
									{
										weekDates.map((day, i) => (
											allowedDays.includes(day.getUTCDay()) && // only showing allowed Dates
											!holidayDays.includes(`${day.getFullYear()}/${(day.getMonth() + 1)}/${day.getDate()}`) &&
											<th key={i} className='p-5'>
												{ `${day.toLocaleString('sk', { weekday: 'short' })}, ${day.getDate()}. ${day.getMonth() + 1}. ${day.getFullYear()}` }
											</th>
										))
									}
								</tr>
							</thead>
							<tbody className='pt-20'>
								{
									hours.map((hour, i) =>
										(
											<tr key={i}>
												{
													weekDates.map((day, i) => {
														if (!allowedDays.includes(day.getUTCDay())) {
															return
														} else if (holidayDays.includes(`${day.getFullYear()}/${(day.getMonth() + 1)}/${day.getDate()}`)) {
															return
														}
														const start = new Date(day)
														start.setHours( parseInt( '' + hour/60 ), hour%60 )
														const endHour = hour + interval
														const end = new Date(day)
														end.setHours( parseInt( '' + endHour/60 ), endHour%60 )
														const booked = bookedDays.includes(start.toLocaleString('sk'))
		//												console.log(bookedDays[0] + ", " + start.toLocaleString('sk'))
														return <DayButton key={i} selected={ start.getTime() == selectedDate?.getTime() } booked={ booked } start={start} end={end} setDate={ setSelectedDate } />
													})
												}
											</tr>
										)
									)
								}	
							</tbody>
						</table>
					</Form>
			}
		</>
	)
}

export default Calendar