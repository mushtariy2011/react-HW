
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);


useEffect(() => {
  async function getFilms() {
    const res = await fetch("https://kinoteka.mesa.uz/api/films");
    const data = await res.json();
    setFilms(data.data);
  }

  getFilms();
}, []);

  return (
    <div className="container">
      <h1> Kinoteka</h1>

      <div className="films">
        {films.map((film) => (
          <div className="film-card" key={film.id}>
            <img
              src={film.posterUrl}
              alt={film.title}
            />

            <h2>{film.title}</h2>
            <p>Year: {film.year}</p>
            <p>⭐ {film.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
