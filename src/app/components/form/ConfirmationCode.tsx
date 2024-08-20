import React, { useState, useRef, useEffect } from 'react';

const ConfirmationCode: React.FC = () => {
	const [codes, setCodes] = useState<string[]>(['', '', '', '', '', '']);
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
	const [canResend, setCanResend] = useState<boolean>(true);
	const [countdown, setCountdown] = useState<number>(60);

	const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const newCodes = [...codes];
		const numericValue = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
		newCodes[index] = numericValue.slice(0, 1); // Only allow the first character
		setCodes(newCodes);

		if (numericValue.length === 0 && index > 0) {
			inputRefs.current[index - 1]?.focus();
		} else if (numericValue.length === 1 && index < codes.length - 1) {
			inputRefs.current[index + 1]?.focus();
		} else if (numericValue.length === 0 && index === 0) {
			inputRefs.current[index]?.focus();
		}
	};

	const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
		const clipboardData = event.clipboardData || (window as any).clipboardData;
		const pastedText = clipboardData.getData('text');
		const newCodes = pastedText.replace(/[^0-9]/g, '').split('').slice(0, codes.length);

		setCodes(newCodes.map(code => code.slice(0, 1))); // Only allow the first character

		newCodes.forEach((code, index) => {
			if (inputRefs.current[index]) {
				inputRefs.current[index]!.value = code.slice(0, 1); // Only allow the first character
			}
		});

		if (newCodes.length < codes.length) {
			inputRefs.current[newCodes.length]?.focus();
		}
	};

	useEffect(() => {
		inputRefs.current[0]?.focus();
	}, []);

	useEffect(() => {
		if (countdown > 0 && !canResend) {
			const timer = setTimeout(() => {
				setCountdown(countdown - 1);
			}, 1000);

			return () => {
				clearTimeout(timer);
			};
		} else if (countdown === 0 && !canResend) {
			setCanResend(true);
		}
	}, [countdown, canResend]);

	const handleResend = () => {
		console.log('Resending code...');
		setCanResend(false);
		setCountdown(60);
	};

	return (
		<div>
			<div className="flex justify-center">
				{codes.map((code, index) => (
					<input
						key={index}
						type="text"
						maxLength={1}
						value={code}
						onChange={(event) => handleChange(index, event)}
						onPaste={handlePaste}
						ref={(ref) => {
							inputRefs.current[index] = ref;
						}}
						className="w-10 h-10 border border-gray-300 rounded-md mx-1 text-center"
					/>
				))}
			</div>
			<div className='flex justify-center'>
				<button
					disabled={!canResend}
					onClick={handleResend}
					className={`mt-4 text-white font-bold py-2 px-4 rounded ${!canResend ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'}`}
				>
					{canResend ? 'Send Code Again' : `Send Code Again (${countdown}s)`}
				</button>
			</div>
		</div>
	);
};

export default ConfirmationCode;