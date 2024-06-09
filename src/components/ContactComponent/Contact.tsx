import LottieAnimation from "./LottieAnimation";
import ReCAPTCHA from "react-google-recaptcha";
import AnimationJson from "./lottie-web/mail-animation.json";
import "../../styles/contact-style.css";
import useContactForm from "../../hooks/useContactForm";

export const ContactUs = () => {
  const { setCaptVal, email, sendEmail, form, captVal } = useContactForm();
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY || '';
  if (!siteKey) {
    console.error('Missing reCAPTCHA site key');
  }
  return (
    <div id="contact" className="ContactForm">
      <div className="Animation">
        <h2>Let's discuss your Project</h2>
        <LottieAnimation animationData={AnimationJson} />
      </div>
      <div className="ContactUs">
        <h1 className="title text-center mb-4">Talk to Me</h1>
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
          {email && (
            <p className="emailError">Please put your own email client.</p>
          )}

          <label>Message</label>
          <textarea
            placeholder="Message..."
            required
            className="area"
            name="message"
          />
          <ReCAPTCHA
            sitekey={siteKey}
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
