import path from 'node:path';

//getting the path of the `src` folder
const pathToWorkDir = path.parse(process.cwd()).dir;
const pathToDB = path.join(
  pathToWorkDir,
  'nodejs-hw-01',
  'src',
  'db',
  'db.json',
);

export const PATH_DB = pathToDB;
