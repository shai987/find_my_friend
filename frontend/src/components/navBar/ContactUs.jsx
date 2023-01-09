import { useState } from "react";
import '../../assets/css/ContactUs.css';
import dog_phone from '../../assets/images/dog_phone.jpg';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('שלח טופס');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('שולח...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value
    }
  }
  return (
    <div className="contactUs" dir="rtl">
      <div className="baner"></div>
      <h1>צור קשר</h1>
      <div className="line"></div>
      <p>מוזמנים לפנות אלינו כדי לשתף, לחוות דעה, להעלות בעיות או בכל עניין אחר</p>
      <section className="contact_wrapper">
        <div className="form_contact"> 
          <form onSubmit={onSubmit}>
            <input type="text" id="name" placeholder="שם" required />
            <select value="">
              <option value="option1">נושא הפנייה</option>
              <option value="option2">בעיה</option>
              <option value="option3">הערה לשיפור</option>
              <option value="option4">אחר</option>
            </select>
            <input type="email" placeholder="אימייל" id="email" required />
            <textarea cols="30" rows="10" placeholder="תוכן ההודעה" id="message" required />
            <button type="submit">
              {formStatus}
            </button>
          </form>
        </div>
        <div className="dog_image">
          <img width="500" height="300" src={dog_phone} alt="dog_phone" />
        </div>
      </section> 
    </div>
  )
}
export default ContactForm;
