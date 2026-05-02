import { Component, createRef } from "react";
import Spinner from "react-bootstrap/Spinner";
import { MovieCard } from "./MovieCard";

export class MovieSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };

    this.rowRef = createRef();
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    fetch(`https://www.omdbapi.com/?s=${this.props.query}&apikey=e5613b35`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.Search || [],
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  scroll = (direction) => {
    const row = this.rowRef.current;

    if (!row) return;

    row.scrollBy({
      left: direction === "left" ? -600 : 600,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div className="container-fluid my-4 text-light">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>{this.props.title}</h3>

          <div>
            <button
              className="btn btn-outline-light btn-sm me-2 fst-italic"
              onClick={() => this.scroll("left")}
            >
              Slide Left
            </button>

            <button
              className="btn btn-outline-light btn-sm fst-italic"
              onClick={() => this.scroll("right")}
            >
              Slide Right
            </button>
          </div>
        </div>

        {this.state.loading ? (
          <div className="text-center py-4">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <div
            ref={this.rowRef}
            className="d-flex overflow-auto gap-2 pb-2 movie-row"
          >
            {this.state.movies.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
        )}
      </div>
    );
  }
}