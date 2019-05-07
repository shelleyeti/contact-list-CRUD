const apiBaseURL = "http://localhost:8088"

const apiManager = {
    getAllContactInfo: () => {
        return fetch(`${apiBaseURL}/contactInfo`)
          .then(response => response.json());
    },
    getOneContact: (contactId) => {
        return fetch(`${apiBaseURL}/contactInfo/${contactId}`)
            .then(response => response.json())
            //.then(parsedResult => {
            //console.log("one contact", parsedResult);
            //});
    },
    updateContact: (contactId, contactObj) => {
        return fetch (`${apiBaseURL}/contactInfo/${contactId}`,
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(contactObj)
            })
         .then(response => response.json())
         .then(parsedResult => {
            console.log("updated contact", parsedResult);
            })
    },
    makeContact: (contactObj) => {
        return fetch(`${apiBaseURL}/contactInfo/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactObj)
            })
        .then(response => response.json())
        .then(parsedResult => {
            console.log("new contact", parsedResult);
            });
    },
    deleteContact: (contactId) => {
      return fetch(`${apiBaseURL}/contactInfo/${contactId}`,
        {
            method: "DELETE"
        })
    }
}

export default apiManager