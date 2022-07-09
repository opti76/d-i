/* let planets = ["Earth", "Mars", "Mercury", "Venus", "Jupiter", "Saturn", "Uranus", "Neptune"]
let section = document.querySelector(".listPlanets")
for (let index = 0; index < planets.length; index++) {
    const element = planets[index];
    let div = document.createElement("div")
    div.setAttribute('class', 'planet')
    section.appendChild(div)
    
}
*/ //GOT STUCK

//THIS IS WORKING....


let Mercury = document.createElement("div")
Mercury.setAttribute('class', 'planet')
let section = document.querySelector(".listPlanets")
section.appendChild(Mercury)
let merText = document.createTextNode("Mercury")
Mercury.appendChild(merText)
Mercury.style.backgroundColor = "brown"

let Venus = document.createElement("div")
Venus.setAttribute('class', 'planet')
section.appendChild(Venus)
let venText = document.createTextNode("Venus")
Venus.appendChild(venText)
Venus.style.backgroundColor = "lightgray"

let Earth = document.createElement("div")
Earth.setAttribute('class', 'planet')
section.appendChild(Earth)
let earthText = document.createTextNode("Earth")
Earth.appendChild(earthText)
Earth.style.backgroundColor = "blue"

let Mars = document.createElement("div")
Mars.setAttribute('class', 'planet')
section.appendChild(Mars)
let marText = document.createTextNode("Mars")
Mars.appendChild(marText)
Mars.style.backgroundColor = "orange"

let Jupiter = document.createElement("div")
Jupiter.setAttribute('class', 'planet')
section.appendChild(Jupiter)
let jupText = document.createTextNode("Jupiter")
Jupiter.appendChild(jupText)
Jupiter.style.backgroundColor = "grey"

let Saturn = document.createElement("div")
Saturn.setAttribute('class', 'planet')
section.appendChild(Saturn)
let satText = document.createTextNode("Saturn")
Saturn.appendChild(satText)
Saturn.style.backgroundColor = "white"

let Uranus = document.createElement("div")
Uranus.setAttribute('class', 'planet')
section.appendChild(Uranus)
let uraText = document.createTextNode("Uranus")
Uranus.appendChild(uraText)
Uranus.style.backgroundColor = "yellow"

let Neptune = document.createElement("div")
Neptune.setAttribute('class', 'planet')
section.appendChild(Neptune)
let nepText = document.createTextNode("Neptune")
Neptune.appendChild(nepText)
Neptune.style.backgroundColor = "green"

