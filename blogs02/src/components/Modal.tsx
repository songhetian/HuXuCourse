const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
	children,
	onClose
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-4 rounded-lg shadow relative">
				{children}
				<button
					className="absolute top-2 right-2 to-gray-500"
					onClick={onClose}
				>
					X
				</button>
			</div>
		</div>
	);
};

export default Modal;
