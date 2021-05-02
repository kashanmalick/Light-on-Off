function lightOn(){
    var Lo = document.getElementById("offimage").src="./images/lighton.jpg";
}
function lightOff(){
    var Lf = document.getElementById("offimage").src="./images/lightoff.jpg";
}
function imgchange(){
    var img1 = document.getElementById("bndimg");
    if(img1.src.match('lightoff')){
        img1.src = "./images/lighton.jpg";
    }else{
        img1.src = "./images/lightoff.jpg"; 
    }
}
function onoffimg(){
    var img1 = document.getElementById("lightoff");
    if(img1.src.match('lightoff')){
        img1.src = "./images/lighton.jpg";
        document.querySelector('#btnlast').textContent="Turn OFF"
        document.getElementById("btnlast").style.backgroundColor="red"
    }else{
        img1.src = "./images/lightoff.jpg";
        document.querySelector('#btnlast').textContent="Turn ON"
        document.getElementById("btnlast").style.backgroundColor="green"
    }
}