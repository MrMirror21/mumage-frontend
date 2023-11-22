import React, {useEffect, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/MailSending.css';
import '../styles/Modal.css';

const Modal= ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div id="modalContainer">
      <div id="modalContent">
        <h2>Thanks for your opinion!</h2>
        <p>Your email has been successfully sent.<br></br>Your opinion will greatly help us improve our services.</p>
        <div id="closeBtn" onClick={onClose}>Close</div>
      </div>
    </div>
  );
}

const MailSending = () => {
    const [state, handleSubmit, reset] = useForm("xwkdzzrk");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      if (state.succeeded) {
          setModalOpen(true);
          setMessage("");
          setEmail("");
          reset();
      }
    }, [state.succeeded], reset); 

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    }

    const handleDivSubmit = () => {
      document.getElementById("hiddenSubmit").click(); 
    }

    return (
        <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="email" className="name-label">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="email" className="name-label">
          Your Opinion
        </label>
        <textarea
          id="message"
          type="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="validation-error"
        />
        <input type="submit" id="hiddenSubmit" style={{ display: 'none' }} />
        <div 
          onClick={handleDivSubmit}
          role="button"
          tabIndex={0}
          id="submitBtn"
        >
          Submit
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </form>
    );
}

export default MailSending;