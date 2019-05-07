import apiManager from "./dbCalls"

//A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.

//displays all contact information
const contactAllObj = {
    getAllContacts: () => {
        return apiManager.getAllContactInfo();
    },
    //builds html for all contacts
    getContactHTML:() => {
        return contactAllObj.getAllContacts().then((contacts) => {
            let contactAllHTML = "";
            contacts.forEach(contact => {
                contactAllHTML += `<div>${contact.first_name} ${contact.last_name} <br> ${contact.address} <br> ${contact.phone} <br>
                <button data-id="${contact.id}" class="editButton"> <a href="#" data-id="${contact.id}">Edit</a></button>
                <button data-id="${contact.id}" class="deleteButton"> <a href="#" data-id="${contact.id}">Delete</a></button>
                <hr></div>`
            });
            return contactAllHTML;
        })
    }
};

export default contactAllObj