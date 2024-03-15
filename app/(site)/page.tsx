import { appTitle } from "@/_shared/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header className="sr-only">
            <h1>Daulet Tulepbergenov | Full-Stack Developer</h1>
          </header>
          <p>Hello World</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
