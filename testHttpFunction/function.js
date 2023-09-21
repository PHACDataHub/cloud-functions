const functions = require('@google-cloud/functions-framework');

functions.http('helloWorld', (req, res) => {
  res.send(`Hello  there ${req.query.name || req.body.name || 'World, hope its going well?'}!`);
});
