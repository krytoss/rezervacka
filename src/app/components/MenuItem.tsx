type Props = {
	link: string,
	text: string
}

const MenuItem = ({ link, text }: Props) => {

	return (
		<li className='w-full lg:w-auto'>
			<a href={ link }>{ text }</a>
		</li>
	)

}

export default MenuItem