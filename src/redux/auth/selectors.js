export const getContacts = ({ contacts }) => contacts.item;

export const getFilter = ({ filter }) => filter;

export const getVisibleFilter = ({ contacts, filter }) => {
    if (!filter) {
        return contacts.items;
    }

    return contacts.items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
}