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
import { Heading,} from "@chakra-ui/react"

export default function Home() {
  return (
    <div className={"styles.container"} >
      <Head>
        <title>kkk</title>

      </Head>

      <main>
        <h1 className="text-7xl font-bold underline">GIOOOOOOOOOOO</h1>
        <Heading className="font-bold underline" >Ciaooooooooo</Heading>
      </main>
    </div>
  )
}
