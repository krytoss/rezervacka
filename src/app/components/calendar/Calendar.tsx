"use client"

import { useCallback, useEffect, useState } from "react"
import DayButton from "./DayButton"
import { SlArrowLeft, SlArrowRight } from "rocketicons/sl"
import Form from "../form/Form"
import { AiOutlineLoading3Quarters } from "rocketicons/ai"
import Times from "./Times"

type Scope = {
	id: number,
	name: string,
	price: number,
	duration: number
}

type Props = {
	scope: Scope
}

const Calendar = ( { scope } : Props ) => {

	const [ hours, setHours ] = useState<number[]>([])
	const [ offset, setOffset ] = useState<number>(0)
	const [ loading, setLoading ] = useState<boolean>(true)
	const [ currentDay, setCurrentDay ] = useState<Date>(new Date())
	const [ calendarDays, setCalendarDays ] = useState<Date[][]>([])
	const [ selectedDate, setSelectedDate ] = useState<Date>()
	const [ dateTime, setDateTime ] = useState<Date>()

	const today = new Date()
	today.setHours(0,0,0,0);

	const weekDays = [ 'Po', 'Ut', 'St', 'Št', 'Pi', 'So', 'Ne' ]
	const months = [ 'Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December' ]

	const allowedDays = [1, 2, 3, 4, 5, 6]
	const holidayDays = ['2024/5/31']
	const bookedDays = [ '5. 6. 2024 10:00:00' ]

	const allowedHours = {
		min: 8, // čas začiatku prvého termínu
		max: 17 // čas začiatku posledného termínu
	} // treba nejak pridať obed?
	const interval = scope?.duration

	useEffect(() => {
	
		let currHours = []
		for (var i = allowedHours.min*60; i <= allowedHours.max*60; i += interval) {
			currHours.push(i)
		}
		setHours(currHours)
	
		setLoading(false)
	}, [ setHours, setLoading ])

	useEffect(() => {
		setCurrentDay(new Date(today.setMonth(today.getMonth() + offset)))
	}, [ offset, setCurrentDay ])

	useEffect(() => {
		const dayIterator = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1)
		const weekdayOfFirstDay = dayIterator.getDay() == 0 ? 6 : dayIterator.getDay() - 1
		let days = []
		let week = []

		for (let day = 0; day < 42; day++) {
			if (day === 0 && weekdayOfFirstDay === 0) {
				dayIterator.setDate(dayIterator.getDate() - 7)
			} else if (day === 0) {
				dayIterator.setDate(dayIterator.getDate() + (day - weekdayOfFirstDay))
			} else {
				dayIterator.setDate(dayIterator.getDate() + 1)
			}

			week.push(new Date(dayIterator))
			if (week.length === 7) {
				days.push(week)
				week = []
			}
		}

		setCalendarDays(days)
	}, [ currentDay, setCalendarDays ])

	useEffect(() => {
		setDateTime(undefined)
	}, [ selectedDate])

	const increaseOffset = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setOffset(old => old + 1)
	}, [ setOffset ])

	const decreaseOffset = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setOffset(old => old < 1 ? old : old - 1)
	}, [ setOffset ])

	const selectDate = useCallback((day?: Date) => {
		if (day && day.getMonth() !== currentDay.getMonth()) {
			if (currentDay.getMonth() === 11 && day.getMonth() === 0) {
				setOffset(old => old + 1)
			} else if (currentDay.getMonth() === 0 && day.getMonth() === 11) {
				setOffset(old => old - 1)
			} else {
				setOffset(old => old + (day.getMonth() > currentDay.getMonth() ? 1 : -1))
			}
		}
		setSelectedDate(old => old === day ? undefined : day)
	}, [ currentDay, setOffset, setSelectedDate ])

	return (
		<div className='w-4/5 mx-auto bg-gray-600'>
			{
				loading ?
					<AiOutlineLoading3Quarters className='icon-7xl icon-black animate-spin' />
					:
					<Form>
						{ dateTime?.toString() }
						<div className='flex flex-col items-center'>
							<table className='text-center m-auto'>
								<thead className='border-b-2 border-white'>
									<tr>
										<th colSpan={7} className='p-5'>
											<button
												className={`btn ${offset === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
												onClick={decreaseOffset}
												disabled={offset === 0}
											>
												<SlArrowLeft className='icon-gray-500 icon-lg' />
											</button>
											<span className='inline-block w-80 text-center'>
												{`${months[currentDay.getMonth()]} ${currentDay.getFullYear()}`}
											</span>
											<button className='btn' onClick={increaseOffset}>
												<SlArrowRight className='icon-gray-500 icon-lg' />
											</button>
										</th>
									</tr>
									<tr>
										{weekDays.map((day, i) => (
											<th key={i} className='p-5'>
												{day}
											</th>
										))}
									</tr>
								</thead>
								<tbody className='pt-20'>
									{calendarDays.map((week, i) => (
										<tr key={i}>
											{week.map((day, j) => {
												const disabled = (allowedDays.indexOf(day.getDay()) === -1) || (day.getTime() < today.getTime());
												const selected = selectedDate?.toDateString() === day.toDateString();
												return (
													<DayButton
														disabled={disabled}
														key={j}
														day={day}
														setDate={selectDate}
														selected={selected}
														booked={false}
														className={
															(today.toISOString() === day.toISOString() ? 'text-red-500' : '') + ' ' +
															(day.getMonth() !== currentDay.getMonth() ? 'text-gray-400' : '')
														}
													/>
												);
											})}
										</tr>
									))}
								</tbody>
							</table>
							{selectedDate && <Times dateTime={dateTime} setDateTime={setDateTime} selectedDate={selectedDate} allowedHours={allowedHours} interval={interval} />}
						</div>
					</Form>
			}
		</div>
	)
}

export default Calendar