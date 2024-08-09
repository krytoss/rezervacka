"use client"

import { useEffect, useState } from "react"
import Calendar from "./Calendar"
import ScopeSelector from "./ScopeSelector"

type Scope = {
	id: number,
	name: string,
	price: number,
	duration: number
}

const BookingWrapper = () => {

	const [ scopeId, setScopeId ] = useState<number>()
	const [ scope, setScope ] = useState<Scope>()
	const [ scopes, setScopes ] = useState<Scope[]>([])
	const businessId = 2

	useEffect(() => {
		fetch(`http://localhost:3000/api/services?business_id=${businessId}`)
			.then(response => response.json())
			.then(data => {
				setScopes(data)
				console.log(data)
			})
			.catch(error => {
				// Handle the error here
				console.log(error)
			});
	}, [ businessId ])

	useEffect(() => {
		if (scopeId) {
			setScope(scopes.find(scope => scope.id === scopeId))
		} else {
			setScope(undefined)
		}
	}, [ scopeId, setScope])

	return (
		<>
			<ScopeSelector scopes={ scopes } scope={ scope } setScopeId={ setScopeId } />
			{ scope && <Calendar businessId={ businessId } scope={ scope } /> }
		</>
	)

}

export default BookingWrapper