let button = document.getElementsByTagName("h1");

function buttonclick(){

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(){
            
            if(button[i].classList.contains("active")){

                $(button[i]).toggleClass("active");       
            } else{

                $(button[i]).toggleClass("active");
            }
            
        })
    }
}

window.onload = function() {
    buttonclick();
}