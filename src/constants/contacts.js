import path from 'node:path';

const pathToDB = path.join(process.cwd(), 'src', 'db', 'db.json');

export const PATH_DB = pathToDB;
