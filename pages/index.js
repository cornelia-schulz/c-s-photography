import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { search, mapImageResources } from '../lib/cloudinary'

export async function getStaticProps() {
  const results = await search({
    expression: 'folder="Cornelia Schulz Photography"'
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
      <section className="grid gap-5 md:grid-cols-2 md:grid-rows-2 mx-3 mt-6 pl-3">
        <div className="relative">
          <Link href="/gallery">
            <a>
              <Image
                src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/Forest%20Walk.jpg"
                alt="Link to gallery"
                className="main-image"
                layout="responsive"
                width={400}
                height={250}
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </a>
          </Link>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-4xl">
            <Link href="/gallery">
              <a className="hover:text-orange">Photographs</a>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Link href="/about">
            <a>
              <Image
                src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/Forest%20Walk.jpg"
                alt="Link to About me page"
                className="main-image"
                layout="responsive"
                width={400}
                height={250}
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </a>
          </Link>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-4xl">
            <Link href="/about">
              <a className="hover:text-orange">About</a>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Link href="/contact">
            <a>
              <Image
                src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/Forest%20Walk.jpg"
                alt="Link to Contact me page"
                className="main-image"
                layout="responsive"
                width={400}
                height={250}
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </a>
          </Link>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-4xl">
            <Link href="/contact">
              <a className="hover:text-orange">Contact</a>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Link href="/contact">
            <a>
              <Image
                src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/Forest%20Walk.jpg"
                alt="Link to my shop on Redbubble"
                className="main-image"
                layout="responsive"
                width={400}
                height={250}
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </a>
          </Link>
          <div className="overlay absolute inset-x-0 inset-y-1/2 h-16 bg-black/50 flex justify-center items-center text-4xl">
            <Link href="https://www.redbubble.com/people/firzhugh/shop?asc=u&ref=account-nav-dropdown">
              <a className="hover:text-orange" target="_blank" rel="noreferrer">Shop</a>
            </Link>
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