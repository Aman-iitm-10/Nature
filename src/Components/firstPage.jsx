import Bird from './Bird.jsx';

import gallery from './galleryData.json';

import what_dog from "./images/what_dog.png";
import dog_peep from "./images/barota.png";

export default function FirstPage(){
  return (
    <div className="main-content" id="main-cn">
      <Bird />

      <div className="firs-pag">
        <div className="nature text" id="nature">
          <h1>Nature Nurture Club</h1>
        </div>

        <div className="thought">
          <h2>A place to learn about nature</h2>
        </div>

        <div className="what">
          <div className="what-text">What is this Club</div>
          <div className="what-image">
            <img src={what_dog} />
          </div>
        </div>
        <div className="arley">
          <img src={dog_peep} />
        </div>
        <div className="ans">
          Lorem ipsum "Site dekhne aye musafiro ka swagat hai. This site is
          under construction. fOR nOw tHIs siTE iS only resPONSIVE fOR moBILE.
          Agar koi Bugs dikhe isme (not literally Bugs) to DM kar dena
          screenshot ke sath. (agar ata ho to)""
        </div>
        <div className="ans">
          Aur koi bakwaas karni ho to DM kar dena (Most preferably text) Kuch
          suggestion ho to bhi bata saki cho aUR mOTA bHAI, kEM cHO
        </div>

        <div className="blogs">
          <div className="blog-title">Blogs</div>
          <div className="gallery">
            {gallery.map((image) => {
              return <img src={image.image} className="main-blog-image" id="blogopen"/>;
            })}
          </div>
        </div>
        <div className='youtubeplayer'>
        <iframe width="80%" height="100%" src="https://www.youtube.com/embed/2GbxFIVQv8c?si=WyyZZgectH6D20aG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
        <div className="footer section">
          <div className="air air1"></div>
          <div className="air air2"></div>
          <div className="air air3"></div>
          <div className="air air4"></div>

          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, magna vel bibendum bibendum, velit sapien bibendum
                sapien, vel bibendum sapien sapien vel bibendum sapien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}