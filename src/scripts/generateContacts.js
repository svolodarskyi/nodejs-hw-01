import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const generatedContacts = [];
  for (let i = 0; i < 5; i++) {
    generatedContacts.push(createFakeContact());
  }
  const existingContacts = await readContacts();
  writeContacts(generatedContacts.concat(existingContacts));
};

generateContacts(5);
