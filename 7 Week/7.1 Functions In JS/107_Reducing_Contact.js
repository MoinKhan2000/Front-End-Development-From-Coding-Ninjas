const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
];


function mapContactsToCompanies(contacts) {
    return contacts.reduce((companiesMap, contact) => {
        if (contact.company in companiesMap) {
            companiesMap[contact.company].push(contact.name)
        }
        else {
            companiesMap[contact.company] = [contact.name]
        }
        return companiesMap
    }, {})
}


ans = mapContactsToCompanies(contacts)
console.log(ans);
