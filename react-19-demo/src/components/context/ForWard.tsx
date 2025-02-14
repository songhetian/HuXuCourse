import { forwardRef, useRef } from 'react';

interface MyComponentProps {
	// 组件的属性
	name: string;
	age: number;
}

function ForWard() {
	const ref = useRef<HTMLInputElement | null>(null);
	function handleClick() {
		ref.current?.focus();
	}
	return (
		<div>
			<Child ref={ref} name={'good'} age={100} />
			<button onClick={handleClick}>获取焦点</button>
		</div>
	);
}

const Child = forwardRef<HTMLInputElement, MyComponentProps>((props, ref) => {
	return (
		<>
			<p>{props.name}</p>
			<p>{props.age}</p>
			<input
				type="text"
				ref={ref}
				className="border border-black outline-dotted outline-offset-8 border-none"
			/>
		</>
	);
});

export default ForWard;
