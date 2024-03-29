import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Image from 'next/image'

export default function FourOhFour() {
  return (
      <div>
        <Head>
          <title>Cornelia Schulz Photography - 404</title>
        </Head>
          <h1 className="text-center text-4xl my-4">404 - Page Not Found</h1>
          <div className="flex justify-center mb-10">
            <Image
              src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1677057980/Cornelia%20Schulz%20Photography/Humpback.jpg"
              alt="Cornelia Schulz Photography Logo"
              className="main-image"
              width={500}
              height={200}
            />
          </div>
          <p className="text-center">
            <Link className="text-lg hover:text-orange" href="/">
              Jump back home
            </Link>
          </p>
      </div>
  )
}

FourOhFour.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar page="success" />
      {page}
    </Layout>
  )
}