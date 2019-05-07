import contactObj from "./contact"

// A ContactForm component that listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the ContactCollection component.

//builds html for contact edit form
const editContact = {
    getContactHTML:(contactId) => {
        return contactObj.getOneContact(contactId).then((contact) => {
            return `<div> 
            <form>
                <label for="editForm">Edit Contact</label> <br>
                First name: <input class="editFirstName" value="${contact.first_name}" type="text" name="fname"><br>
                Last name: <input class="editLastName" value="${contact.last_name}" type="text" name="lname"><br>
                Address: <input class="editAddress" value="${contact.address}" type="text" name="fname"><br>
                Phone: <input class="editPhone" value="${contact.phone}" type="text" name="lname"><br>
            </form>
            <button class="updateButton">Update</button>
            <hr> </div>`
        })
    },
    //builds html for add new contact form
    createNewContact:() => {
            return `<div> 
            <form>
                <label for="createForm">Create Contact</label> <br>
                First name: <input class="editFirstName" value="" type="text" name="fname"><br>
                Last name: <input class="editLastName" value="" type="text" name="lname"><br>
                Address: <input class="editAddress" value="" type="text" name="fname"><br>
                Phone: <input class="editPhone" value="" type="text" name="lname"><br>
            </form>
            <button class="createButton">Create</button>
            <hr> </div>`
    },
}

export default editContact