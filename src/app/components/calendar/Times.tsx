import React, { useState, useEffect } from 'react';
import TimeButton from './TimeButton';
import { AiOutlineLoading3Quarters } from 'rocketicons/ai';
import Scope from '@/app/types/Scope';

type Props = {
	scope: Scope,
	allowedHours: { min: string; max: string; } | undefined,
	setDateTime: (time: Date | undefined) => void,
	dateTime: Date | undefined
}

const Times = ({ scope, allowedHours, setDateTime, dateTime }: Props) => {

	const [ hours, setHours ] = useState<{start: Date, end: Date}[]>([])

	useEffect(() => {
	
		let currHours = []
		if (allowedHours != undefined) {
			if (allowedHours.min && allowedHours.max) {

				const opening = new Date(dateTime?.getTime() || 0)
				opening.setHours(parseInt(allowedHours.min.split(':')[0]))
				opening.setMinutes(parseInt(allowedHours.min.split(':')[1]))
				const closing = new Date(dateTime?.getTime() || 0)
				closing.setHours(parseInt(allowedHours.max.split(':')[0]))
				closing.setMinutes(parseInt(allowedHours.max.split(':')[1]))
				const currStart = new Date(dateTime?.getTime() || 0)
				currStart.setHours(opening.getHours())
				currStart.setMinutes(opening.getMinutes())
				const currEnd = new Date(currStart.getTime() + scope?.duration * 60000)
				const current = { start: currStart, end: currEnd }

				while (current.end.getTime() <= closing.getTime()) {
					const start = new Date(current.start)
					const end = new Date(current.end)
					currHours.push({start: start, end: end})
					current.start.setTime(start.getTime() + scope?.interval * 60000)
					current.end.setTime(end.getTime() + scope?.interval * 60000)
				}
			}
		}
		setHours(currHours)
	
	}, [ setHours, dateTime, allowedHours ])

	return (
		<div className='mt-4'>
			<h3 className='text-lg font-semibold mb-2'>Vyberte čas</h3>
			<div className='grid grid-cols-4 gap-2'>
				{
					hours && hours.length ?
						hours.map((time, i) => {
							return (
								<TimeButton key={i} time={ time } setDateTime={ setDateTime } selected={ dateTime?.getTime() === time.start.getTime() } />
							)
						})
						:
						<div className='flex justify-center items-center col-span-5'>
							<AiOutlineLoading3Quarters className='animate-spin text-gray-400' />
						</div>
					}
			</div>
		</div>
	)

}

export default Times