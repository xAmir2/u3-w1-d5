import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow-1 bg-black">
        <MainContent />
      </main>

      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
