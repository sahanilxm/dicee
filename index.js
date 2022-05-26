function fun(){
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomImage1="dice"+randomNumber1+".png";
    var randomImageSource1="images/"+randomImage1;

    document.querySelector(".img-1").setAttribute("src",randomImageSource1);


    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomImage2="dice"+randomNumber2+".png";
    var randomImageSource2="images/"+randomImage2;

    document.querySelector(".img-2").setAttribute("src",randomImageSource2);


    if(randomNumber1>randomNumber2){
        document.querySelector(".winner").innerHTML="🥇 Player 1 Won";
    }
    else if(randomNumber1==randomNumber2){
        document.querySelector(".winner").innerHTML="Its DRAW";
    }
    else{
        document.querySelector(".winner").innerHTML="🥇 Player 2 Won";
    }
}