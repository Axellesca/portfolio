import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Next</title>
        <meta name="description" content="Portfolio Personal para muestra de Proyectos" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sen&display=swap" rel="stylesheet"/> */}
      </Head>

      <Navbar/>
    </div>
  )
}
