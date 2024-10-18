const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let komik = [
  {
    id: 2,
    nama: "Kono Sekai ga Tensei Shita Nara, Shiranai Nara",
    chapter: 25,
    gambar:
      "https://komikcast.cz/wp-content/uploads/2023/03/kono-sekai-e1678708356792.jpg?w=225&q=50",
    genre: ["adventure", "fantasy"],
  },
  {
    id: 3,
    nama: "Kimi to Warui Koto ga Shitai",
    chapter: 32,
    gambar:
      "https://komikcast.cz/wp-content/uploads/2024/10/6a52256c-6754-4ee8-9367-8fc2bd5ab4c3.jpg?w=225&q=50",
    genre: ["action", "school"],
  },
  {
    id: 4,
    nama: "Dungeon Defense",
    chapter: 10,
    gambar:
      "https://komikcast.cz/wp-content/uploads/2024/09/dungeon_defense_f2.jpg?w=225&q=50",
    genre: ["action", "adventure"],
  },
  {
    id: 5,
    nama: "Osanai Fusai wa Itonamitai",
    chapter: 1,
    gambar:
      "https://komikcast.cz/wp-content/uploads/2024/10/ofu5324532432432-e1728918466717.jpg?w=225&q=50",
    genre: ["action", "fantasy"],
  },
  {
    id: 6,
    nama: "Free2Play",
    chapter: 39,
    gambar:
      "https://komikcast.cz/wp-content/uploads/2024/10/5wd46a54we.jpg?w=225&q=50",
    genre: ["action", "drama"],
  },
];

app.get("/komik", (req, res) => {
  res.json(komik);
});

app.post("/komik", (req, res) => {
  const newkomik = req.body;
  newkomik.id = komik.length + 1;
  komik.push(newkomik);
  res.status(201).json(newkomik);
});

app.delete("/komik/:id", (req, res) => {
  const id = parseInt(req.params.id);
  komik = komik.filter((k) => k.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
