import { ReactNode } from "react"

type Props = {
	id: string,
	className?: string,
	children: ReactNode
}

const Section = ({ id, children, className }: Props) => {
	return (
		<section id={ id } className={`min-h-screen py-24 px-5 relative z-20 overflow-hidden ${className}`}>
			{ children }
		</section>
	)
}

export default Section