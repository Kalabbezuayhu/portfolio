import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import '../assets/styles/Contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleSend = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    setErrors({
      name: trimmedName === '',
      email: trimmedEmail === '',
      message: trimmedMessage === '',
    });

    if (!trimmedName || !trimmedEmail || !trimmedMessage) return;

    try {
      const res = await fetch('https://formspree.io/f/mrbopobb', { // <-- replace with your Formspree URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send. Try again later.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    }
  };

  return (
    <div className="contact-page" id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Have a project or question? Send me a message below!</p>

        <Box component="form" className="contact-form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            helperText={errors.name ? 'Please enter your name' : ''}
            variant="outlined"
            className="input-field"
          />

          <TextField
            fullWidth
            label="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            helperText={errors.email ? 'Please enter your email or phone' : ''}
            variant="outlined"
            className="input-field"
          />

          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={errors.message}
            helperText={errors.message ? 'Please enter your message' : ''}
            multiline
            rows={6}
            variant="outlined"
            className="input-field"
          />

          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSend}
            className="send-btn"
          >
            Send Message
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
