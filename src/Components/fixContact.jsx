
import whatsappLogo from "./images/whatsaaplogo.png";
import instaLogo from "./images/nstalog.png";
import linkedinLogo from "./images/displaying-19-gallery-images-for-linkedin-logo-png-25.png";
export default function FixContact() {
  return (
    <div className="fix-xontact">
      <div>
        <a
          href="https://chat.whatsapp.com/JnnCQbFzoaY7o6E11iUZlt"
          target="_blank"
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp Logo"
            className="fix-xontact-logo"
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/nature_nurture_iitmbs?igsh=MTFrdm0yOTN1MW9wYg=="
          target="_blank"
        >
          <img
            src={instaLogo}
            alt="Instagram Logo"
            className="fix-xontact-logo"
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/company/nature-nurture-iitm/=="
          target="_blank"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn Logo"
            className="fix-xontact-logo"
          />
        </a>
      </div>
    </div>
  )
}