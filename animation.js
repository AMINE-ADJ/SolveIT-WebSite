function changeCard(i) {
  
        const description = ["Im Nassim 2CP ESI STUDENT, ESMS Mentor", "Im Amine 2CP ESI STUDENT, ESMS Mentee", "Im Rania 1CS STUDENT, ESMS Mentor"]; //to add a new p...
    if( document.getElementById("button"+i).classList.contains('minusButton'+i) ) {
    //    alert("it's minus dans"+i); 
       document.getElementsByClassName("speaker"+i)[0].className = "speakerafterminusclick"+i;
       document.getElementsByClassName("speakerName"+i)[0].className = "speakerNameAfterMinus"+i;
       document.getElementsByClassName("profession"+i)[0].className = "professionAfterMinus"+i;
       document.getElementsByClassName("speakerDesciption"+i)[0].className = "speakerDesciptionAfterMinus"+i;
    //    document.getElementsByClassName("content1")[0].className = "contentdown1";
      //  document.getElementById("description"+i).innerHTML = "";
       document.getElementsByClassName("speakerphotodiv"+i)[0].className = "speakerphotodivafterminusclick"+i;
       document.getElementsByClassName("minusButton"+i)[0].className = "plusButton"+i;
     }
     else if( document.getElementById("button"+i).classList.contains('plusButton'+i) ) { 
        document.getElementsByClassName("speakerafterminusclick"+i)[0].className = "speakerafterplusclick"+i;
        document.getElementsByClassName("speakerNameAfterMinus"+i)[0].className = "speakerNameAfterPlus"+i;//++
        document.getElementsByClassName("professionAfterMinus"+i)[0].className = "professionAfterPlus"+i; //++
        document.getElementsByClassName("speakerDesciptionAfterMinus"+i)[0].className = "speakerDesciptionAfterPlus"+i;//++
        document.getElementById("description"+i).innerHTML = description[i];
      // let node = document.createTextNode ('Hello, I am Arun');
      // document.getElementById("description"+i).appendChild(node); 

        document.getElementsByClassName("speakerphotodivafterminusclick"+i)[0].className = "speakerphotodivafterplusclick"+i;
        document.getElementsByClassName("plusButton"+i)[0].className = "minusButton"+i;
     }
     document.body.addEventListener("click", myFunction,{once:false}); 
}