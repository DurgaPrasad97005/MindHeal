import React, { useState, useEffect, useRef } from "react";
import "./ChatBody.css"
import "./ChatPrompt.css"
import GetChatResponse from "./GetChatResponse";


export default function ChatBody() {

    const [prompt, setPrompt] = useState('');
    const [conversation, setConversation] = useState([{content: "Welcome! I'm HealChat, your AI assistant and your mental health companion.", flag:"response"}]);
    const chatContainerRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const chatResponse = await GetChatResponse(prompt);

        setConversation((prevConversation) => [...prevConversation, {content: prompt, flag: "prompt"}]);
        setConversation((prevConversation) => [...prevConversation, {content: chatResponse, flag: "response"}]);
        setPrompt('');
    };

  useEffect(() => {
    const scrollHeight = chatContainerRef.current.scrollHeight;
    chatContainerRef.current.scrollTop = scrollHeight;
  }, [conversation]);


    return (
        <div className="chat-body-container">
            <div ref={chatContainerRef} className="chat-wrapper">
                <div className="chat-body">

                    {conversation.map((item, index) => (
                        <p key={index+1} className={item.flag}>{item.content}</p>
                    ))}

                </div>
            </div>
            
            <div className="chat-prompt">
                <input className="query" 
                    type="text" 
                    placeholder="Message" 
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)} 
                />
                
                <button className="chat-btn" type="submit" onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}