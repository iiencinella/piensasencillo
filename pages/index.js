import { PageSEO } from '@/components/SEO'
import Logo from '@/components/Image/logo'
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
        <div className="mt-4 flex flex-col text-center">
          <p>
            Mantenimiento de PC, notebooks{' -> '}
            <span className="text-blue-500">
              <Link href="/services/mantenimiento">Más info</Link>
            </span>
          </p>
          <p>
            Asesoramiento informático{' -> '}
            <span className="text-blue-500">
              <Link href="/services/asesoramiento">Más info</Link>
            </span>
          </p>
          <p>
            Armado de PC{' -> '}
            <span className="text-blue-500">
              <Link href="/services/armado">Más info</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
