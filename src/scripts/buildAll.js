import editContact from "./contactForm"
import apiManager from "./dbCalls"
import contactAllObj from "./allContacts"

const outEl = document.querySelector(".output");
const outElAll = document.querySelector(".outputAll");

const buildAllContactForm = () => {
    //db call to get contacts, then building html
    contactAllObj.getContactHTML()
        //then put html on page
        .then(contactElement => {
            outElAll.innerHTML = contactElement;
            //looping through all edit buttons and adding event listener
            document.querySelectorAll(".editButton").forEach(edit => {
                edit.addEventListener("click", (event) => {
                    //grabing the id from allContacts dataset
                    const contactId = event.target.dataset.id;
                    //getting one contact from db, then creates form from info in db
                    editContact.getContactHTML(contactId).then((contactFormHTML) => {
                        outEl.innerHTML = contactFormHTML;
                        //grabbing the update button and adding event listener
                        document.querySelector(".updateButton").addEventListener("click", (event) =>{
                            //grabbing each value for the input fields
                            let editFirstName = document.querySelector(".editFirstName").value;
                            let editLastName = document.querySelector(".editLastName").value;
                            let editAddress = document.querySelector(".editAddress").value;
                            let editPhone = document.querySelector(".editPhone").value;
                            //getting the fetch call to patch new info
                            apiManager.updateContact(contactId, {
                                first_name: editFirstName,
                                last_name: editLastName,
                                address: editAddress,
                                phone: editPhone
                            //when that update is finished, then rebuild contacts
                            }).then(()=>{
                               buildAllContactForm()
                               //empties text fields
                               document.querySelector(".editFirstName").value = "";
                               document.querySelector(".editLastName").value = "";
                               document.querySelector(".editAddress").value = "";
                               document.querySelector(".editPhone").value = "";
                            })
                        })
                    })
                })
            });
            //delete button
            document.querySelectorAll(".deleteButton").forEach(deleteContact => {
                deleteContact.addEventListener("click", (event) => {
                    //grabing the id from allContacts dataset
                    apiManager.deleteContact(event.target.dataset.id)
                    .then (() =>{
                        buildAllContactForm()
                    });
                })
            })
    });
}

export default buildAllContactForm