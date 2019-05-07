import apiManager from "./dbCalls"
import editContact from "./contactForm"
import buildAllContactForm from "./buildAll"

const outEl = document.querySelector(".output");

const addNewContactForm = () => {
    //build create new contact form html and output it on the page
    let newContactHTML = editContact.createNewContact();
    outEl.innerHTML = newContactHTML;
    //grabbing the create button and adding event listener
    document.querySelector(".createNewButton").addEventListener("click", (event) => {
        //grabbing each value for the input fields
        let editFirstName = document.querySelector(".editFirstName").value;
        let editLastName = document.querySelector(".editLastName").value;
        let editAddress = document.querySelector(".editAddress").value;
        let editPhone = document.querySelector(".editPhone").value;
        if (editFirstName !== "" && editLastName !== "" && editAddress !== "" && editPhone  !== ""){
            //getting the fetch call to post new info
            apiManager.makeContact({
                first_name: editFirstName,
                last_name: editLastName,
                address: editAddress,
                phone: editPhone})
                //when that update is finished, then rebuild contacts
                .then( () =>{
                    buildAllContactForm();
                    //empties text fields
                    document.querySelector(".editFirstName").value = "";
                    document.querySelector(".editLastName").value = "";
                    document.querySelector(".editAddress").value = "";
                    document.querySelector(".editPhone").value = "";
                })
        } else {
            alert("Please add missing contact information");
            console.error("new contact not added due to missing information")
        }
    })
};

export default addNewContactForm