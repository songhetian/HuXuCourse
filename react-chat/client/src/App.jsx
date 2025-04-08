import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const App = () => {
	const [messages, setMessages] = useState([]);
	const [messageInput, setMessageInput] = useState('');

	const socket = io('http://localhost:3000');

	useEffect(() => {
		socket.on('message', message => {
			setMessages([...messages, message]);
		});
		return () => {
			socket.off();
		};
	}, [messages]);
	const sendMessage = e => {
		e.preventDefault();
		socket.emit('message', messageInput);
		setMessageInput('');
	};
	return (
		<div>
			<form action="">
				<input
					type="text"
					onChange={e => setMessageInput(e.target.value)}
					value={messageInput}
				/>
				<button onClick={sendMessage}>Send</button>
			</form>
			<section>
				<ul>{messages && messages.map(message => <li>{message}</li>)}</ul>
			</section>
		</div>
	);
};

export default App;
