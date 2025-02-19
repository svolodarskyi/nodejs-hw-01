import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    //   const fakeContacts = [...Array(5)].map(createFakeContact);
    const fakeContacts = Array.from({ length: number }, createFakeContact);
    const allContatcs = [...existingContacts, ...fakeContacts];
    const result = await writeContacts(allContatcs);
    if (result === 1) {
      console.log('Контакти згенеровані успішно');
    } else {
      console.log('Не вдалося зберегти згенеровані контакти');
    }
  } catch (error) {
    console.log('Помилка генерування контактів', error);
  }
};

generateContacts(5);
