"use client"

import { useEffect, useState } from "react"
import { BsClock } from "rocketicons/bs"

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
			<span className='pl-3 pr-3 py-2 ml-4 text-xl'>
				<BsClock className='icon-white -mt-1' /> { time.toLocaleTimeString('sk-SK', { hour: '2-digit', minute:'2-digit' }) }
			</span>
	)
}

export default Clock