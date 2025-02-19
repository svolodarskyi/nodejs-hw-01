import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.warn('Немає контактів для видалення.');
      return;
    }
    contacts.pop();
    const result = await writeContacts(contacts);
    if (result === 1) {
      console.log('Останній контакт видалено успішно');
    } else {
      console.log('Не вдалося видалити останній контакт');
    }
  } catch (error) {
    console.error('Помилка в видаленні останнього контакту', error);
  }
};

removeLastContact();
