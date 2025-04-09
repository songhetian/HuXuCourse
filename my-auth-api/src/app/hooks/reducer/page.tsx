'use client';

import React, { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'inc':
			return state + action.payload;
		case 'dec':
			return state - action.payload;

		default:
			return state;
	}
};

const ReducerHook = () => {
	const [state, dispatch] = useReducer(reducer, 0);

	return (
		<div>
			<h1>{state}</h1>
			<button
				className="btn mr-10"
				onClick={() => dispatch({ type: 'dec', payload: 10 })}
			>
				-
			</button>
			<button
				className="btn"
				onClick={() => dispatch({ type: 'inc', payload: 10 })}
			>
				+
			</button>
		</div>
	);
};

export default ReducerHook;
