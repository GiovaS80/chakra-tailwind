// import Link from 'next/link'
// import Layout from '../components/Layout'

// const IndexPage = () => (
//   <Layout title="Home | Next.js + TypeScript Example">
//     <h1 className="text-6xl font-bold underline">Hello Next.js 👋</h1>
//     <p>
//       <Link href="/about">About</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage

import Head from "next/head";
import { Heading, } from "@chakra-ui/react"
import ModalComponent from "../components/ModalComponent";

function testFun(){
  return(
    <>
      <h1>Sono Test</h1>
    </>
  )
}

export default function Home() {
  return (
    <div className={"styles.container"} >
      <Head>
        <title>Modal</title>
        <meta name="description" content="Generate by create next app" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <main>
        <Heading className="text-center font-bold underline m-8" >Welcome</Heading>
        <h1 className="text-center text-2xl font-bold underline m-8">Modal Test</h1>

        <ModalComponent/>
      </main>
    </div>
  )
}
