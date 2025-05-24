import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
    console.log('Data successfully written into the file');
  } catch (err) {
    console.log('Error, while writgin into the database: ', err);
  }
};
