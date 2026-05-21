function showprofile(){
    let name="Noelle",
    score=75,
    high=100
    let rank=score>=80?"Gold":
    score>50?"Silver":"Bronze";
    let h=new Date().getHours();
    let greet=h<12?"Good Morning":
    h<=17?"Good Afternoon": "Good Evening";

    let stars="",i=0;
    while(i<5){
        stars+="* ";
        i++;

    
    }
    document.getElementById("name").innerHTML=name;
    document.getElementById("score").innerHTML=score;
    document.getElementById("rank").innerHTML=rank;
    document.getElementById("greeting").innerHTML=greet;
    document.getElementById("stars").innerHTML=stars;

}
