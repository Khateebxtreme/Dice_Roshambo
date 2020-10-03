//changing value of dice 1
let guess1=Math.ceil(Math.random()*6);
document.querySelector("div .img1").setAttribute("src","images/dice"+guess1+".png");


//changing value of dice 2
let guess2=Math.ceil(Math.random()*6);
document.querySelector("div .img2").setAttribute("src","images/dice"+guess2+".png");

if (guess1 > guess2){
  document.querySelector("h1").innerHTML= "<img id='flag' src='images/flag.png'> Player 1 Wins!";
}
else if(guess2 > guess1){
  document.querySelector("h1").innerHTML= "Player 2 Wins! <img id='flag' src='images/flag.png'>";
}
else{
  document.querySelector("h1").innerHTML= "Draw!";
}
