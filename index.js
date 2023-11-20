import { alienPlanets } from "./alienPlanets.js";

const planetContainer = document.querySelector("#planetContainer")

for (let i = 0; i < alienPlanets.length; i++){
    const div = document.createElement("div")
    div.className = "planet"
    planetContainer.appendChild(div)

    const name = document.createElement("div")
    name.className = "planetName"
    name.textContent = alienPlanets[i].name
    div.appendChild(name)

    const emoji = document.createElement("div")
    emoji.className = "planetEmoji"
    emoji.textContent = alienPlanets[i].emoji
    div.appendChild(emoji)
}