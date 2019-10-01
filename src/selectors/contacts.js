// get visible contacts

export default (contacts, { text }) => {
    return contacts.filter((contact) => {
        const textMatch = contact.fullName.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
};