type Props = {
	time: Date,
	setDateTime: (time: Date | undefined) => void,
	selected: boolean
}

const TimeButton = ({ time, setDateTime, selected }: Props) => {

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setDateTime(selected ? undefined : time)
	}

	return (
		<button 
			className={`hour-btn p-2 rounded hover:bg-gray-400 ${selected ? 'bg-gray-400' : 'bg-gray-300'}`}
			onClick={ handleClick }
		>
			{`${time.toLocaleTimeString('sk', { hour: '2-digit', minute: '2-digit'})}`}
		</button>
	)

}

export default TimeButton