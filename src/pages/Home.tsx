import React from "react";
import "../styles/Home.css";
import Typed from "typed.js";
import Social from "../components/Social";

const Home: React.FC = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End", "Back End", "Full Stack"],
      typeSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <div className="home">
          <div className="name">Hi, I'm Gabriel Trifoni!</div>
          <div className="desc">
            I'm a <span ref={el} />Developer
            <br />
            and a Computer Science Student.
          </div>
          <div className="social">
            <Social></Social>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
