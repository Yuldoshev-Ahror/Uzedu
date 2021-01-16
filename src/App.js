import "./App.css";
import Routes from "./routes.js";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
