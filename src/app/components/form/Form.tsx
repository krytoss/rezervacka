import { ReactNode } from "react"

type Props = {
	action?: string,
	children: ReactNode
}

const Form = ({ action, children }: Props) => {
	return (
		<form action={ action }>
			{ children }
		</form>
	)
}

export default Form