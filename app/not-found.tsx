import { appTitle } from "@/_shared/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Not Found"),
};

const Home = () => {
  return (
    <section>
      <div className="container">
        <div>
          <header>
            <h1>Not Found</h1>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Home;
