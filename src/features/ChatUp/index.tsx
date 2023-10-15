import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { MainContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './ChatUp.css';
import { useDevice } from '../../hooks/useDevice';
import { useSwipeable } from 'react-swipeable';
import Button from '../../components/Button';
import Fade from '../Fade'

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
	const [, setPrevPrompt] = useState('');
	const chatupHeadRef = useRef<HTMLDivElement | null>(null);
	const chatupChatRef = useRef<HTMLDivElement | null>(null);
	const chatupInputRef = useRef<HTMLDivElement | null>(null);
	const outputSectionRef = useRef<HTMLDivElement | null>(null);
	const chatupInputContainerRef = useRef<HTMLDivElement | null>(null);
	const startToChatRef = useRef<HTMLDivElement | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [outputDynamicHeight, setOutputDynamicHeight] = useState<'auto' | '100%' | 'unset'>('unset');
	const [view, setView] = useState<'main' | 'side'>('main');
	const [chatHeight, setChatHeight] = useState(0);
	const { isMobile } = useDevice();
	const navigate = useNavigate()

	const handlers = useSwipeable({
		onSwipedLeft: () => {
			setView('side');
		},
		onSwipedRight: () => {
			setView('main');
		},
		trackMouse: true
	});

	const getChatHeight = () => {
		let headerHeight = 0;
		if (refs) {
			const { HeaderRef } = refs;
			headerHeight = HeaderRef.current ? HeaderRef.current.offsetHeight : 0;
		}
		const chatupHeadHeight = chatupHeadRef.current ? chatupHeadRef.current.offsetHeight : 0;
		const viewportHeight = window.innerHeight;
		const calculatedChatHeight = viewportHeight - chatupHeadHeight - headerHeight;
		setChatHeight(calculatedChatHeight);
	}

	useEffect(() => {
		getChatHeight();
	}, [refs, isMobile]);

	useEffect(() => {
		getDynamicOutputHeight()
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

	const handleClearHistory = () => {
		// Open the modal
		setIsModalOpen(true);
	};

	const handleConfirmClearHistory = () => {
		// Clear the history if confirmed
		setHistory([]);
		localStorage.removeItem('history');
		// Close the modal
		setIsModalOpen(false);
	};

	const handleCancelClearHistory = () => {
		// Close the modal
		setIsModalOpen(false);
	};

	const getDynamicOutputHeight = () => {
		let inputContainerHeight = 0;
		let outputSectionHeight = startToChatRef.current?.offsetHeight || 0;

		if (chatupInputContainerRef.current) {
			inputContainerHeight = chatupInputContainerRef.current.offsetHeight;
		}

		if (outputSectionRef.current) {
			const messages = outputSectionRef.current.querySelectorAll('.output-message');
			messages.forEach((message, index) => {
				outputSectionHeight += (message as HTMLElement).offsetHeight;
			});
		}

		if (inputContainerHeight && outputSectionHeight) {
			if (outputSectionRef.current) {
				outputSectionHeight > (chatHeight - inputContainerHeight) ? setOutputDynamicHeight('auto') : setOutputDynamicHeight('100%');
			}
		}
	}

	useEffect(() => {
		getDynamicOutputHeight()
	}, [chatHeight, history])

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
				? 'http://localhost:4000/chat-local'
				: `${process.env.REACT_APP_API_ENDPOINT}/chat-local`;

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
		<div style={{ marginTop: '2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<div className="dots">
				<div className="dot dot1"></div>
				<div className="dot dot2"></div>
				<div className="dot"></div>
			</div>
		</div>
	);

	const renderHistory = (history: Message[]) => {
		return history.length === 0 ? (
			<div style={{
				boxSizing: 'border-box',
				padding: '1rem',
				width: '80%',
				maxWidth: '800px',
				background: '#fff',
				borderRadius: '1rem',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
				gap: '1rem',
				border: '2px solid #00000010'
			}} ref={startToChatRef}>
				<div>
					<h3>
						Chatting with my trained bot
					</h3>
				</div>
				<div>
					Start a conversation.
					{`${isMobile ? '⚙️ To view Options, swipe left. ' : ' '}`}
					Note: the bot might answer incorrectly or come up with funny stuff 🤡
				</div>
				<div>
					<span style={{ fontSize: '.8rem', display: 'block' }}>
						Examples:
					</span>
					<span style={{ fontSize: '.8rem', display: 'block' }}>
						"What's your email?"
					</span>
					<span style={{ fontSize: '.8rem', display: 'block' }}>
						"What's your current phone number?"
					</span>
					<span style={{ fontSize: '.8rem', display: 'block' }}>
						"What's your experience with React?"
					</span>
				</div>
				<div>
				</div>
			</div>
		) : (
			history.map(({ role, content }, index) => {
				return (
					<div key={content.slice(0, 10).trim() + `_1.${index}`} className={role === 'human' ? 'output-message human' : 'output-message ai'}>
						<div className="output-message__icon">
							{role === 'human' ? `🙋🏻‍♂️` : `🤖`}
						</div>
						<div className='output-message__content'>
							{content}
						</div>
						<div className='output-message__actions'>
							<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
						</div>
					</div>
				)
			})
		)
	}

	return (
		<>

			{isModalOpen && (
				<div className="modal">
					<Fade>
						<p>Do you confirm that you want to delete the chat history?</p>
						<div className="modal-buttons-group">
							<Button onClick={handleConfirmClearHistory} label="Delete" style={{ background: '#ff997d' }} />
							<Button onClick={handleCancelClearHistory} label="Cancel" style={{ background: '#cccccc' }} />
						</div>

					</Fade>
				</div>
			)}
			<div {...handlers} className="central-container">

				<div className={`ChatUp-container${view === 'main' ? ' open' : ''}`}>

					<div id="ChatUpHeadSection" ref={chatupHeadRef} className="head-section">

						<div className="head-logo-container">
							<Button onClick={() => navigate('/')} label="Back" />
						</div>

						<div className="head-logo-container">
							<Button onClick={handleClearHistory} label="Clear History" style={{ background: '#cccccc' }} />
						</div>

					</div>

					<div id={'ChatUp'} ref={chatupChatRef} style={{ height: `${chatHeight}px`, overflowY: 'auto' }} className="ChatUp">

						<div className="output-section" ref={outputSectionRef} style={{ height: outputDynamicHeight }}>
							{renderHistory(history)}
						</div>

						<div className="output-loading-container">
							{loading && renderLoader()}
						</div>
					</div>

					<div className="input-section" id="ChatUpInputSection" ref={chatupInputRef}>
						<div className="input-container" ref={chatupInputContainerRef}>
							<div style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
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

				</div>

				<div className={`side-panel${view === 'side' ? ' open' : ''}`}>

					<div className='SidePanelContentContainer'>

						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
							<div className='SidePanelMediaContainer' />

							<div className='SidePanelMediaDescription'>
								Antonio Guiotto, a front-end developer born in 1995, has extensive experience in React, JavaScript, and TypeScript, with a track record of delivering efficient, scalable solutions in various software engineering roles. He has contributed to web application development, project management, and collaborated with cross-functional teams to ensure high-quality deliverables. Antonio has also shared his knowledge as a Web Development Teacher, illustrating his passion for the field. His technical skills are complemented by his engagement in hobbies like calisthenics, cycling, design, and music, showcasing a well-rounded individual eager to contribute to innovative software projects.
							</div>


							<div className='SidePanelSocialContainer'>
								<div className='SidePanelSocialLink'>
									<a href="https://github.com/palloncino">Github</a>
								</div>
								<div className='SidePanelSocialLink'>
									<a href="https://www.linkedin.com/in/antonioguiotto/">Linkedin</a>
								</div>
								<div className='SidePanelSocialLink'>
									<a href="https://www.instagram.com/antonio_guiotto/">Instagram</a>
								</div>

							</div>
						</div>

					</div>


				</div>

			</div>
		</>
	);
};

export default ChatUp;
