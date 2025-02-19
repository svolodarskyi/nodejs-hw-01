import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const allContacts = await readContacts();
    return allContacts.length;
  } catch (error) {
    console.error('Помилка в підрахунку контактів', error);
  }
};

console.log(await countContacts());
