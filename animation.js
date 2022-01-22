function changeCard(i) {
   // document.body.addEventListener("click", changeCard ,{once:false}); 
        const description = ["Description-Nassim", "Description-Amine", "Description-Rania"]; //to add a new p...
        if( document.getElementById("button"+i).classList.contains('plusButton'+i) ) { 
         document.getElementsByClassName("speakerafterminusclick"+i)[0].className = "speaker"+i;
         document.getElementsByClassName("speakerNameAfterMinus"+i)[0].className = "speakerName"+i;//++
         document.getElementsByClassName("professionAfterMinus"+i)[0].className = "profession"+i; //++
         document.getElementsByClassName("speakerDesciptionAfterMinus"+i)[0].className = "speakerDesciption"+i;//++
         document.getElementById("description"+i).innerHTML = description[i];
         document.getElementsByClassName("speakerphotodivafterminusclick"+i)[0].className = "speakerphotodiv"+i;
         document.getElementsByClassName("plusButton"+i)[0].className = "minusButton"+i;
      } else if( document.getElementById("button"+i).classList.contains('minusButton'+i) ) {
       document.getElementsByClassName("speaker"+i)[0].className = "speakerafterminusclick"+i;
       document.getElementsByClassName("speakerName"+i)[0].className = "speakerNameAfterMinus"+i;
       document.getElementsByClassName("profession"+i)[0].className = "professionAfterMinus"+i;
       document.getElementsByClassName("speakerDesciption"+i)[0].className = "speakerDesciptionAfterMinus"+i;
       document.getElementsByClassName("speakerphotodiv"+i)[0].className = "speakerphotodivafterminusclick"+i;
       document.getElementsByClassName("minusButton"+i)[0].className = "plusButton"+i;
     }
    
     
}