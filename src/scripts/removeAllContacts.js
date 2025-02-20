import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Контакти успішно видалені');
  } catch (error) {
    console.error('Помилка в видаленні всіх контактів', error);
  }
};

removeAllContacts();
