import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name='viewport' content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Root Media</title>
      <meta name='description' content='Specialists in media planning and buying for charity. Two decades of sector insight and fundraising success. Get in touch and be a big fish for once.'/>
      <script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NZBLC5W');
          `}
      </script>
    </Head>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
