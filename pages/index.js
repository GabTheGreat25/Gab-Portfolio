import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel’s Portfolio</title>
        <meta
          name="description"
          content="I’m a full stack developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
