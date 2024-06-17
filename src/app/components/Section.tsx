import { ReactNode } from "react"

type Props = {
	id: string,
	children: ReactNode
}

const Section = ({ id, children }: Props) => {
	return (
		<section id={ id } className='min-h-screen py-24 px-5'>
			{ children }
		</section>
	)
}

export default Section