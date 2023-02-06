import Footer from "./components/Footer";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <PageContent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
