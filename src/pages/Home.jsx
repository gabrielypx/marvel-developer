import "../styles/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";

function Home() {
  return (
    <div className="content-home">
      <div className="background-img">
        <Header />
        <Wrapper>
        <section className="informations-home">
          {/* Texts */}
          <div className="texts-home">
            <h1>Marvel developer</h1>
            <p>
              The application was built in React and using data provided by
              <br /> The Marvel Comics API. Here the characters, comics and
              movies <br />
              that make up the Marvel library were listed.
            </p>
          </div>
          {/* Buttons */}
          <div className="buttons-home">
            <a href="https://developer.marvel.com/"  className="buttons btn-visit-api">VISIT API</a>
            <a href="https://github.com/gabrielypx/marvel-developer" className="buttons btn-visit-project">VISIT PROJECT</a>
          </div>
        </section>
        </Wrapper>
        <Footer/>
      </div>
        
    </div>
  );
}

export default Home;
