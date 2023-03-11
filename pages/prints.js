import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Prints() {
  return (
    <div page="prints">
      <Head>
        <title>Prints - Cornelia Schulz Photography</title>
      </Head>
      <h1 className="text-2xl text-center mb-6 mt-6">Prints</h1>
      <div className="grid place-content-center mb-8">
        <Image
          src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1676770737/Cornelia%20Schulz%20Photography/living-room-wall.jpg"
          alt="Galaxy"
          className="main-image"
          width={980}
          height={550}
        />
      </div>
      <main className="flex flex-col md:flex-row">
        <article className="flex-auto md:w-40 mr-4">
          <h2 className="text-xl text-center m-5">Would you like one of my prints on your wall?</h2>
          <p className="mb-3">
            You can order most of my images directly at Red Bubble:
            <Link legacyBehavior href="https://www.redbubble.com/people/firzhugh/shop?asc=u&ref=account-nav-dropdown">
              <a className="text-orange hover:underline pl-1 pr-1" target="_blank" rel="noreferrer">
                Shop
              </a>
            </Link>
          </p>
          <p className="mb-3">The images are available in different shapes and sizes and can be shipped to almost anywhere.</p>
          <p className="mb-3">If you can&apos;t see the image you&apos;re looking for, please get in touch via the 
            <Link legacyBehavior href="/contact"><a className="text-orange hover:underline pl-1 pr-1">Contact</a></Link>
            form and I will upload it for you.</p>
          
        </article>
        <aside className="grid place-content-center">
          <div>
            <Image
              src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1676773098/Cornelia%20Schulz%20Photography/desk.jpg"
              alt="Tekapo print on a desk"
              className="main-image"
              width={500}
              height={265}
            />
          </div>
        </aside>
      </main>
    </div>
  )
}

Prints.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar page="prints" />
      {page}
    </Layout>
  )
}