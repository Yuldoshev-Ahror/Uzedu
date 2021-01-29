import "./App.css";
import Routes from "./routes.js";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";

import MenuTitle from "./components/MenuTitle";

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
