import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { search, mapImageResources } from '../lib/cloudinary'

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""'
  })
  const { resources } = results
  const images = mapImageResources(resources)
  return {
    props: {
      images
    },
  }
}

export default function Home({ images }) {
  return (
    <>
      <section className="grid gap-5 md:grid-cols-2 md:grid-rows-2 mx-3 pl-3">
        <div className="relative border-solid border-8 border-grey-light-800">
          <Link href="/gallery">
          <Image
            className="photograph"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </Link>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-4xl">
            <Link href="/gallery">Photographs</Link>
          </div>
        </div>
        <div className="relative border-solid border-8 border-grey-light-800">
          <Link href="/about">
          <Image
            className="photograph"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </Link>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-4xl">
            <Link href="/about">About</Link>
          </div>
        </div>
        <div className="relative border-solid border-8 border-grey-light-800">
          <Link href="/contact">
          <Image
            className="photograph"
            src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
            alt="Galaxy"
            layout="responsive"
            width={400}
            height={250}
          />
          </Link>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-4xl">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar page="home" />
      {page}
    </Layout>
  )
}