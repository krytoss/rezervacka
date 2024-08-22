type Props = {
	className?: string,
	type?: "submit" | "button" | "reset",
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
	onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void,
	onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void,
	ariaExpanded?: boolean,
	ariaHaspopup?: boolean,
	ariaLabel?: string,
	disabled?: boolean,
	role?: string,
	title?: string,
	children?: React.ReactNode
}

const Button: React.FC<Props> = ({ className, type, onClick, onMouseDown, onKeyDown, ariaExpanded, ariaHaspopup, ariaLabel, disabled, role, title, children }) => {

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		if (onClick) {
			onClick(event)
		}
	}

	const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		if (onMouseDown) {
			onMouseDown(event)
		}
	}

	return (
		<button
			className={`
				px-4 py-2 bg-blue-500 text-white rounded-md
				${className}
			`}
			type={type}
			onClick={ handleClick }
			onMouseDown={ handleMouseDown }
			onKeyDown={ onKeyDown }
			aria-expanded={ ariaExpanded }
			aria-haspopup={ ariaHaspopup }
			aria-label={ ariaLabel }
			disabled={ disabled }
			role={ role }
			title={ title }
		>
			{ children }
		</button>
	)

}

export default Button