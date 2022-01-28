
window.onscroll = function() { 
        if(document.documentElement.scrollTop > 600) {
        document.getElementById("navbarr").style.background = "white"
        document.getElementById("start1").style.color = "black"
        document.getElementById("start2").style.color = "black"
        document.getElementById("start3").style.color = "black"
        document.getElementById("start4").style.color = "black"
        document.getElementById("start5").style.color = "black"
        document.getElementById("start6").style.color = "black"
        document.querySelector('.logojs').src = 'pics/logo_white.png'
    }

    else{
        document.getElementById("navbarr").style.background = "#111356"
        document.getElementById("start1").style.color = "white"
        document.getElementById("start2").style.color = "white"
        document.getElementById("start3").style.color = "white"
        document.getElementById("start4").style.color = "white"
        document.getElementById("start5").style.color = "white"
        document.getElementById("start6").style.color = "white"
        document.querySelector('.logojs').src = 'pics/logoversionblue4.png'        
    }
}


