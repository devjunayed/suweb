// Scripts for bottom to up button
mybutton = document.getElementById("btu");
mybutton.style.display ="none";
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop>30 || document.documentElement.scrollTop >30){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}


// script for menu bar responsive icon
