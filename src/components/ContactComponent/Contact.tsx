import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import LottieAnimation from "./LottieAnimation";
import ReCAPTCHA from "react-google-recaptcha";
import AnimationJson from "./lottie-web/mail-animation.json";
import "../../styles/contact-style.css";

export const ContactUs = () => {
  const form = React.createRef<HTMLFormElement>();
  const [captVal, setCaptVal] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captVal) {
      console.log("reCAPTCHA verification failed");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_nm52xhq",
        "template_ymulrnh",
        form.current as HTMLFormElement,
        "nBfZtl55pbf0eir-4"
      );

      form.current?.reset();
      console.log(result.text);
      console.log("Message successfully sent");
    } catch (error) {
      console.error(error);
      console.log("Message did not send");
    }
  };

  return (
    <div id="contact" className="ContactForm">
      <div className="Animation">
        <h2>Let's discuss your Project</h2>
        <LottieAnimation animationData={AnimationJson} />
      </div>
      <div className="ContactUs">
        <h1 className="title text-center mb-4">Talk to Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            placeholder="Name..."
            required
            className="name"
            type="text"
            name="user_name"
          />
          <label>Email</label>
          <input
            placeholder="Email..."
            required
            className="email"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            placeholder="Message..."
            required
            className="area"
            name="message"
          />
          <ReCAPTCHA
            sitekey="6Lex3U0pAAAAAPigCGy80GZpLUf2zrPdqE-LNKSC"
            onChange={(val: string | null) => setCaptVal(val)}
          />
          <input
            className="form-submit"
            disabled={!captVal}
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};
