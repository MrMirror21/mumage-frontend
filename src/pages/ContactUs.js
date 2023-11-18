import React from 'react';
import Icon from '../components/Icon';
import MailSending from '../components/MailSending';
import Dropdown from '../components/Dropdown';


const ContactUs = () => {
  return (
    <>
      <Icon/><Dropdown name="ContactUs"/>
      <MailSending/>
    </>
  );
}

export default ContactUs;