import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Center from '../components/Center'
import 'tachyons'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Background Generator</title>
        <meta name="description" content="Generate background gradients" />
        <link rel="icon" href="/icon.png" />
        <link rel="stylesheet" href="style.css"></link>
      </Head>
      
      <Center></Center>
      
    </div>
  )
}
