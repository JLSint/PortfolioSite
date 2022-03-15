var audio = new Audio('nut.mp3');

function Nut(){
    audio.play();
    var nut = document.createElement('img');
    nut.src = "C:/Users/joepl/OneDrive/Documenten/Visual Studio Code/nut.png";
    document.getElementById('body').appendChild(nut);
}
