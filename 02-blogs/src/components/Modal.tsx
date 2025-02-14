import { FC, ReactNode, useRef } from 'react';
import { useBlogs } from '../shared/BlogContext';

const Modal: FC<{ children: ReactNode; onClose: () => void }> = ({
	children,
	onClose
}) => {
	const divElement = useRef<HTMLDivElement>(null);
	return (
		<div
			className="fixed inset-0  bg-black/50 flex items-center justify-center"
			onClick={(event: MouseEvent<HTMLDivElement>) => {
				if (!(event.target.closest('#test') == divElement.current)) {
					onClose();
				}
			}}
		>
			<div
				id="test"
				ref={divElement}
				className="bg-white p-4 rounded-lg shadow relative"
			>
				{children}
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500"
				>
					X
				</button>
			</div>
		</div>
	);
};

export default Modal;
