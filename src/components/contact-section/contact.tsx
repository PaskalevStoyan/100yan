import React from "react";
import "./contact.css";
import "./pyro.css";
import emailjs from "@emailjs/browser";
import { Form, getInputs, sendEmail, validateInputs } from "./contact-utils";
import { GitHubIcon } from "../../icons/github";
import { LinkedInIcon } from "../../icons/linkedin";

export const Separator = () => {
  return <div className="separator"></div>;
};

export const Contact = () => {
  const [form, setForm] = React.useState<Form>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [disableButton, setDisableButton] = React.useState(false);

  const formRef = React.useRef(null);

  const onEmailSubmit = (event: any) => {
    event.preventDefault();

    const canSendEmail = validateInputs(form);

    if (canSendEmail) {
      const { findContactFormContainer } = getInputs();

      findContactFormContainer?.classList.add("show-overlay");

      setDisableButton(true);

      setTimeout(() => {
        sendEmail(emailjs, formRef, setForm, setDisableButton);
      }, 2000);
    }
  };

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    target?.classList.remove("error");

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onFocus = (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    const target = event.target;

    target.classList.add("focus");
  };

  const onBlur = (
    event:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    const target = event.target;

    if (target.value === "") {
      target.classList.remove("focus");
    }
  };

  return (
    <div id="Contact-Me" className="contact-form-container">
      <div className="contact-form-info">
        <div className="contact-form-text">
          <h1 className="contact-form-title">
            Let's <span className="highlight-text">connect</span>.
          </h1>
          <h1 className="contact-form-title">
            Tell me about <span className="highlight-text">your project</span>.
          </h1>
          <p className="contact-form-paragraph">
            Let's build something together 🤝
          </p>
        </div>
        <div className="contact-form-social">
          <a href="https://github.com/PaskalevStoyan">
            <GitHubIcon />
          </a>
          <Separator />
          <a href="https://www.linkedin.com/in/stoyan-paskalev-b7aa261a3/">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form ref={formRef} onSubmit={onEmailSubmit}>
          <div className="floating-label-container">
            <input
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
          <button
            disabled={disableButton}
            className="form-button"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <span className="form-overlay">
          <span className="loading-text">Preparing Your Email...</span>
          <span className="loader"></span>

          <div className="text-sent-1">Thank you!</div>
          <div className="text-sent-2">
            For sharing <span className="highlight-text">your ideas</span>.
          </div>
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
          </div>

          <div className="email-error">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130.2 130.2"
            >
              <circle
                className="path circle"
                fill="none"
                stroke="#D06079"
                strokeWidth="6"
                strokeMiterlimit="10"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <line
                className="path line"
                fill="none"
                stroke="#D06079"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="34.4"
                y1="37.9"
                x2="95.8"
                y2="92.3"
              />
              <line
                className="path line"
                fill="none"
                stroke="#D06079"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                x1="95.8"
                y1="38"
                x2="34.4"
                y2="92.2"
              />
            </svg>
            <p className="email-text-error">Bummer!</p>
            <p className="email-text-error small">Something went wrong!</p>
            <p className="email-text-error small">Please try again!</p>
          </div>
        </span>
      </div>
    </div>
  );
};
