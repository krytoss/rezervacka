"use client"

import { useEffect, useState } from "react"
import Calendar from "./Calendar"
import ScopeSelector from "./ScopeSelector"
import Scope from "@/app/types/Scope"
import BookingForm from "./BookingForm"
import Modal from "../modal/Modal"
import ModalHeader from "../modal/ModalHeader"
import ModalBody from "../modal/ModalBody"
import ConfirmationCode from "../form/ConfirmationCode"

const BookingWrapper = () => {

	const [ scopeId, setScopeId ] = useState<number>()
	const [ scope, setScope ] = useState<Scope>()
	const [ scopes, setScopes ] = useState<Scope[]>([])
	const [ dateTime, setDateTime] = useState<Date>()
	const [ confirmationModal, setConfirmationModal ] = useState<boolean>(false)
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
		<div className='w-full flex flex-col md:flex-row'>
			<ScopeSelector scopes={ scopes } scope={ scope } setScopeId={ setScopeId } />
			{ scope &&
				<div className='w-full md:w-4/5 flex-column bg-gray-600'>
					<Calendar dateTime={ dateTime } setDateTime={ setDateTime } businessId={ businessId } scope={ scope } />
					{ dateTime && <BookingForm setConfirmation={ setConfirmationModal } /> }
				</div>
			}
			{ confirmationModal &&
				<Modal setOpen={ setConfirmationModal }>
					<ModalHeader title='Potvrdenie rezervácie' />
					<ModalBody>
						<p>Na telefónne číslo Vám bol zaslaný potvrdzovací kód.</p>
						<ConfirmationCode />
					</ModalBody>
				</Modal>
			}
		</div>
	)

}

export default BookingWrapper