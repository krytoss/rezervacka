"use client"

import { useEffect, useState } from "react";
import Circle from "./Circle";

const Circles = () => {
	
	const [ circles, setCircles ] = useState<{size: number, top: number, left: number}[]>()

	useEffect(() => {

		let circlesArr = [];

		for (let i = 0; i < 10; i++) {
			const size = Math.floor(Math.random() * 250) + 40
			const top = parseInt("" + Math.random() * 150)
			const left = parseInt("" + (Math.random() * 130 - 30))
			circlesArr.push({
				size: size,
				top: top,
				left: left
			})
		}

		setCircles(circlesArr)

	}, [ setCircles ])

	return (
		<>
			{
				circles?.map((circle, i) => {
					const size = circle.size <= 100 ? 'small' : (circle.size >= 180 ? 'big' : '')
					return (
						<Circle
							key={ i }
							className={`bg-violet-800 ${size}`}
							style={{
								width: circle.size + "px",
								height: circle.size + "px",
								transform: "translate(" + circle.left + "vw, " + circle.top + "%)"
							}}
						/>
					)
				})
			}
		</>
	)

}

export default Circles