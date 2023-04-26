var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/', function(req, res, next) {
  res.send('Event Manager Backend')
});

router.post('/query/:action', async function(req, res, next) {
  const action = req.params.action;
  const collection = 'events';
  const result = await fetch(`https://data.mongodb-api.com/app/data-oefvp/endpoint/data/beta/action/${action}`, {
    method: 'POST',
    body: JSON.stringify({
      ...req.body ?? {},
      "collection": collection,
      "database":"eventmanager",
      "dataSource":"GroupUpCluster"
    }),
    headers: {
      "api-key": "lhNsj6wdCwUxRFMuJWmHwzovXyOpMW8RQbsytKMkyGJDAtyZhSwNofEq4pWAWOtC",
    },
    mode: 'no-cors'
  }).then(result => result.json());
  res.send(result);
});
module.exports = router;
