import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = [...contacts, createFakeContact()];
    const result = await writeContacts(newContacts);
    if (result === 1) {
      console.log('Контакт доданий успішно');
    } else {
      console.log('Не вдалося видалити контакт');
    }
  } catch (error) {
    console.log('Помилка додавання одного контакту', error);
  }
};

addOneContact();
