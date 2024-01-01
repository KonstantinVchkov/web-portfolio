import React from "react";
import emailjs from "@emailjs/browser";

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
