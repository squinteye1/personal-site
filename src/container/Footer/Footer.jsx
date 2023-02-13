import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

   const [error, setError] = useState({
     name: "",
     email: "",
     message: "",
   });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

        let isError = false;
        const errors = {
          name: "",
          email: "",
          message: "",
        };

        if (!username) {
          isError = true;
          errors.name = "Name is required";
        }

        if (!email) {
          isError = true;
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          isError = true;
          errors.email = "Email is invalid";
        }

        if (!message) {
          isError = true;
          errors.message = "Message is required";
        }

        setError(errors);

        if (isError) {
          setLoading(false);
          return;
        }

        setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Get in touch</h2>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          {error.name && (
            <p className="error" style={{ color: "#ff6601" }}>
              {error.name}
            </p>
          )}
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          {error.email && (
            <p className="error" style={{ color: "#ff6601" }}>
              {error.email}
            </p>
          )}
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          {error.message && (
            <p className="error" style={{ color: "#ff6601" }}>
              {error.message}
            </p>
          )}
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};
//export default Footer;

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
