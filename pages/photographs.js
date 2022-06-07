import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Photographs() {
    return (
    <>
      <Layout>
        <Head>
          <title>Image Galleries - Cornelia Schulz Photography</title>
        </Head>
        <h1>Photographs</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
    );
  }