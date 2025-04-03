import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

// Function to fetch data from multiple open APIs
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
      joke: `${randomJoke.data.setup} - ${randomJoke.data.punchline}`,
    };
  } catch (error) {
    return { error: "Failed to fetch data from APIs" };
  }
}

// Define the route
app.get("/data", async (req: Request, res: Response) => {
  const data = await fetchData();
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
