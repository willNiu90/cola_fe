const fs = require('fs');
const path = require('path');

const code = 'cola'
const directoryPath = `/cola/deploy/dist/${code}`;

function getDirectories(dir) {
  const files = fs.readdirSync(dir);
  const directories = files.filter(file => fs.statSync(path.join(dir, file)).isDirectory());
  return directories;
}

const directories = getDirectories(directoryPath)

const current = directories.pop() || 'V0'
const num = Number(current.slice(1,current.length)) + 1
const createPath = directoryPath + `/v${num}`
fs.mkdirSync(createPath)

fs.renameSync('./dist', createPath)