const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 8000;
const API_KEY = process.env.API_KEY;

if (typeof API_KEY === "undefined") {
  console.error(
    "You need to set the api key for the thesaurus in the API_KEY environment variable."
  );
  process.exit();
}

app.get("/api", async (req, res) => {
  console.log(req.query.word);
  const word = req.query.word;
  const apiUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${API_KEY}`;
  const data = await fetch(apiUrl);
  const json = await data.json();

  const wordList = json[0].meta.syns[0];
  res.json(wordList);
});

app.listen(port, () => console.log(`Server listening on port ${port}.`));
