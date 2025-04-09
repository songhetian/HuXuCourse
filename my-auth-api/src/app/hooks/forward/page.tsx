'use client';

import { Forward } from 'lucide-react';
import React, { forwardRef, Ref, useRef } from 'react';
import Counter, { CounterRef } from './Counter';

const ForwardHook = () => {
	const ref = useRef<CounterRef | null>(null);
	return (
		<div>
			<Counter ref={ref} />
			<button className="btn" onClick={() => ref.current?.reset()}>
				外部重置
			</button>
		</div>
	);
};

export default ForwardHook;
