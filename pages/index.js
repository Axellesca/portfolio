import Head from "next/head";
import Image from "next/image";
import { Experiencia } from "../components/Experiencia";
import { Footer } from "../components/Footer";
import { Info } from "../components/Info";
import { Navbar } from "../components/Navbar";
import { StackIcons } from "../components/StackIcons";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Next</title>
        <meta
          name="description"
          content="Portfolio Personal para muestra de Proyectos"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta accessKey="portfolio, linkedin, github" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sen&display=swap" rel="stylesheet"/> */}
      </Head>
      {/* NavBar */}
      <Navbar />
      {/* Info/Exp */}
      <Info />
      {/* Stack */}
      <StackIcons />
      {/* Experiencia */}
      <Experiencia />
      {/* Footer */}
      <Footer />
    </div>
  );
}
