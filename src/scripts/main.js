import buildAllContactForm from "./buildAll"
import addNewContactForm from "./addNewContact"

buildAllContactForm()

document.querySelector(".createButton").addEventListener("click", (event =>{
    addNewContactForm()
}))