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
    document.getElementById("proj1").innerText="In periode 6 van het schooljaar 2022 zijn we de opdracht aangegaan om data over alcohol gebruik van studenten te visualiseren in een 2D of 3D omgeving.";
    document.getElementById("proj1").style.fontSize=30 + "px";
    document.getElementById("proj1").style.marginTop=-11.5+"%";
    document.getElementById("proj3").innerText="In periode 5, schooljaar 2021 zijn we gestart aan project arcade, de opdracht was om een 2D game te maken die gespeeld kan worden op een arcade kast.";
    // document.getElementById("githubb").innerHTML="Om meer van mijn projecten te zien ga dan naar mijn ";
    // document.getElementById("githubb2").innerText="GitHub pagina!";
}

function german(){
    //alle text veranderen naar duits
    document.getElementById("aboutBtn").innerText="ÜBER";
    document.getElementById("workBtn").innerText="ARBEIT";
    document.getElementById("contactBtn").innerText="KONTAKT";
    document.getElementById("txt2Pg2").innerText="Mein Name ist Joep, ich bin 17 Jahre und ich studiere Software Development am Sintlucas in Eindhoven. Ich liebe Gaming, neue dingen lernen und spaß haben. Das hat mir angezogen zum Game Development.";
    document.getElementById("proj1").innerText="In unserem zweiten Schuljahr haben wir ein Projekt gestartet zum Thema Data Analysis und Visualization. Wir sammeln Daten zum Alkoholkonsum unter Schülern und stellen diese sowohl in einer 2D oder in einer 3D Umgebung dar.";
    document.getElementById("proj1").style.fontSize=25 + "px";
    document.getElementById("proj1").style.marginTop=-12+"%";
    document.getElementById("proj3").innerText="Zu Beginn des zweiten Schuljahres haben wir das Projekt 'Arcade' gestartet. Die Aufgabe bestand darin ein 2D Spiel zu entwickeln für eine Arcade-Maschine.";
    // document.getElementById("githubb").innerText="Um mehr über meine Projekte zu erfahren, besuchen Sie meine ";
    // document.getElementById("githubb2").innerText="Github-Site!";
}

function english(){
    //alle text veranderen naar engels
    document.getElementById("aboutBtn").innerText="ABOUT";
    document.getElementById("workBtn").innerText="WORK";
    document.getElementById("contactBtn").innerText="CONTACT";
    document.getElementById("txt2Pg2").innerText="My name is Joep, I'm 17 years old and I’m studying Software Development at SintLucas in Eindhoven. I love gaming, learning new things and having fun. This made me want to become a Game Developer.";
    document.getElementById("proj1").innerText="In periode 6 of schoolyear 2022 we started the visualizing data project, about alcohol usage of people from school, into a 2D or 3D application.";
    document.getElementById("proj1").style.fontSize=30 + "px";
    document.getElementById("proj1").style.marginTop=-11.5+"%";
    document.getElementById("proj3").innerText="In periode 5 of schoolyear 2021 we begun Project Arcade, the assignment was to create a 2D game which was to be played on an arcade machine.";
    // document.getElementById("githubb").innerText="To see more of my projects go to my ";
    // document.getElementById("githubb2").innerText="GitHub page!";
}