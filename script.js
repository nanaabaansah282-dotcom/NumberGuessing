let random = Math.round(Math.random() * 100);
let attempts = 0;

const change = document.getElementById("heading");
const input = document.getElementById("guess");

function clickMe (){
    const value =input.value.trim();
    const uguess =Number(value);

    if(Number.isNaN(uguess)){
        change.innerHTML="Not a valid number";
        return;
    }
    if(uguess === ""){
        change.innerHTML = "Enter a number!!!";
        return;
    }
    if(uguess < 0 || uguess > 100){
        change.innerHTML = "You aren't in the range!!"
        return;
    }
    
    
    attempts++;
    document.getElementById("attempts").textContent = "Attempts: " + attempts;
    if(uguess > random){
        change.innerHTML = "Lower!!"
    }else if(uguess < random){
        change.innerHTML = "Higher!!"
    }else{
        change.innerHTML = "Yayyy, you got it!!"
        document.getElementById("play").disabled=false;
    }
}

function resetGame(){
    random = Math.round(Math.random()*100);
    attempts=0;

    document.getElementById("attempts").textContent = "Attempts: 0";
    change.innerHTML = "Guess the Number!!!";
    input.value ="";
    input.focus;
    document.getElementById("play").disabled=true;
}