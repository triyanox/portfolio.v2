import type { NextPage } from "next";
import CTA from "../components/ui/CTA";
import Hero from "../components/ui/Hero";
import Projects from "../components/ui/Projects";
import Skills from "../components/ui/Skills";
import Page from "../layouts/Page";

const Home: NextPage = () => {
  return (
    <Page
      title="Mohamed Achaq | Software Engineer, Designer, and Artist"
      description="Mohamed Achaq is a software engineer, designer, and artist based in Morocco. He specializes in designing and building full-stack web applications ."
      image="https://achaq.codes/static/images/achaq-codes-hero.png"
    >
      <Hero />
      <Skills />
      <Projects />
      <CTA />
    </Page>
  );
};

export default Home;
