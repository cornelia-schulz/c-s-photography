import '../styles/reset.css'
import '../styles/globals.css'
import { GoogleAnalytics } from "nextjs-google-analytics"

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
