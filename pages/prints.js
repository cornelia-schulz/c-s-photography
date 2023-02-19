import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div page="about">
      <Head>
        <title>Prints - Cornelia Schulz Photography</title>
      </Head>
      <h1 className="text-2xl text-center mb-6 mt-6">Prints</h1>
      <div className="grid place-content-center mb-8">
        <Image
          className="border-8 border-white-500"
          src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1676770737/Cornelia%20Schulz%20Photography/living-room-wall.jpg"
          alt="Galaxy"
          width={1020}
          height={600}
        />
      </div>
      <main className="flex flex-col md:flex-row">
        <article className="flex-auto md:w-40 mr-4">
          <h2 className="text-xl text-center m-5">Would you like one of my prints on your on your wall?</h2>
          <p className="mb-3">
            You can order most of my images directly at Red Bubble:
            <Link href="https://www.redbubble.com/people/firzhugh/shop?asc=u&ref=account-nav-dropdown">
              <a className="text-orange hover:underline pl-1 pr-1">
                Shop
              </a>
            </Link>
          </p>
          <p className="mb-3">The images are available in different shapes and sizes and can be shipped to almost anywhere.</p>
          <p className="mb-3">If you can't see the image you're looking for, please get in touch via the 
            <Link href="/contact"><a className="text-orange hover:underline pl-1 pr-1">Contact</a></Link>
            form and I will upload it for you.</p>
          
        </article>
        <aside className="grid place-content-center">
          <div>
            <Image
              src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1676773098/Cornelia%20Schulz%20Photography/desk.jpg"
              alt="Galaxy"
              width={600}
              height={370}
            />
          </div>
        </aside>
      </main>
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar page="about" />
      {page}
    </Layout>
  )
}