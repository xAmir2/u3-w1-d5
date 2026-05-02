import { MovieSlider } from "./MovieSlider";

export default function MainContent() {
  return (
    <main className="text-light p-3">
      <div className="d-flex justify-content-between align-items-center p-2">
        <h1>TV Shows</h1>
      </div>

      <MovieSlider title="Harry Potter Saga" query="harry potter" />
      <MovieSlider title="Lord of the Rings Saga" query="lord of the rings" />
      <MovieSlider title="Star Wars Saga" query="star wars" />
      <MovieSlider title="Marvel Universe" query="marvel" />
      <MovieSlider title="Fast & Furious Saga" query="fast and furious" />
      <MovieSlider title="Disney Classics" query="disney" />
      <MovieSlider title="Avatar" query="Avatar" />
    </main>
  );
}
