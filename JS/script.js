var img = document.getElementById("img");
var passinp = document.getElementById("password");
var strength=document.getElementById("strength")
var eye=document.getElementById("eye")

function checkStrength() {
    let length = passinp.value.length;
      
    if(length===0){
        img.src = "https://static.wikia.nocookie.net/the-uncanny-incredible/images/6/60/Ezgif-frame-001.png";

        strength.innerHTML="Strength:"  
    } 
    else if (length <= 2) {
        img.src = "https://static.wikia.nocookie.net/the-uncanny-incredible/images/6/60/Ezgif-frame-001.png";
        strength.innerHTML = 'Strength: <span style="color:red">Weakest</span>';
    } 
    else if (length <= 4) {
        img.src = "https://static.wikia.nocookie.net/the-uncanny-incredible/images/1/19/Ezgif-frame-001_1.png";
        strength.innerHTML = 'Strength: <span style="color:rgb(247, 56, 56);">Weak</span>';
    } 
    else if (length <= 6) {
        img.src = "https://static.wikia.nocookie.net/the-uncanny-incredible/images/a/ad/7hd.png";
        strength.innerHTML = 'Strength: <span style="color:yellow">Average</span>';
    } 
    else if (length <= 8) {
        img.src = "https://static.wikia.nocookie.net/the-uncanny-incredible/images/2/26/Phase_2.jpg";
        strength.innerHTML = 'Strength: <span style="color:lightgreen">Strong</span>';
    }
    
    else {
        img.src = "https://static.wikia.nocookie.net/the-uncanny-incredible/images/e/ee/Phase_1.jpg";
        strength.innerHTML = 'Strength: <span style="color:green;">Perfect </span>';
    }
      
}

function showPass(){
    var isShow=false;
    if(passinp.type==="password"){
        passinp.type="text"
        isShow=true;
        eye.style.color="orange"
    }
    if(!isShow){
        passinp.type="password"
        eye.style.color="black"
    }
    isShow=!isShow
}


passinp.addEventListener("input", checkStrength);
eye.addEventListener("click",showPass)