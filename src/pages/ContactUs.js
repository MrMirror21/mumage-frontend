import React from 'react';
import Icon from '../components/Icon';
import MailSending from '../components/MailSending';
import Dropdown from '../components/Dropdown';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ContactUs = () => {
  return (
    <>
      <IconContainer><Link to='/'><Icon/></Link></IconContainer><Dropdown name="ContactUs"/>
      <MailSending/>
    </>
  );
}

export default ContactUs;

const IconContainer = styled.div`
  background: #ffffff;
`;