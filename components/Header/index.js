import Logo from '../Image/logo'
import Link from '../Link'
import MobileNav from './MobileNav'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  let pathImage = siteMetadata.logoHome

  if (router.pathname.includes('/services')) pathImage = siteMetadata.logoService
  if (router.pathname.includes('/projects')) pathImage = siteMetadata.logoProject
  if (router.pathname.includes('/blog')) pathImage = siteMetadata.logoLibrary

  return (
    <>
      <header className="flex items-center justify-between py-10">
        <div className="flex items-center justify-between">
          <div className="mr-3 h-20 w-20">
            <Logo widthImg={80} heightImg={80} srcImg={pathImage} />
          </div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="h-6 text-center text-3xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <MobileNav />
        </div>
      </header>
    </>
  )
}
