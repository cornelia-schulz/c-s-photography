import '../styles/reset.css'
import '../styles/globals.css'
import { GoogleAnalytics } from "nextjs-google-analytics"

if (process.env.NODE_TLS_REJECT_UNAUTHORIZED) process.env.NODE_TLS_REJECT_UNAUTHORIZED

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
