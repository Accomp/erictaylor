const fs = require('fs');

function loadFiles(files) {
  return files.map(fileName => fs.readFileSync(fileName, 'utf-8')).join('\n');
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: loadFiles(['./src/styles/_variables.scss', './src/styles/_mixins.scss']),
      },
    },
  },
};
