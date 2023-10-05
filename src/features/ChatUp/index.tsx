import { useEffect, useState } from 'react';

import './ChatUp.css';

type Message = { role: 'human' | 'ai', content: string };
type ChatUpProps = { parentRef: React.RefObject<HTMLElement> };

const ChatUp = ({ parentRef }: ChatUpProps) => {
	const [history, setHistory] = useState<Message[]>(() => {
		const savedHistory = localStorage.getItem('history');
		return savedHistory ? JSON.parse(savedHistory) : [];
	});
	const [currentResponse, setCurrentResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState('');
	const [prevPrompt, setPrevPrompt] = useState('');

	useEffect(() => {
		setTimeout(() => {
			if (parentRef && parentRef.current) {
				parentRef.current.scrollTo({
					top: parentRef.current.scrollHeight,
					behavior: 'smooth'
				});
			}
		}, 0);
	}, [parentRef, currentResponse, history]);

	useEffect(() => {
		localStorage.setItem('history', JSON.stringify(history));
	}, [history]);

	const clearHistory = () => {
		setHistory([]);
		localStorage.removeItem('history');
	};

	const sendQuery = async () => {
		setLoading(true);
		setPrevPrompt(prompt);
		setHistory(prevHistory => [
			...prevHistory,
			{ role: 'human', content: prompt },
		]);
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
			Loading ...
		</div>
	);

	return (

		<>
		<div className="head-section">
				<span>
					Meet Your Personal Assistant: An Interactive Chatbot Designed to Address Queries About Antonio Guiotto's Professional Journey, Life Experiences, and Personal Preferences.
				</span>
				<div className="clear-history-button-container">
					<button className="clear-history-button" onClick={clearHistory}>Clear History</button>
				</div>
			</div>

			<div id={'ChatUp'} className="ChatUp ChatUp-container">

			<div className="output-section">
				{history.map(({ role, content }, index) => {
					return <div key={content.slice(0, 10).trim() + `_1.${index}`} className='output-message'>{role === 'human' ? `[Human]: ${content}` : `[AI]: ${content}`}</div>
				})}
			</div>

			<div className="output-section">

			</div>

			<div className="output-prompt">
				{loading && (<>
					{renderLoader()}
					{/* <span className="output-prompt-message">{`[User]: ${prevPrompt}`}</span> */}
				</>)}
			</div>



			<div className="input-section">
				<div className="input-container">
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
				</div>

				<div className="send-button-container">
					<button disabled={!prompt || loading} className="send-button" onClick={sendQuery}>Send away</button>
				</div>
			</div>


		</div>

		</>

	);
};

export default ChatUp;
