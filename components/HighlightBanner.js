// components/HighlightBanner.js
import React from 'react'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'
import Button from './Button'

export default function HighlightBanner({ text, ctaText, ctaLink }) {
  return (
    <div className="relative flex bg-purple text-white py-3 px-4 z-50 overflow-hidden">
      <Marquee gradient={false} speed={50}>
        <div dangerouslySetInnerHTML={{__html: text }} className="text-sm md:text-lg font-semibold underlined"></div><span className='mx-2'>●</span>
      </Marquee>
      <div className='w-fit'>
      <Button href={ctaLink} text={ctaText} mainColour='w-max hover:bg-white hover:text-purple' />
      </div>
    </div>
  )
}
