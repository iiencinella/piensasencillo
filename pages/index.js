import Logo from '@/components/Image/logo'
import { PageSEO } from '@/components/SEO'
import { SectionBlog, SectionPortfolio, SectionServices } from '@/components/Section'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex h-full w-full flex-col justify-center">
        <div className="relative grid justify-items-center">
          <div className="absolute pt-1/10 lg:pt-16">
            <div className="h-52 w-52 animate-ping rounded-full bg-yellow-200 opacity-75"></div>
          </div>
          <Logo widthImg={500} heightImg={500} />
        </div>
        <div className="grid justify-items-center">
          <span className="text-center mt-10 text-3xl border-solid border-2 border-b-4 rounded-full dark:border-gray-200 w-60 dark:hover:border-yellow-200 text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-gray-200 dark:text-gray-200 dark:hover:text-yellow-200 antialiased transition-colors duration-1000">
            <Link href="#services">Ver servicios</Link>
          </span>
        </div>
        <div>
          <div>
            <SectionServices />
          </div>
          <div>
            <SectionBlog />
          </div>
          <div>
            <SectionPortfolio />
          </div>
        </div>
      </div>
    </>
  )
}
