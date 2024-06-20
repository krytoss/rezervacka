"use client"

import { useEffect, useState } from "react"

const Clock = () => {

	const [ time, setTime ] = useState<Date>(new Date())

	const tick = () => {
		setTime(new Date())
	}

	useEffect(() => {

		const timerId = setInterval(
			() => tick(),
			1000
		)

		return () => clearInterval(timerId)

	}, [])

	return (
			<span className='pl-3 pr-3 py-2 bg-white bg-opacity-20 rounded-md ml-4'>
				{ time.toLocaleTimeString('sk-SK', { hour: '2-digit', minute:'2-digit' }) }
			</span>
	)
}

export default Clock