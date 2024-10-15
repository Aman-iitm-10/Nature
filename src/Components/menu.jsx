import natureLogo from "./images/logo.png";

export default function Menu(){
  return (
    <div className="navbar">
      <div className="logo">
        <div>
          <img src={natureLogo} alt="Logo" />
        </div>
      </div>
      <div className="links">
        <a href="#home" id="home">
          Home
        </a>
        <a href="#blog" id="blog">
          Blog
        </a>
        <a href="#contact" id="contact">
          Contact
        </a>
        <a href="#about" id="about">
          About
        </a>
      </div>
    </div>
  )
}