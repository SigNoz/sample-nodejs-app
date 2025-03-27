const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

async function fetchData() {
  try {
    const [catFact, dogFact, randomJoke] = await Promise.all([
      axios.get("https://catfact.ninja/fact"),
      axios.get("https://dog.ceo/api/breeds/image/random"),
      axios.get("https://official-joke-api.appspot.com/jokes/random"),
    ]);

    return {
      catFact: catFact.data.fact,
      dogImage: dogFact.data.message,
      joke: randomJoke.data.setup + " - " + randomJoke.data.punchline,
    };
  } catch (error) {
    return { error: "Failed to fetch data from APIs" };
  }
}

app.get("/data", async (req, res) => {
  const data = await fetchData();
  res.json(data);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
