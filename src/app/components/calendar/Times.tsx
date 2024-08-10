import React, { useState, useEffect } from 'react';
import TimeButton from './TimeButton';
import { AiOutlineLoading3Quarters } from 'rocketicons/ai';

type Props = {
	hours: Date[],
	setDateTime: (time: Date | undefined) => void,
	dateTime: Date | undefined
}

const Times = ({ hours, setDateTime, dateTime }: Props) => {

	return (
		<div className='mt-4'>
			<h3 className='text-lg font-semibold mb-2'>Vyberte čas</h3>
			<div className='grid grid-cols-5 gap-2'>
				{
					hours && hours.length ?
						hours.map((start, i) => {
							return (
								<TimeButton key={i} time={ start } setDateTime={ setDateTime } selected={ dateTime?.getTime() === start.getTime() } />
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