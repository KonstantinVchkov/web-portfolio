import React from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

// const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
//   ssr: false,
// });
import AnimationJson from "./lottie-web/mail-animation.json";
import LottieAnimation from "./LottieAnimation";
export const ContactUs = () => {
  const form = React.createRef<HTMLFormElement>();

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
          <input className="form-submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
