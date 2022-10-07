import Layout from "../components/layout"
import Image from 'next/image'

export default function About() {
  return (
    <Layout page="about">
      <h1 className="text-2xl text-center mb-6">About Cornelia Schulz</h1>
      <main className="flex">
        <article className="flex-auto w-40 mr-4">
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
        <aside>
          <div className="border-8">
            <Image
              src="https://res.cloudinary.com/cornelia-schulz-photography/image/upload/v1654638588/Cornelia%20Schulz%20Photography/51365510750_14a78ee09c_k_ue2pqq.jpg"
              alt="Galaxy"
              width={300}
              height={300}
            />
          </div>
        </aside>
      </main>
    </Layout>
  );
}
