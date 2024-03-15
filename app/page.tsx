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
          <header>
            <h1>Hello World</h1>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Home;
