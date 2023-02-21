import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

export default function FourOhFour() {
  return (
    <div page="404">
      <Head>
        <title>Cornelia Schulz Photography</title>
      </Head>
      <h1 className="text-2xl text-white text-center mb-6 mt-6">404 - Page Not Found</h1>
      <Link href="/">
        Go back home
      </Link>
    </div>
  )
}

FourOhFour.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar page="404" />
    </Layout>
    )
}