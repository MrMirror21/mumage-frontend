import React, {useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './MailSending.css';

function MailSending() {
    const [state, handleSubmit] = useForm("xwkdzzrk");
    useEffect(() => {
      if (state.succeeded) {
          alert("Thanks for your opinion!");
      }
    }, [state.succeeded]); 

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="name-label">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
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
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="validation-error"
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    );
}

export default MailSending;