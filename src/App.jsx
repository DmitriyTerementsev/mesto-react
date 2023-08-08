import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="body-background">
        <div className="root">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
