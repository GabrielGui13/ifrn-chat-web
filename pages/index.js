import Head from 'next/head';
import Link from 'next/link';

import Header from '../src/components/Header.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel WEBCHAT</title>
        <meta name="description" content="Chat do curso de Infoweb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main>
        <nav>
          <Link href="/login"><button>login</button></Link>
        </nav>
        <h1>Landing page do chat de Infoweb</h1>
      </main>
    </div>
  )
}
