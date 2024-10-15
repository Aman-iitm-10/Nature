import {useState} from 'react';

//document.getElementsByClassName("main-blog-image")[0].style.width = innerWidth / 6;
document.addEventListener("click", function(event) {
  //var [contactStatus, changeContactStatus] = useState(false);
  if (event.target.id === "BODY") {
    const bird = document.createElement("div");
    bird.classList.add("bird");
    document.querySelector(".bird-container").appendChild(bird);
    console.log('bod');
  }
  if (event.target.id === "home") {
    
    /*var visi = document.getElementById('container');
    var blogPag = document.getElementById('blogPag');
    var main = document.getElementById('main-cn');
    //var agr = document.getElementbyId('agriculture');
    visi.style.display = 'none';
    blogPag.style.display = 'none';
    main.style.display = 'block';
    //agr.style.display = 'none';*/
    hideAllExcept("home")
  }
  else if (event.target.id === "contact") {
    var visi = document.getElementById('container');
    /*contactStatus == false ? visi.style.display = 'block' : visi.style.display = 'none';
    contactStatus == false ? changeContactStatus(true) : changeContactStatus(false)
    
    changeContactStatus(true);*/
    visi.style.display = 'block';
    
  }
  else if (event.target.id === "close-cont") {
    var visi = document.getElementById('container');
    visi.style.display = 'none';
    
  }
  else if (event.target.id === "blog") {
    /*var blogPag = document.getElementById('blogPag');
    var main = document.getElementById('main-cn');
    blogPag.style.display = 'block';
    main.style.display = 'none';
    var visi = document.getElementById('container');
    visi.style.display = 'none';
    console.log('blog');*/
    hideAllExcept("blog");
  }
  else if (event.target.id === "blogopen"){
    /*var agr = document.getElementbyId('agriculture');
    var blogPag = document.getElementById('blogPag');
    var main = document.getElementById('main-cn');
    agr.style.display = 'block';
    main.style.display = 'none';
    var visi = document.getElementById('container');
    visi.style.display = 'none';
    blogPag.style.display = 'none';
    consol.log('agricultur');*/
    hideAllExcept("blogopen");
  }
  else if (event.target.id == 'about'){
    hideAllExcept('about');
  }
  else if (!((event.target.id === "contact")  || (event.target.id === "container"))) {
    var visi = document.getElementById('container');
    visi.style.display = 'none';
  }

});
var l = {'about': 'aboutopen', 'blogopen' : 'agriculture', 'blog' : 'blogPag', 'home' : 'main-cn', 'contact' : 'container'}
function hideAllExcept(elem){
  for (var i in l){
    if (i != elem){
      document.getElementById(l[i]).style.display = 'none';
      console.log(i)
    }
  }
  console.log(elem)
  document.getElementById(l[elem]).style.display = 'block';
}