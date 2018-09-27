var Mocha = require('mocha');
var glob = require('glob');

const mocha = new Mocha();

glob('@(test)/**/*.spec.js?(x)', (err, files) => {
  let file;
  if (err) {
    throw err;
  }
  for (let i = 0, len = files.length; i < len; i += 1) {
    file = files[i];
    mocha.addFile(file);
  }
  mocha.ui('bdd');
  mocha.timeout(0);
  // mocha.reporter('min'); // My personal preference for debugging
  return mocha.run(failures => process.exit(failures));
});