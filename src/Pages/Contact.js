import React, { useRef, useState } from "react";
import Navigation from "../Components/Navigation";
import Profile from "../Components/Profile";
import Title from "../Components/Title";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const isEmail = () => {
    let mail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";
      return false;
    }
  };

  const failMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = "Merci de remplir correctement les champs requis *";
    formMess.style.opacity = "1";
    formMess.style.background = "rgb(253,87,87)";
    document.getElementById("name").classList.add("error");
    document.getElementById("email").classList.add("error");
    document.getElementById("message").classList.add("error");
  };

  const successMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML =
      "Message envoyé ! Nous vous recontacterons dès que possible.";
    formMess.style.background = "green";
    formMess.style.opacity = "1";

    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("message").classList.remove("error");
    setTimeout(() => {
      formMess.style.opacity = "0";
    }, 8000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      emailjs
        .sendForm(
          "service_9dzlt0a",
          "template_dpmjrgd",
          form.current,
          "user_kdm4WVNjCZi7v7OfJKJAT"
        )
        .then((res) => {
          console.log(res.text);
          successMessage();
          setName("");
          setCompany("");
          setPhone("");
          setEmail("");
          setMessage("");
        })
        .catch((err) =>
          console.log(err.text)(
            (document.querySelector(".form-message").innerHTML =
              "Une erreur s'est produite, veuillez réessayer.")
          )
        );
    } else {
      failMessage();
    }
  };

  return (
    <div className="main-container">
      <Navigation />
      <Profile />
      <main>
        <Title span="Me" after="Contacter" />
        <form className="contact-form" ref={form} autoComplete="off">
          <div className="form-content">
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="nom *"
              value={name}
              autoComplete="off"
            />
            <input
              type="text"
              id="company"
              name="company"
              onChange={(e) => setCompany(e.target.value)}
              placeholder="société"
              value={company}
            />
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="téléphone"
              value={phone}
            />
            <div className="email-content">
              <label id="not-mail">Email non valide</label>
              <input
                type="mail"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email *"
                value={email}
                autoComplete="off"
              />
            </div>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message *"
              value={message}
            />
          </div>
          <input
            className="button"
            type="button"
            value="Envoyer"
            onClick={handleSubmit}
          />
          <div className="form-message"></div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
