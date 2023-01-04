import { useState } from "react";
import '../../assets/css/ContactUs.css';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('שלח טופס')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('שולח...')
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value
    }
  }
  return (

    <div dir="rtl">
      <div className="baner"></div>
      <h1>צור קשר</h1>
      <div className="line"></div>
      <p>מוזמנים לפנות אלינו כדי לשתף, לחוות דעה, להעלות בעיות או בכל עניין אחר</p>
      <section className="wrapper">
        <div className="form_contact">
          <form onSubmit={onSubmit}>
            <input className="form-control" type="text" id="name" placeholder="שם" required />
            <select>
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
          <img width="500" height="300" src="data:image/jpeg;base64,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" alt="dog_phone" />
        </div>
      </section>
    </div>
  )
}
export default ContactForm;
