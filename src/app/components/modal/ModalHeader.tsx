import React from 'react';

interface ModalHeaderProps {
	title: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title }) => {
	return (
		<div className="modal-header">
			<h2 className="text-2xl font-bold">{title}</h2>
		</div>
	);
};

export default ModalHeader;