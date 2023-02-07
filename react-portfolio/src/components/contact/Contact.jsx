import React from 'react'
import './contact.css'
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <AiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>ts.dimitrov93@gmail.com</h5>
              <a href="mailto:ts.dimitrov93@gmail.com" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>dimitrovtsvetomir</h5>
              <a href="https://m.me/dimitrovtsvetomir" target='_blank'>Send a message</a>
            </article>

            <article className="contact__option">
              <AiFillLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>dimitrovtsvetomir</h5>
              <a href="https://urn:li:person:921678238" target='_blank'>Send a message</a>
            </article>
        </div>

        <form action="">
            <input type="text" name='name' placeholder='Your Full name' required />
            <input type="text" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact