
var allButtons = document.querySelectorAll(".drum");
for (let i = 0; i < 8; i++) {

    allButtons[i].addEventListener("click", function (event) {
        // alert(`${allButtons[i].classList[0]}  got played`);
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        // console.log();
        buttonAnimation(buttonInnerHtml);
    }
    );
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    var audio;
    switch (key) {
        case "w":
            audio=new Audio('sounds/crash.mp3');
            audio.play();  
            break;
        case "a":
            audio=new Audio('sounds/kick-bass.mp3');
            audio.play();  
        case "s":
            audio=new Audio('sounds/snare.mp3');
            audio.play();  
        case "d":
            audio=new Audio('sounds/tom-1.mp3');
            audio.play();  
        case "j":
            audio=new Audio('sounds/tom-2.mp3');
            audio.play(); 
        case "k":
            audio=new Audio('sounds/tom-3.mp3');
            audio.play(); 
        case "l":
            audio=new Audio('sounds/tom-4.mp3');
            audio.play();
        case "h":
            audio=new Audio('sounds/Hi-Hat.mp3');
            audio.play();        
        default:
            break;
    }
}
function buttonAnimation(key){
    var activeButton=document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    // activeButton.classList.remove("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

