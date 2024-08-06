import React from 'react'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import './Contact.css'

const Contact = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Wird gesendet...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7d04e4b6-531a-47c9-bcad-05f5a91cf25c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Formular erfolgreich abgeschickt");
        event.target.reset();
      } else {
        console.log("Fehler", data);
        setResult(data.message);
      }
    };
  
    return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Kontaktiere uns!<img src={msg_icon} alt="" /></h3>
        <p>Ansonsten fülle das Formular aus.</p>
        <ul>
            <li><img src={mail_icon} alt="" />nilsbrockelmann@gmx.de</li>
            <li><img src={phone_icon} alt="" />Telefonnummer</li>
            <li><img src={location_icon} alt="" />Adresse</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name='name' placeholder='Namen eintragen' required/>
            <label>Telefonnummer</label>
            <input type="tel" name='phone' placeholder='Telefonnummer eintragen' required/>
            <label>Nachricht</label>
            <textarea name="message" rows="6" placeholder='Nachricht verfassen' required></textarea>
            <button type='submit' className='btn dark-btn'>Abschicken <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
