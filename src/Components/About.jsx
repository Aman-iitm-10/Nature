import './About.css';
export default function About(){
  return (
    <div className="AboutBoc"  id="aboutopen">
      <div className='box' id="Box"></div>
      <div className="AboutSec">
        
        <p>Hey, This is an Incomplete Website. This is for a Nature Club. Blogs will be posted about different topics. If you any suggestion or want to contribute in any way, whether by recommending some changes in design or by providing articles for Blogs.</p>
        <p>You cAn reView this siTe bY directly messAging me.</p>
      </div>
    </div>
  )
}
var elem = document.getElementById("Box");
setInterval(() => {
  var randomRadiusTL = Math.floor(Math.random() * (100 - 50 + 1) + 50);
  var randomRadiusBR = Math.floor(Math.random() * (100 - 50 + 1) + 50);
  var randomRadiusTR = Math.floor(Math.random() * (100 - 50 + 1) + 50);
  var randomRadiusBL = Math.floor(Math.random() * (100 - 50 + 1) + 50);
  /*elem.style.borderTopLeftRadius = Math.random(20,40) * 100 + "%";
  elem.style.borderTopRightRadius = Math.random(20,40) * 100 + "%";
  elem.style.borderBottomLeftRadius = Math.random(20,40) * 100 + "%"; 
  elem.style.borderBottomRightRadius = Math.random(20,40) * 100 + "%";*/
  move(randomRadiusBL, randomRadiusBR, randomRadiusTR, randomRadiusTL);
},3000)

function move(bl,br,tr,tl){
  var tempbl = 0;
  
  if (elem.style.borderBottomLeftRadius){
    tempbl = elem.style.borderBottomLeftRadius;
  }
  console.log(tempbl,bl);
  setInterval(()=>{
    if (tempbl < bl){
      tempbl++;
      elem.style.borderBottomLeftRadius = tempbl + "%";
    }
    else {
      tempbl--;
      elem.style.borderBottomLeftRadius = tempbl + "%";
      
    }
  },10)
}