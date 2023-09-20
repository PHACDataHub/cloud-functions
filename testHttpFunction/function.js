const functions = require('@google-cloud/functions-framework');

functions.http('test-build-trigger', (req, res) => {
  res.send(`Hello there ${req.query.name || req.body.name || 'World, hope its going well?'}!`);
});
