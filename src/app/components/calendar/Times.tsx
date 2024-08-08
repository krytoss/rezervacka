import React, { useState, useEffect } from 'react';
import TimeButton from './TimeButton';

type Props = {
	selectedDate: Date,
	allowedHours: { min: number, max: number },
	interval: number,
	setDateTime: (time: Date | undefined) => void,
	dateTime: Date | undefined
}

const Times = ({ selectedDate, allowedHours, interval, setDateTime, dateTime }: Props) => {

	const [ hours, setHours ] = useState<number[]>([])

	useEffect(() => {
		const currHours = []
		for (var i = allowedHours.min * 60; i <= allowedHours.max * 60; i += interval) {
			currHours.push(i)
		}
		setHours(currHours)
	}, [ allowedHours, interval ])

	return (
		<div className='mt-4'>
			<h3 className='text-lg font-semibold mb-2'>Vyberte čas</h3>
			<div className='grid grid-cols-5 gap-2'>
				{
					hours.map((hour, i) => {
						const start = new Date(selectedDate)
						start.setHours(parseInt('' + hour / 60), hour % 60)
						return (
							<TimeButton key={i} time={ start } setDateTime={ setDateTime } selected={ dateTime?.getTime() === start.getTime() } />
						)
					})
				}
			</div>
		</div>
	)

}

export default Times