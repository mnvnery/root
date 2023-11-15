import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name='viewport' content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Root</title>
      <meta name='description' content='Specialists in media planning and buying for charity. Two decades of sector insight and fundraising success. Get in touch and be a big fish for once.'/>
    </Head>
    <div className='bg-purple'><Component {...pageProps} /></div>
    </>
  )
}

export default MyApp
