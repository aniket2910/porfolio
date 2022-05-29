import { useContext } from "react";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import { ThemeContext } from "./context";
import "./common.css";
import Quote from "./components/Quote/Quote";
import NIntro from "./components/NIntro/NIntro";
import Skill from "./components/Skills/Skill";
import Footer from "./components/Footer/Footer";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Quote />
      <NIntro />
      <About />
      <Skill />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
