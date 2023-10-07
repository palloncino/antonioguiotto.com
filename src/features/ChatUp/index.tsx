import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { MainContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './ChatUp.css';

type Message = { role: 'human' | 'ai', content: string };

const ChatUp = () => {
	const refs = useContext(MainContext);
	const [history, setHistory] = useState<Message[]>(() => {
		const savedHistory = localStorage.getItem('history');
		return savedHistory ? JSON.parse(savedHistory) : [];
	});
	const [currentResponse, setCurrentResponse] = useState('');
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState('');
	const [prevPrompt, setPrevPrompt] = useState('');
	const chatupHeadRef = useRef<HTMLDivElement | null>(null);
	const chatupChatRef = useRef<HTMLDivElement | null>(null);
	const chatupInputRef = useRef<HTMLDivElement | null>(null);
	const [chatHeight, setChatHeight] = useState(0);
	const navigate = useNavigate()

	useEffect(() => {
		let headerHeight = 0;
		if (refs) {
			const { HeaderRef, FeatureRef } = refs;
			headerHeight = HeaderRef.current ? HeaderRef.current.offsetHeight : 0;
		}
		const chatupHeadHeight = chatupHeadRef.current ? chatupHeadRef.current.offsetHeight : 0;
		const chatupInputHeight = chatupInputRef.current ? chatupInputRef.current.offsetHeight : 0;
		const viewportHeight = window.innerHeight;
		const calculatedChatHeight = viewportHeight - chatupHeadHeight - chatupInputHeight - headerHeight;

		setChatHeight(calculatedChatHeight);
	}, [refs]);

	useEffect(() => {
		setTimeout(() => {
			if (chatupChatRef && chatupChatRef.current) {
				chatupChatRef.current.scrollTo({
					top: chatupChatRef.current.scrollHeight,
					behavior: 'smooth'
				});
			}
		}, 0);
	}, [chatupChatRef, currentResponse, history]);

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

	const renderHistory = (history: Message[]) => {
		return history.length === 0 ? (
			<div style={{padding: '1rem'}}>
				Start your conversation
			</div>
		) : (
			history.map(({ role, content }, index) => {
				return <div key={content.slice(0, 10).trim() + `_1.${index}`} className={role === 'human' ? 'output-message human' : 'output-message ai'}>{role === 'human' ? `🙋🏻‍♂️: ${content}` : `🤖: ${content}`}</div>
			})
		)
	}

	return (
		<>

			<div className="central-container">

				<div className='ChatUp-container'>

					<div id="ChatUpHeadSection" ref={chatupHeadRef} className="head-section">

						<div className="head-logo-container" onClick={() => navigate('/')}>
							<svg style={{ marginRight: '8px' }} className="send-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
								<path d="M0 12l12 9v-5h12v-8h-12v-5l-12 9z" />
							</svg>
							Back to Explore
						</div>

						<div className="chat-introduction-container">
							Meet Your Personal Assistant: An Interactive Chatbot Designed to Address Queries About Antonio Guiotto's Professional Journey, Life Experiences, and Personal Preferences.
						</div>

					</div>

					<div id={'ChatUp'} ref={chatupChatRef} style={{ height: `${chatHeight}px`, overflowY: 'auto' }} className="ChatUp">

						<div className="output-section">
							{renderHistory(history)}
						</div>

						<div className="output-loading-container">
							{loading && renderLoader()}
						</div>
					</div>

					<div className="input-section" id="ChatUpInputSection" ref={chatupInputRef}>
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
							<div className="send-button-container">
								<button disabled={!prompt || loading} className="send-button" onClick={sendQuery}>
									<svg className="send-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
										<path d="M24 12l-12-9v5h-12v8h12v5l12-9z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="side-panel">

					<h3>⚙️ Options</h3>

					<div className="clear-history-button-container">
						<button className="clear-history-button" onClick={clearHistory}>Clear History</button>
					</div>

					<div>
						<h3>👨🏻‍🔧 Todos</h3>
						<ul>
							<li>
								Prompt History, with tags to jump back on previous question
							</li>
							<li>
								React spring for animations
							</li>
							<li>
								Silent error on lambda timeout
							</li>
							<li>
								Chat should be able to answer about Antonio with confidence
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>

	);
};

export default ChatUp;
