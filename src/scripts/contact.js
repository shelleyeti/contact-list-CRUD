import apiManager from "./dbCalls"

//displays one person's contact information
const contactObj = {
    getOneContact: (contactId) => {
        return apiManager.getOneContact(contactId);
    }
}


export default contactObj