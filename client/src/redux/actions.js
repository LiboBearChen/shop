const Types = {
  ADD_CONTACT: "ADD_CONTACT",
  RESET_CONTACT: "RESET_CONTACT",
};

function addContact(contact) {
  return { type: Types.ADD_CONTACT, contact };
}

function resetContact() {
  return { type: Types.RESET_CONTACT };
}

export default {
  addContact,
  resetContact,
  Types,
};
