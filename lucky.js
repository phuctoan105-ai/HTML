var seconds=0;
setInterval(function(){
    seconds++;
    document.getElementById("timer").textContent="You have been here for "+seconds+" seconds.";

},1000);
function checkform(){
    var name=document.getElementById("name").value.trim();
    var guess=document.getElementById("guess").value;
    var msgname=document.getElementById("msg-name");
    var msgguess=document.getElementById("msg-guess");
    var result=document.getElementById("result");

    msgname.textContent=name? "Great name" : "Enter your name";
    msgname.style.color=name? "green" : "red";

    msgguess.textContent=(guess >= 1 && guess <= 5)? "Guess saved" : "Guess a number from 1 to 5";
    msgguess.style.color=(guess >= 1 && guess <= 5)? "green" : "red";

    if(!name || guess < 1 || guess > 5) return;

    let lucky= Math.floor(Math.random()*5)+1;
    result.textContent=(Number(guess)==lucky) ? "🎉 You won" : "😔 You lost";
    result.style.color=(Number(guess)==lucky) ? "green" : "red";
    

}
