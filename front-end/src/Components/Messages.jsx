import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/message'); // Replace with your backend endpoint
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/message/${id}`); // Replace with your backend endpoint
        setMessages(messages.filter(message => message.id !== id));
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        {messages.map((message) => (
          <div className="col-md-4 mb-4" key={message.id}>
            <div className="card" style={{ backgroundColor: '#f8f9fa', border: '1px solid #dee2e6' }}>
              <div className="card-body">
                <h5 className="card-title">Nom & Prénom: {message.firstname} {message.lastname}</h5>
                <h5>Numéro de téléphone: {message.phone}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Email: {message.email}</h6>
                <p className="card-text">Message: {message.message}</p>
                <button 
                  className="btn btn-danger" 
                  onClick={() => handleDelete(message.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
