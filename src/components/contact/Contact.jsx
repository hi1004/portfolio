import React, { useRef } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import emailjs from '@emailjs/browser';

import {
  ContactContainer,
  ContactOptions,
  ContactSection,
  Option,
  IconBox,
  Form,
  SendButton,
  SubmitButton,
  UserInput,
  MessageInput,
} from './ContactStyle';

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0fyp9n9',
        'template_rsuqcnt',
        form.current,
        'GM7cfOqIebhEbbsha',
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <ContactSection id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <ContactContainer>
        <ContactOptions>
          <Option>
            <IconBox>
              <EmailOutlinedIcon />
            </IconBox>
            <h4>Email</h4>
            <h5>byorusia@gmail.com</h5>
            <SendButton href="mailto:byorusia@gmail.com" target="_blank">
              send a message
            </SendButton>
          </Option>
        </ContactOptions>

        <Form
          ref={form}
          onSubmit={sendEmail}
          component="form"
          autoComplete="off"
        >
          <UserInput
            type="text"
            name="name"
            placeholder="Your Full Name"
            variant="outlined"
            required
          />

          <UserInput
            type="email"
            name="email"
            placeholder="Your Email"
            variant="outlined"
            required
          />
          <MessageInput
            name="message"
            multiline
            rows={5}
            placeholder="Your Message"
            variant="outlined"
            required
          />
          <SubmitButton type="submit" variant="contained" size="large">
            Send Message
          </SubmitButton>
        </Form>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
