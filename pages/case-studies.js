import Image from 'next/image'
import {request} from '../lib/datocms'
import { WORK_QUERY} from '../lib/queries'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Button from '../components/Button'
import TwoColLayout from '../components/TwoColLayout'
import Link from 'next/link'

export async function getStaticProps() {

    const work = await request({
        query: WORK_QUERY,
    })

    return {
        props: {
        work: work.allCaseStudies,
        },
    }
}

export default function CaseStudies({work}) {
    return (
        <>
        <div className='bg-black'>
            <div className='bg-red text-black rounded-bl-[16.5rem]'>
                <Header colour='black'/>
                <Logo url='/ROOT-logo-white.svg'/>
                <div className='mx-7'>
                    <div className='uppercase text-3xl md:text-4xl border-t border-black py-10'>Case Studies</div>
                </div>
                <div className='grid grid-cols-2 gap-7 ml-5 mr-[10vw]'>
                {work.map((proj, i) => (
                    <div key={i} className={`${proj.size === 'medium' ? 'col-span-1' : 'col-span-2'}`}>
                        {proj.size === 'medium' 
                        ? <div className='space-y-3'>
                            <div className='relative w-full h-[60vh]'>
                                <Image src={proj.thumbnail.url} layout='fill' objectFit='cover' className='rounded-2xl'/>
                            </div>
                            <div className='rounded-2xl border border-black p-2 w-fit hover:bg-white'>
                            <Link href={`/work/${proj.slug}`}>
                                <a>
                                    <div className='uppercase'>{proj.client}</div>
                                    <div>{proj.title}</div>
                                    <div className='mt-2'>+</div>
                                </a>
                            </Link>
                            </div>
                        </div>
                        : <div className='flex space-x-5'>
                            <div className='relative w-full h-[60vh]'>
                                <Image src={proj.thumbnail.url} layout='fill' objectFit='cover' className='rounded-2xl'/>
                            </div>
                            <div className='rounded-2xl border border-black p-2 h-fit hover:bg-white'>
                                <Link href={`/work/${proj.slug}`}>
                                    <a>
                                        <div className='uppercase'>{proj.client}</div>
                                        <div>{proj.title}</div>
                                        <div className='mt-2'>+</div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        }
                    </div>
                ))}
                </div>
                <div className='flex justify-end mx-7 py-10'>
                    <div className='relative h-[50vh] w-[50vw]'>
                        <Image src='/work-illustration.svg' objectFit='contain' layout='fill'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}