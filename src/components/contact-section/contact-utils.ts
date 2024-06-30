export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateInputs = (form: any) => {
  let isValid = true;

  Object.keys(form).forEach((key) => {
    const findInput = document.querySelector(
      `.contact-form-input[name=${key}]`
    );

    if (key === "email" && !validateEmail(form[key])) {
      findInput?.classList.add("error");
      isValid = false;
    }

    if (form[key] === "") {
      if (key === "message") {
        const findInput = document.querySelector(
          `.contact-form-textarea[name=${key}]`
        );

        findInput?.classList.add("error");
      }

      findInput?.classList.add("error");

      isValid = false;
    }
  });

  return isValid;
};

export const getInputs = () => {
  const findAllInputs = document.querySelectorAll(".contact-form-input");
  const findTextArea = document.querySelector(".contact-form-textarea");
  const findContactFormContainer = document.querySelector(".contact-form");

  return { findAllInputs, findTextArea, findContactFormContainer };
};

export const sendEmail = (
  emailjs: any,
  formRef: any,
  setForm: any,
  setDisableButton: any
) => {
  emailjs
    .sendForm("service_huk6p4f", "template_45j3g2s", formRef.current as any, {
      publicKey: "H68tqnwTMPOS01nMu",
    })
    .then(
      () => {
        setForm({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });

        const { findAllInputs, findTextArea, findContactFormContainer } =
          getInputs();

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
};
