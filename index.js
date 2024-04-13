var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var myimage1=document.querySelector('.fl');
myimage1.firstElementChild.lastElementChild.setAttribute('src',"./images/dice"+randomNumber1+".png"); 

var myimage2=document.querySelector('.fl');
myimage2.lastElementChild.lastElementChild.setAttribute('src',"./images/dice"+randomNumber2+".png");

var heading = document.querySelector('h1');

if(randomNumber1 > randomNumber2){
    heading.innerHTML='&#128681 Victory for Player 1'
}else if(randomNumber1===randomNumber2){
    heading.innerHTML='It is a Draw &#128053'
}else if(randomNumber1 < randomNumber2){
    heading.innerHTML='&#128681 Victory for Player 2'
}


