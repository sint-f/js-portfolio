//1
function hide() {
    document.getElementById("img").style.display= "none";
}
function unhide() {
    document.getElementById("img").style.display= "block";
}

//2
var number = 0;
function reset() {
    number = 0;
    document.getElementById("number").innerText = number;
}
function plusone() {
    number ++;
    document.getElementById("number").innerText = number;
}
function threetimes() {
    number = number*3;
    document.getElementById("number").innerText = number;
}

//3
const chrash = {img:"chrash.jpg", name:"chrashing plane", speed:"2000", chair:"300"};
const propellor = {img:"propellor.jpg", name:"propellor plane", speed:"1200", chair:"2"};
const shark = {img:"sharkplane.avif", name:"shark plane", speed:"1300", chair:"200"};

function plane() {
    document.getElementById("image1").setAttribute("src", chrash.img);
    document.getElementById("name1").innerHTML = chrash.name;
    document.getElementById("speed1").innerHTML = "speed: " + chrash.speed;
    document.getElementById("chair1").innerHTML = "chairs: " + chrash.chair;
    document.getElementById("image2").setAttribute("src", propellor.img);
    document.getElementById("name2").innerHTML = propellor.name;
    document.getElementById("speed2").innerHTML = "speed: " + propellor.speed;
    document.getElementById("chair2").innerHTML = "chairs: " + propellor.chair;
    document.getElementById("image3").setAttribute("src", shark.img);
    document.getElementById("name3").innerHTML = shark.name;
    document.getElementById("speed3").innerHTML = "speed: " + shark.speed;
    document.getElementById("chair3").innerHTML = "chairs: " + shark.chair;
}

//4
const planets = ["mercurius","venus","earth","mars","jupiter","saturnus","uranus","neptune"];
var whatplan = 0;
function left() {
    if (whatplan > 0) {
        whatplan = whatplan -1;
    } else (whatplan = 0)
    document.getElementById("planet").innerText = planets[whatplan];
}
function right() {
    if (whatplan < planets.length -1) {
        whatplan ++;
    } else (whatplan = planets.length -1)
    document.getElementById("planet").innerText = planets[whatplan];
}

//5
function explode() {
    planets.shift();
}

//6
function push() {
    planets.push("planet");
}

//7
function add() {
    planets.push(document.getElementById("input").value);
}

//8
function show() {
    document.getElementById("show").innerHTML = (planets.join(", "));
}