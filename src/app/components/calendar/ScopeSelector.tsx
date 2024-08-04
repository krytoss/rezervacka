type Props = {
	scopes: { [key: number]: { name: string } },
	scope: undefined | { name: string },
	setScopeId: React.Dispatch<React.SetStateAction<undefined | number>>
}

const ScopeSelector = ({ scopes, scope, setScopeId }: Props) => {

	const handleClickScope = (event: React.MouseEvent<HTMLButtonElement>) => {
		const id = Number(event.currentTarget.dataset.id)
		setScopeId(id)
	}

	const handleResetScope = (event: React.MouseEvent<HTMLButtonElement>) => {
		setScopeId(undefined)
	}

	return (
		<div className={scope ? "h-screen w-1/5 bg-gray-800 text-white p-4" : "h-screen w-full bg-gray-800 text-white p-4"}>
			<h1 className="text-xl font-bold mb-4">Logo</h1>
			{scope && <h1 className="text-xl font-bold mb-4">{ scope.name }</h1>}
			{ scope ?
				<button className="btn" onClick={ handleResetScope }>
					Zmeniť výber
				</button>
				:
				scopes && Object.keys(scopes).map((key, i) => (
					<button key={i} data-id={key} className="btn" onClick={ handleClickScope }>
						{scopes[Number(key)].name}
					</button>
				))
			}
		</div>
	)

}

export default ScopeSelector