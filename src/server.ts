import express from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Placeholder data
let movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 },
  { id: 3, title: "The Matrix", director: "The Wachowskis", year: 1999 },
];

app.get("/movies", (req: any, res: any) => {
  res.json(movies);
});

app.get("/movies/:id", (req: any, res: any) => {
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
