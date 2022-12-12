import express from 'express';
import { imdb } from './imdb.js';


const app = express();
const port = 5000;

function logger (req, res, next) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${req.method} ${req.url}`);
  next();
}
app.use(logger);

app.get('/api/getNames/:pageid', (req, res) => {
  const page = parseInt(req.params.pageid);
  res.send(imdb.getNamePage(page));
})

app.get('/api/getTitles/:knownFor', (req, res) => {
  const knownFor = req.params.knownFor;
  res.json(imdb.getTitles(knownFor));
})

app.listen(port, () => {
  console.log(`IMDB mini-API listening on port ${port}`)
})
