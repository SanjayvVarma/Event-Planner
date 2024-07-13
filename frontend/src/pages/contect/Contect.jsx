import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";

const Contect = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/message/send",
      {
        name,
        email,
        phone,
        subject,
        message,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPhone("")
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.log("find an big error" ,error);
        toast.error(error.response.data.message);
      });
  };


  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where, Any City, 4521</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91-999-9999999</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>sk@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1810.6288656022443!2d76.46495716281156!3d23.719912326259465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720857616314!5m2!1sen!2sin"  style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="phone"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contect