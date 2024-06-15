import { ReactNode } from "react"

type Props = {
	link: string,
	text?: string,
	children?: ReactNode
}

const MenuItem = ({ link, text, children }: Props) => {

	return (
		<li className='w-full lg:w-auto'>
			<a className='font-semibold text-md text-gray-600 dark:text-white' href={ link }>
				{ text || children }
			</a>
		</li>
	)

}

export default MenuItem