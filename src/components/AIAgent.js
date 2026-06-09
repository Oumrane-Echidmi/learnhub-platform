import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const AIAgent = () => {
    const { isDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'agent', text: 'Hello! I am your LearnHub Professional Mentor. How can I assist your career growth today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            let response = "That's a great question. As your mentor, I recommend focusing on building a strong portfolio while mastering these concepts.";
            
            const lowerInput = inputValue.toLowerCase();
            if (lowerInput.includes('course') || lowerInput.includes('learn')) {
                response = "We have several high-impact courses in our catalog. I'd suggest looking at our Full Stack Bootcamp or the UI/UX Design Masterclass to accelerate your career.";
            } else if (lowerInput.includes('career') || lowerInput.includes('job')) {
                response = "To advance your career, it's vital to stay ahead of industry trends. Continuous learning via platforms like LearnHub is key to remaining competitive.";
            } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
                response = "Our courses are priced to be accessible while providing premium value. Check our Pricing page for various plans that might fit your budget.";
            }

            setMessages(prev => [...prev, { role: 'agent', text: response }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="ai-agent-container" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1050 }}>
            {/* Chat Window */}
            {isOpen && (
                <div className={`card shadow-lg border-0 mb-3 transition-all ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`} 
                     style={{ width: '350px', height: '500px', display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Header */}
                    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center py-3 border-0">
                        <div className="d-flex align-items-center">
                            <div className="bg-white rounded-circle p-1 me-2 d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#2563EB">
                                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M9 13a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2m6 0a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2z" />
                                </svg>
                            </div>
                            <h6 className="mb-0 fw-bold">Professional Mentor</h6>
                        </div>
                        <button className="btn-close btn-close-white" onClick={() => setIsOpen(false)}></button>
                    </div>

                    {/* Body */}
                    <div className="card-body overflow-auto p-3 d-flex flex-column gap-3" style={{ flex: 1 }}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`d-flex ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                                <div className={`p-3 rounded-4 shadow-sm small ${
                                    msg.role === 'user' 
                                    ? 'bg-primary text-white' 
                                    : (isDarkMode ? 'bg-secondary text-white' : 'bg-light text-dark')
                                }`} style={{ maxWidth: '85%' }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="d-flex justify-content-start">
                                <div className={`p-2 px-3 rounded-pill small ${isDarkMode ? 'bg-secondary' : 'bg-light'}`}>
                                    <span className="typing-dot">.</span><span className="typing-dot">.</span><span className="typing-dot">.</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Footer */}
                    <div className="card-footer bg-transparent border-0 p-3">
                        <form onSubmit={handleSend} className="input-group">
                            <input 
                                type="text" 
                                className={`form-control border-0 ${isDarkMode ? 'bg-secondary text-white' : 'bg-light'}`} 
                                placeholder="Ask a question..." 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button className="btn btn-primary px-3" type="submit">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.493-7.493Z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center transition-all p-0"
                style={{ width: '60px', height: '60px' }}
            >
                {isOpen ? (
                    <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                ) : (
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M9 13a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2m6 0a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default AIAgent;