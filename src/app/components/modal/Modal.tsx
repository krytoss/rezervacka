import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
	children: ReactNode,
	setOpen: (open: boolean) => void
};

const Modal: React.FC<Props> = ({ children, setOpen }: Props) => {

	const handleClose = () => {
		setOpen(false)
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 text-gray-600">
			<div className="fixed inset-0 bg-black opacity-50"></div>
			<div className="fixed inset-0 flex items-center justify-center">
				<div className="bg-white rounded-lg p-6 shadow-xl relative">
					{children}
					<button className="absolute top-0 right-0 p-2" onClick={handleClose}>
						<AiOutlineClose />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;