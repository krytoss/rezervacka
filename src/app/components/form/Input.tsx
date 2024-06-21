import { ChangeEvent, ReactNode } from "react"

type Props = {
	id?: string,
	label?: string,
	required?: boolean,
	type: string,
	className?: string,
	inline?: boolean,
	icon?: ReactNode,
	placeholder?: string,
	value?: string,
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Input = ({ id, label, type, inline, icon, className, placeholder, value, onChange }: Props) => {

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		onChange && onChange(event)
	}

	return (
		<div className={`relative ` + (inline ? 'inline-block' : '')}>
			<input
				className={
					`transition bg-transparent border-2 border-b-2
					border-slate-800/20 focus:border-slate-800/70
					text-gray-800 text-sm placeholder:text-slate-800/40
					rounded-md
					block w-full p-2.5
					peer
					px-2.5 py-2.5 w-full
					focus:outline-none focus:ring-0 z-10 `
					+ ( icon && 'pr-7 ' )
					+ className
				}
				type={ type }
				placeholder={ placeholder }
				value={ value }
				onChange={ handleChange }
				id={ id }
			/>
			{ icon &&
				<div className='absolute top-1/2 -translate-y-3.5 right-2'>
					{ icon }
				</div>
			}
			{ label &&
				<label
					htmlFor={ id }
					className={
						`absolute text-sm text-gray-500 dark:text-gray-400
						duration-300 transform -translate-y-4 scale-75 top-4 z-10
						origin-[0] start-2.5
						peer-focus:text-blue-600 peer-focus:dark:text-blue-500
						peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
						peer-focus:scale-75 peer-focus:-translate-y-4
						rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto z-0
						cursor-text`
					}
				>
					{ label }
				</label>
			}
		</div>
	)

}

export default Input