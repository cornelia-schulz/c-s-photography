import Head from 'next/head'
import Footer from './footer'
// import Script from 'next/script'

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
      <main>
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script> */}
        {children}
      </main>
      <Footer />
    </div>
  )
}