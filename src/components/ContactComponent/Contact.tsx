import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/contact-style.css";
import AnimationJson from "./lottie-web/mail-animation.json";
import LottieAnimation from "./LottieAnimation";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactUs = () => {
  const form = React.createRef<HTMLFormElement>();
  const [captVal,setCaptVal] = useState(null)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_nm52xhq",
          "template_ymulrnh",
          form.current,
          "nBfZtl55pbf0eir-4"
        )
        .then(
          (result) => {
            (form.current as HTMLFormElement).reset();
            console.log(result.text);
            console.log("message successfuly sent");
          },
          (error) => {
            console.log(error.text);
            console.log("message did not send");
          }
        );
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
            className="name"
            type="text"
            name="user_name"
          />
          <label>Email</label>
          <input
            placeholder="Email..."
            className="email"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea placeholder="Message..." className="area" name="message" />
          <ReCAPTCHA sitekey="6LfRiE0pAAAAAGvWSYQp_Rggse9DWcXXFu3VVfrz" onChange={(val:any) => setCaptVal(val)} />
          <input className="form-submit" disabled={!captVal} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
