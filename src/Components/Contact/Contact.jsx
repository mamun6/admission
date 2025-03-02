import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c597cb8f-173a-423a-90ca-8a5545035640");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
       <div className="contact-col">
        <h3>Send us a message <img src={assets.msg_icon} alt="" /> </h3>
        <p>Feel free to reach out through 
            contact form or find our contact information below.
             Your feedback, questions and suggestion are important 
             to us as we strive to provide exceptional service to 
             our univeristy community</p>
             <ul>
                <li> <img src={assets.mail_icon} alt="" /> m-teach@gmail.com</li>
                <li> <img src={assets.phone_icon} alt="" /> +8801648927288</li>
                <li> <img src={assets.location_icon} alt="" /> Banani,Dhaka</li>
             </ul>
       </div>
       <div className="contact-col">
       <form onSubmit={onSubmit} >
           <label>Your Name</label>
           <input type="text" name='name' placeholder='Enter Your Name' required />
           <label>Phone Number</label>
           <input type="text" name='name' placeholder='Enter Your Mobile' required />
           <label> Write your message here </label>
           <textarea name="message" rows="10" placeholder='Enter your message' required ></textarea>
            <button type='submit' className='btn dark-btn' > Submit now </button>
        </form>
         <span>{result}</span>
       </div>
      
    </div>
  )
}

export default Contact
