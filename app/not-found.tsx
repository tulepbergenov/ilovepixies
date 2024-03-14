import { appTitle } from "@/_shared/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Not Found"),
};

const Home = () => {
  return (
    <section>
      <header>
        <h1>Not Found</h1>
      </header>
    </section>
  );
};

export default Home;
