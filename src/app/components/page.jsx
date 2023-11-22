'use client'
import React, { useState, useEffect, useRef } from 'react';

const WebSocketComponent = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:3001/my-websocket-route');
    setSocket(newSocket);

    newSocket.onopen = () => {
      console.log('WebSocket Connected');
    };

    newSocket.onmessage = async (event) => {
      if (event.data instanceof Blob) {
        const text = await event.data.text();
        setMessages((prevMessages) => [...prevMessages, text]);
      } else {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      }
    };

    newSocket.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    newSocket.onclose = () => {
      console.log('WebSocket Disconnected');
    };

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && message) {
      socket.send(message);
      setMessage('');
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h2 className="text-lg text-pink-600 font-semibold">WebSocket Chat</h2>
      <div className="mt-4 bg-pink-100 p-4 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="text-pink-800 mb-2">{msg}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleEnterKey}
          className="flex-grow p-2 mr-2 border rounded focus:outline-none focus:border-pink-300"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default WebSocketComponent;
