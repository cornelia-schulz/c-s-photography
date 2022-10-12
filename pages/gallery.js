import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'

export default function Photographs() {
    return (
    <>
      <div>
        <Head>
          <title>Galleries - Cornelia Schulz Photography</title>
        </Head>
        <h1>Photographs</h1>
        <Image
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            width={1000}
            height={750}
        />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </>
    )
  }

  Photographs.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Navbar page="photographs" />
        {page}
      </Layout>
    )
  }