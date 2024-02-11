import Landing from "./components/2-landing/landing";
import Header from "./components/1-header/header";
import Connect from "./components/4-connect/connect";
import Footer from "./components/5-footer/footer";
import Main from "./components/3-main/main";
import { useEffect, useState } from "react";

function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    });
  }, []);
  return (
    <div className="container">
      <Header />
      <Landing />
      <div className="devider"></div>
      <Main />
      <div className="devider"></div>
      <Connect />
      <div className="devider"></div>
      <Footer />

      <a
        href="/header"
        style={{ opacity: showScrollBTN ? 1 : 0, transition: ".8s" }}
      >
        <button className="icon-circle-up"></button>
      </a>
    </div>
  );
}

export default App;
