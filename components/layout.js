import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

const name = 'Cornelia'
export const siteTitle = 'Cornelia Schulz Photography'

export default function Layout({ children, pageClass }) {
  return (
    <div className="flex flex-col h-screen justify-between px-5 mx-auto my-3 max-w-7xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Cornelia Schulz Photography Portfolio"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header id="top" className="w-full flex flex-col fixed relative bg-white pin-t pin-r pin-l">
        <Navbar page={pageClass} />
      </header>
      <main className="mb-4">{children}</main>
      <Footer />
    </div>
  );
}