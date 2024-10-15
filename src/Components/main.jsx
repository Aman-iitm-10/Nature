import "./blog.css";
import "./contact.css";
import "./main.css";
import "./script";


import Menu from './menu.jsx';
import FirstPage from './firstPage.jsx';
import Agriculture from "../Components/Blogs of Nature/agriculture.jsx";
import BlogCon from "./BlogCon.jsx";
import FixContact from './fixContact.jsx';
import PopContact from './PopContact.jsx';
import About from './About.jsx';

export default function Main() {
  return (
    <div className="main">
      <Menu />

      <FirstPage />

      <PopContact />

      <FixContact />

      <BlogCon />
      <About />
      {/*Sample Agriculture Blog*/}
      <Agriculture />
      
      <script src="./script.jsx"></script>
    </div>
  );
}

setInterval(function () {
  document
    .querySelector(".gallery")
    .scrollBy(document.querySelector(".gallery img").clientWidth, 0);
  if (
    document.querySelector(".gallery").scrollLeft >=
    document.querySelector(".gallery").scrollWidth -
      document.querySelector(".gallery").clientWidth -
      10
  ) {
    document
      .querySelector(".gallery")
      .scrollBy(
        -(
          document.querySelector(".gallery").scrollWidth -
          document.querySelector(".gallery").clientWidth
        ),
        0,
      );
  }
}, 3000);
