import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const form = React.createRef<HTMLFormElement>();
  const [captVal, setCaptVal] = useState<string | null>(null);
  const [email, setEmail] = useState<boolean>(false);
  const restrictedEmails = ["konstantin.vchkov@gmail.com", "kvckov@yahoo.com"];
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captVal) {
      console.log("reCAPTCHA verification failed");
      return;
    }
    const emailInput = form.current?.querySelector(
      'input[name="user_email"]'
    ) as HTMLInputElement | null;
    if (!emailInput) {
      console.log("Email input not found");
      return;
    }

    const email = emailInput.value;
    if (restrictedEmails.includes(email)) {
      console.log("Cannot send emails from your own address");
      return setEmail(true);
    }
    try {
      const result = await emailjs.sendForm(
        "service_nm52xhq",
        "template_ymulrnh",
        form.current as HTMLFormElement,
        "nBfZtl55pbf0eir-4"
      );

      form.current?.reset();
      return result.text;
    } catch (error) {
      console.error(error);
      console.log("Message did not send");
    }
  };
  return {
    setCaptVal,
    email,
    sendEmail,
    form,
    captVal
  };
};

export default useContactForm;
