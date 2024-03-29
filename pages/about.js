import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Image from 'next/image'

export default function About() {
  return (
    <div page="about">
      <Head>
        <title>About - Cornelia Schulz Photography</title>
      </Head>
      <h1 className="text-2xl text-center md:mt-20 mb-6 mt-6">About Cornelia Schulz</h1>
      <main className="flex flex-col md:mt-12 md:flex-row">
        <article className="flex-auto md:w-40 mr-4 text-lg">
          <p className="mb-3">
            Quite simply, I just love taking photos. Blending this with my
            fascination with the natural world provides me with heaps of
            inspiration.
          </p>
          <p className="mb-3">
            I feel lucky too, just having moved to New Zealand, a breathtaking
            and beautiful country with such huge diversity of natural elements,
            wildlife and seasons!
          </p>
          <p className="mb-3">
            My philosophy is a simple one - keep things as real as possible. I
            think my style of photography is very natural and expressive, after
            all photography is about capturing mood, expression and emotion
            through the lens and portraying them with an artistic vision. It is
            about telling your story through beautiful images.
          </p>
          <p className="mb-3">
            You can follow me on{" "}
            <a
              className="text-orange hover:underline"
              href="https://instagram.com/corneliaschulzphotography/"
            >
              Instagram
            </a>
            ,{" "}
            <a
              className="text-orange hover:underline"
              href="https://www.facebook.com/pages/Cornelia-Schulz-Photography/117213031666328?ref=hl"
            >
              Facebook
            </a>{" "}
            and{" "}
            <a
              className="text-orange hover:underline"
              href="https://www.flickr.com/photos/cornelia-schulz/"
            >
              Flickr
            </a>
            .
          </p>
          <p className="mb-3">
            I&apos;m a member of{" "}
            <a
              className="text-orange hover:underline"
              href="https://www.naturefirstphotography.org/"
            >
              Nature First.
            </a>
          </p>
        </article>
        <aside className="grid place-content-center">
          <div className="w-80 h-80">
            <Image
              src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1676927528/Cornelia%20Schulz%20Photography/CS.jpg"
              alt="Cornelia Schulz standing on a cliff smiling. There is an ocean view in the background."
              className="main-image"
              width={320}
              height={320}
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