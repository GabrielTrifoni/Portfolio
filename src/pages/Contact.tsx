import React from "react";
import "../styles/Contact.css";
import Social from "../components/Social";

const Contact: React.FC = () => {
  return (
    <>
      <div className="contact">
        <h1>Contact Me!</h1>
        <p>gabrielsoavetrifoni@gmail.com</p>
        <Social />
      </div>
    </>
  );
};

export default Contact;
