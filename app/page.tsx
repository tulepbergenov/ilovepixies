import { appTitle } from "@/_shared/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <header>
        <h1>Hello World</h1>
      </header>
    </section>
  );
};

export default Home;
