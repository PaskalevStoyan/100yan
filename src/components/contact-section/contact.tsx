import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const Contact = () => {
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [disableButton, setDisableButton] = React.useState(false);

  const formRef = React.useRef(null);

  const sendEmail = (event: any) => {
    event.preventDefault();

    const findEmailForm = document.querySelector(
      ".contact-form-input[name=email]"
    );
    const isEmailValid = validateEmail(form.email) && form.email !== "";

    if (!isEmailValid) {
      findEmailForm?.classList.add("error");
    } else {
      const findAllInputs = document.querySelectorAll(".contact-form-input");
      const findTextArea = document.querySelector(".contact-form-textarea");
      const findContactFormContainer = document.querySelector(".contact-form");

      findEmailForm?.classList.remove("error");
      findContactFormContainer?.classList.add("show-overlay");

      setDisableButton(true);

      setTimeout(() => {
        emailjs
        .sendForm(
          "service_huk6p4f",
          "template_45j3g2s",
          formRef.current as any,
          {
            publicKey: "H68tqnwTMPOS01nMu",
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");

            setForm({
              fullName: "",
              email: "",
              subject: "",
              message: "",
            });

            findTextArea?.classList.remove("focus");

            findAllInputs.forEach((input) => {
              input.classList.remove("focus");
            });
            setDisableButton(false);
            findContactFormContainer?.classList.remove("show-overlay");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      }, 2000);
    }
  };

  const handleFormChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "email") {
      target?.classList.remove("error");
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onFocus = (event: any) => {
    const target = event.target;

    target.classList.add("focus");
  };

  const onBlur = (event: any) => {
    const target = event.target;

    if (target.value === "") {
      target.classList.remove("focus");
    }
  };

  return (
    <div id="ContactMe" className="contact-form-container">
      <div className="contact-form-info">
        <div className="contact-form-text">
          <h1 className="contact-form-title">
            Let's <span className="highlight-text">connect</span>.
          </h1>
          <h1 className="contact-form-title">
            Tell me about your <span className="highlight-text">project</span>.
          </h1>
          <p className="contact-form-paragraph">
            Let's create something together 🤝
          </p>
        </div>
        <span className="contact-form-logo"></span>
        <div className="contact-form-social">
          <span className="linked-icon"></span>
          <span className="github-icon"></span>
        </div>
      </div>

      <div className="contact-form">
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="floating-label-container">
            <input
              required
              value={form.fullName}
              onChange={handleFormChange}
              onFocus={onFocus}
              onBlur={onBlur}
              type="text"
              name="fullName"
              id="full-name"
              className="contact-form-input"
            />
            <label htmlFor="full-name" className="label contact-form-label">
              Full Name
            </label>
          </div>
          <div className="floating-label-container">
            <input
              required
              value={form.email}
              onChange={handleFormChange}
              onFocus={onFocus}
              onBlur={onBlur}
              type="text"
              name="email"
              id="email"
              className="contact-form-input"
            />
            <label htmlFor="email" className="label contact-form-label">
              Your Email
            </label>
          </div>
          <div className="floating-label-container">
            <input
              required
              value={form.subject}
              onChange={handleFormChange}
              onFocus={onFocus}
              onBlur={onBlur}
              type="text"
              name="subject"
              id="subject"
              className="contact-form-input"
            />
            <label htmlFor="subject" className="label contact-form-label">
              Subject
            </label>
          </div>
          <div className="floating-label-container">
            <textarea
              required
              value={form.message}
              onChange={handleFormChange}
              onFocus={onFocus}
              onBlur={onBlur}
              name="message"
              id="message"
              className="contact-form-textarea"
            />
            <label htmlFor="message" className="label contact-form-label">
              Write me a message
            </label>
          </div>
          <button disabled={disableButton} className="form-button" type="submit">
            Send Message
          </button>
        </form>
        <span className="form-overlay">
          <div className="loading">
            <span>S</span>
            <span>E</span>
            <span>N</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span> </span>
            <span>E</span>
            <span>M</span>
            <span>A</span>
            <span>I</span>
            <span>L</span>
            <span>.</span>
            <span>.</span>
          </div>
          <span className="loader"></span>
        </span>
      </div>
    </div>
  );
};
