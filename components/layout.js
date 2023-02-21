import Head from 'next/head'
import Footer from './footer'

const name = 'Cornelia'
export const siteTitle = 'Cornelia Schulz Photography'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between px-5 mx-auto my-3 max-w-7xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Cornelia Schulz Photography Portfolio"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  )
}