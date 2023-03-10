import Logo from '@/components/Image/logo'
import { PageSEO } from '@/components/SEO'
import { SectionContainer } from '@/components/Section'
import siteMetadata from '@/data/siteMetadata'
import SectionLayout from '@/layouts/section.layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex h-full w-full flex-col justify-center">
        <div className="relative grid justify-items-center">
          <div className="absolute pt-1/10 lg:pt-16">
            <div className="h-52 w-52 max-[640px]:h-44 max-[640px]:w-44 animate-ping rounded-full bg-yellow-200 blur-sm"></div>
          </div>
          <Logo widthImg={500} heightImg={500} />
        </div>
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <span className="text-center mt-10 text-base border-solid border-2 border-b-4 rounded-full dark:border-gray-200 w-28 dark:hover:border-yellow-200 text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-gray-200 dark:text-gray-200 dark:hover:text-yellow-200 antialiased transition-colors duration-1000">
            <Link href="#services">Servicios</Link>
          </span>
          <span className="text-center mt-10 text-base border-solid border-2 border-b-4 rounded-full dark:border-gray-200 w-28 dark:hover:border-yellow-200 text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-gray-200 dark:text-gray-200 dark:hover:text-yellow-200 antialiased transition-colors duration-1000">
            <Link href="#blog">Blog</Link>
          </span>
          <span className="text-center mt-10 text-base border-solid border-2 border-b-4 rounded-full dark:border-gray-200 w-28 dark:hover:border-yellow-200 text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-gray-200 dark:text-gray-200 dark:hover:text-yellow-200 antialiased transition-colors duration-1000">
            <Link href="#projects">Proyectos</Link>
          </span>
        </div>
        <div className="mt-20">
          <SectionContainer>
            <SectionLayout title={'Servicios'} routePath={'services'} />
            <SectionLayout title={'Blog'} routePath={'blog'} />
            <SectionLayout title={'Portafolio'} routePath={'projects'} />
          </SectionContainer>
        </div>
      </div>
    </>
  )
}
