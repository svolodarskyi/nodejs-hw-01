import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts;
  } catch (error) {
    console.error('Помилка в читанні всіх контактів', error);
  }
};

console.log(await getAllContacts());
