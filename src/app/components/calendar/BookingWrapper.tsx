"use client"

import { useEffect, useState } from "react"
import Calendar from "./Calendar"
import ScopeSelector from "./ScopeSelector"

const BookingWrapper = () => {

	const [ scopeId, setScopeId ] = useState<undefined | number>()
	const [ scope, setScope ] = useState<undefined | { name: string }>()
	
	const scopeDummy: { [key: number]: { name: string }} = {
		1: {
			name: 'Scope 1',
		},
		2: {
			name: 'Scope 2',
		}
	}

	useEffect(() => {
		if (scopeId) {
			setScope(scopeDummy[scopeId])
		} else {
			setScope(undefined)
		}
	})

	return (
		<>
			<ScopeSelector scopes={ scopeDummy } scope={ scope } setScopeId={ setScopeId } />
			{ scope && <Calendar /> }
		</>
	)

}

export default BookingWrapper