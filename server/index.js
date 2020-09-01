require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const db = require('./database');

const app = express();

app.use(staticMiddleware);

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/all-conventions', (req, res, next) => {
  const sql = `SELECT "name", "website", "imagePath", "startDate", "endDate", "venueName", "address", "city", "state", "longitude", "latitude"
  FROM conventions AS c
  JOIN venues AS v
  ON c."venueId" = v."venueId";`;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port ', process.env.PORT);
});
