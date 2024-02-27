import Button from '../Button/Button';
import styles from './Contact.module.css'
import { TbMessageMinus } from "react-icons/tb";
import { PiPhoneFill } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";
import {useState} from 'react';
const ContactForm = () => {
  const [name, setName] = useState("Ashu");
  const [email, setEmail] = useState("Ashu001@gmail.com");
  const [text, setText] = useState("My React Project");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button icon={<TbMessageMinus fontSize="24px" />} text="VIA SUPPORT CHAT" />

          <Button 
           icon={<PiPhoneFill fontSize="24px" />} text="VIA CALL" />
        </div>
        <Button
          isOutline={true}
          icon={<TbMailFilled fontSize="24px" />} text="VIA EMAIL FORM" />

        <form 
        onSubmit={onSubmit}
        >
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type='text' name='name' />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name='text' rows="4" />
          </div>

          <div style={{
            display: "flex",
            justifyContent: "end",
          }}>
          <Button text= "SUBMIT BUTTON" />
          </div>

        </form>

            <div>{name+ " " + email+ " "+ text}</div>

      </div>
      <div className={styles.contact_image}>
        <img src="\images\Service 24_7-pana 1.svg" alt="contact_image" />
      </div>
    </section>

  );
}

export default ContactForm