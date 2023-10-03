import { useState, useEffect } from 'react';
import './ChatGPTApp.css';

type Message = { role: 'human' | 'ai', content: string };

function ChatGPTApp() {
	const [currentResponse, setCurrentResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState('');
	const [prevPrompt, setPrevPrompt] = useState('');
	const [history, setHistory] = useState<Message[]>(() => {
		const savedHistory = localStorage.getItem('history');
		return savedHistory ? JSON.parse(savedHistory) : [];
	});

	function getLatestMessagesOnPage(history: any[]): void {
		const _history = [...history];
		const _reversedHistory = _history.reverse();
		const lastHumanMessage = _reversedHistory.find(({ role }) => role === 'human');
		const lastBotMessage = _reversedHistory.find(({ role }) => role === 'ai');

		if (lastHumanMessage) {
			setPrevPrompt(lastHumanMessage.content);
		}

		if (lastBotMessage) {
			setCurrentResponse(lastBotMessage.content);
		}
	}

	useEffect(() => {
		localStorage.setItem('history', JSON.stringify(history));
		getLatestMessagesOnPage(history);
	}, [history]);

	const clearHistory = () => {
		setHistory([]);
		localStorage.removeItem('history');
	};

	const sendQuery = async () => {
		setLoading(true);
		setPrevPrompt(prompt);
		setPrompt('');

		try {
			const serverEndpoint = process.env.NODE_ENV === 'development'
				? 'http://localhost:4000/dev/api/chat'
				: `${process.env.REACT_APP_API_ENDPOINT}/api/chat`;

			const _res = await fetch(serverEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': `${process.env.REACT_APP_GATEWAY_SECRET_KEY}`,
				},
				body: JSON.stringify({ prompt, messages: history }),
			});

			const { response } = await _res.json();

			setHistory(prevHistory => [
				...prevHistory,
				{ role: 'human', content: prompt },
				{ role: 'ai', content: response || '' },
			]);

			setCurrentResponse(response);
		} catch (error) {
			console.error('There was an error making the request:', error);
		} finally {
			setLoading(false);
		}
	};

	const renderLoader = () => (
		<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			{/* <Spinner size={3} label="Loading" /> */}
			Loading ...
		</div>
	);

	return (
		<div className="ChatGPTApp">

			<div className="ChatGPTApp-container">

				<div className="chat-section">

					<div className="output-section">
						{loading ? renderLoader() : <span className="output-current-response">{`[Assistant]: ${currentResponse}`}</span>}
					</div>
					<div className="output-prompt">
						<span className="output-prompt-message">{`[User]: ${prevPrompt}`}</span>
					</div>

					<div className="input-section">
						<input
							placeholder="Type your query"
							className="textarea"
							value={prompt}
							onChange={e => setPrompt(e.target.value)}
							onKeyDown={e => {
								if (e.key === 'Enter' && !e.shiftKey) {
									e.preventDefault();
									sendQuery();
								}
							}}
						/>
						<div className="send-button-container">
							<button disabled={!prompt || loading} className="send-button" onClick={sendQuery}>Send away</button>
						</div>
					</div>

				</div>

				<div className="history-section">
					<div className="history-section-conversations-container">
						<h3>Chat history</h3>
						{history.length ? (
							history.map((item, index, arr) => (
								item.role === 'human' && (
									<details key={index}>
										<summary style={{ cursor: 'pointer' }}>
											{(index / 2) + 1}. User: {item.content}
										</summary>
										<p>Assistant: {arr[index + 1]?.content}</p>
									</details>
								)
							))
						) : (
							<p>No Items</p>
						)}
					</div>
					<div className="clear-history-button-container">
						<button className="clear-history-button" onClick={clearHistory}>Clear History</button>
					</div>
				</div>

			</div>

		</div>
	);
}

export default ChatGPTApp;
