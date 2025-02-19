import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    if (!Array.isArray(updatedContacts)) {
      console.error(
        'This data type can not be written to database. Has to be an array of objects',
        updatedContacts,
      );
      return 0;
    }
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf-8');
    return 1;
  } catch (error) {
    console.error('Помилка запису у файл:', error);
    return 0;
  }
};
