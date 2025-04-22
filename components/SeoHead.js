import Head from 'next/head'

export default function SeoHead({ seo, fallbackTitle, fallbackImage }) {
  const ogImage = seo?.image?.url || fallbackImage

  console.log(seo)
  return (
    <Head>
      <title>{seo?.title || fallbackTitle}</title>
      <meta name="description" content={seo?.description || ''} />
      <meta property="og:title" content={seo?.title || fallbackTitle} />
      <meta property="og:description" content={seo?.description || ''} />
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Head>
  )
}
