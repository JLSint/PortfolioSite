function fbHover(element){
    document.getElementById("fb").src="assets/facebookLogoHover.png";
}

function fbUnhover(element){
    document.getElementById("fb").src="assets/facebookLogo.png";
}

function twitHover(element){
    document.getElementById("twit").src="assets/twitterLogoHover.png";
}

function twitUnhover(element){
    document.getElementById("twit").src="assets/twitterLogo.png";
}

function ghHover(element){
    document.getElementById("gh").src="assets/githubLogoHover.png";
}

function ghUnhover(element){
    document.getElementById("gh").src="assets/githubLogo.png";
}

function igHover(element){
    document.getElementById("ig").src="assets/instagramLogoHover.png";
}

function igUnhover(element){
    document.getElementById("ig").src="assets/instagramLogo.png";
}

function socialDistancing(){
    //beweeg letters weg van muis als hij in de buurt is
    
}

function dutch(){
    //alle text veranderen naar nederlands
    document.getElementById("aboutBtn").innerText="OVER";
    document.getElementById("workBtn").innerText="WERK";
    document.getElementById("contactBtn").innerText="CONTACT";
    document.getElementById("txt2Pg2").innerText="Mijn naam is Joep, ik ben 17 en zit op het SintLucas te Eindhoven waar ik de opleiding Software Development volg. Ik houd van gamen, nieuwe dingen leren en lol hebben. Dit maakte mij aangetrokken tot Game Gevelopment.";
}

function german(){
    //alle text veranderen naar duits
    document.getElementById("aboutBtn").innerText="ÜBER";
    document.getElementById("workBtn").innerText="ARBEIT";
    document.getElementById("contactBtn").innerText="KONTAKT";
    document.getElementById("txt2Pg2").innerText="Mein Name ist Joep, ich bin 17 Jahre und ich studiere Software Development am Sintlucas in Eindhoven. Ich liebe Gaming, neue dingen lernen und spaß haben. Das hat mir angezogen zum Game Development.";
}

function english(){
    //alle text veranderen naar engels
    document.getElementById("aboutBtn").innerText="ABOUT";
    document.getElementById("workBtn").innerText="WORK";
    document.getElementById("contactBtn").innerText="CONTACT";
    document.getElementById("txt2Pg2").innerText="My name is Joep, I'm 17 years old and I’m studying Software Development at SintLucas in Eindhoven. I love gaming, learning new things and having fun. This made me want to become a Game Developer.";
}