import './Circle.css'

type Props = {
	className: string,
	style: React.CSSProperties
}

const Circle = ({ className, style }: Props) => {

	return (
		<div className={`circle rounded-full absolute z-10 opacity-50 ${className}`} style={ style }></div>
	)

}

export default Circle