import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import MainContent from "./Components/MainContent";
import { MainProfile } from "./Components/MainProfile";
import { MainSettings } from "./Components/MainSettings";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <MainContent />;
    if (page === "profile") return <MainProfile />;
    if (page === "settings") return <MainSettings />;
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar setPage={setPage} />
      </header>

      <main className="flex-grow-1 bg-black">{renderPage()}</main>

      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
