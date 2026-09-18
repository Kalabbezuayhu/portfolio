import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import '../assets/styles/Contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSend = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const newErrors = {
      name: trimmedName === '',
      email: trimmedEmail === '',
      message: trimmedMessage === '',
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    // Formspree validates the 'email' field format strictly.
    // If the visitor provided a phone number or non-email text, format payload accordingly.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(trimmedEmail);

    const payload: Record<string, string> = {
      name: trimmedName,
      message: trimmedMessage,
    };

    if (isEmail) {
      payload.email = trimmedEmail;
      payload._replyto = trimmedEmail;
    } else {
      payload.email = 'portfolio-visitor@kaleab.dev';
      payload.contact_number = trimmedEmail;
      payload.reply_to = trimmedEmail;
    }

    try {
      const res = await fetch('https://formspree.io/f/mrbopobb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon!',
        });
        setName('');
        setEmail('');
        setMessage('');
        setErrors({ name: false, email: false, message: false });
      } else {
        const errorMsg =
          data?.errors?.map((err: any) => err.message).join(', ') ||
          data?.error ||
          'Failed to send message. Please email me directly at kaleabbezuayhu@gmail.com.';
        setStatus({
          type: 'error',
          message: errorMsg,
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Network error while sending. Please email me directly at kaleabbezuayhu@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page" id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Have a project or question? Send me a message below!</p>

        <div className="contact-email-card">
          <a href="mailto:kaleabbezuayhu@gmail.com" className="contact-email-link">
            <EmailIcon className="email-icon" />
            <span>kaleabbezuayhu@gmail.com</span>
          </a>
        </div>

        <Box component="form" className="contact-form" onSubmit={handleSend} noValidate autoComplete="off">
          {status && (
            <Alert
              severity={status.type}
              onClose={() => setStatus(null)}
              sx={{
                textAlign: 'left',
                borderRadius: '8px',
                fontSize: '0.92rem',
              }}
            >
              {status.message}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
            }}
            error={errors.name}
            helperText={errors.name ? 'Please enter your name' : ''}
            variant="outlined"
            className="input-field"
            disabled={isSubmitting}
          />

          <TextField
            fullWidth
            label="Email or Phone"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: false }));
            }}
            error={errors.email}
            helperText={errors.email ? 'Please enter your email or phone' : ''}
            variant="outlined"
            className="input-field"
            disabled={isSubmitting}
          />

          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors((prev) => ({ ...prev, message: false }));
            }}
            error={errors.message}
            helperText={errors.message ? 'Please enter your message' : ''}
            multiline
            rows={6}
            variant="outlined"
            className="input-field"
            disabled={isSubmitting}
          />

          <Button
            type="submit"
            variant="contained"
            endIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
            disabled={isSubmitting}
            className="send-btn"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>

          {status?.type === 'error' && (
            <div style={{ marginTop: '8px', textAlign: 'center' }}>
              <a
                href={`mailto:kaleabbezuayhu@gmail.com?subject=Message from ${encodeURIComponent(
                  name || 'Portfolio Visitor'
                )}&body=${encodeURIComponent(message + (email ? '\n\nContact: ' + email : ''))}`}
                style={{
                  color: '#5000ca',
                  fontSize: '0.9rem',
                  textDecoration: 'underline',
                  fontWeight: 600,
                }}
              >
                Click here to send directly via your email app
              </a>
            </div>
          )}
        </Box>
      </div>
    </div>
  );
};

export default Contact;
