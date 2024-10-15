import gmailLogo from "./images/gmaillogo.png";
import whatsappLogo from "./images/whatsaaplogo.png";
import instaLogo from "./images/nstalog.png";

export default function PopContact() {
  return (
    <div className="container" id="container">
      <div id="close-cont">Close</div>
      <h1>Contact Us</h1>
      <div className="contact-info">
        <img src={gmailLogo} alt="Email Logo" className="logo" />
        <p>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=HLfJQsXbkTTfzVkRzJVlMrDrxgfPWzkXhMMWgxdcBNGlFrwDmPHCjHzKKvKFsShHwWlPhKrgRSPpRFKkRPNzpdNxJXnmBtZFjSDBkFLPCcSHHVgqZxxwTqjvsmxzFhFFgpwqbjSFRZwtHNcgVmmnHQVcQPrlq">
            naturenurtureiitmbs@gmail.com
          </a>
        </p>
      </div>
      <div className="contact-info">
        <img src={whatsappLogo} alt="Phone Logo" className="logo" />
        <p>Phone: +91 9406848141</p>
      </div>
      <div className="contact-info">
        <img src={whatsappLogo} alt="WhatsApp Logo" className="logo" />
        <a
          href="https://chat.whatsapp.com/JnnCQbFzoaY7o6E11iUZlt"
          className="whatsapp"
          target="_blank"
        >
          Join our WhatsApp Group
        </a>
      </div>
      <div className="contact-info">
        <img src={instaLogo} alt="Instagram Logo" className="logo" />
        <a
          href="https://www.instagram.com/nature_nurture_iitmbs?igsh=MTFrdm0yOTN1MW9wYg=="
          className="instagram"
          target="_blank"
        >
          Follow us on Instagram
        </a>
      </div>
    </div>
  )
}