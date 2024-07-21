export type Form = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateInputs = (form: Form) => {
  let isValid: boolean = true;

  Object.keys(form).forEach((key) => {
    const findInput: Element | null = document.querySelector(
      `.contact-form-input[name=${key}]`
    );

    if (key === "email" && !validateEmail(form[key])) {
      findInput?.classList.add("error");
      isValid = false;
    }

    const isTextWhiteSpaceOnly: boolean = form[key].replace(/\s/g, "") === "";

    if (form[key] === "" || isTextWhiteSpaceOnly) {
      if (key === "message") {
        const findInput: Element | null = document.querySelector(
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
  formRef: React.MutableRefObject<null>,
  setForm: React.Dispatch<React.SetStateAction<Form>>,
  setDisableButton: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { findAllInputs, findTextArea, findContactFormContainer } = getInputs();

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

        findTextArea?.classList.remove("focus");

        findAllInputs.forEach((input) => {
          input.classList.remove("focus");
        });
        setDisableButton(false);
        findContactFormContainer?.classList.add("email-success");

        setTimeout(() => {
          findContactFormContainer?.classList.remove("email-success");
          findContactFormContainer?.classList.remove("show-overlay");
        }, 6000);
      },
      (error) => {
        findContactFormContainer?.classList.add("show-email-error");

        setTimeout(() => {
          findContactFormContainer?.classList.remove("show-email-error");
          findContactFormContainer?.classList.remove("show-overlay");
        }, 3000);
      }
    );
};
