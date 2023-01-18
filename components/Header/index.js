import Logo from '../Image/logo'
import Link from '../Link'
import MobileNav from './MobileNav'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { useEffect, useState } from 'react'

export default function Header() {
  const [background, setBackground] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 5) setBackground(true)
      else setBackground(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <>
      <div className={`relative z-10`}>
        <header
          className={`${
            background ? 'bg-gray-900' : 'bg-transparent'
          } fixed top-0 left-0 right-0 flex items-center justify-between py-10 antialiased transition-colors duration-500`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="mr-3 h-16 w-16">
                <Logo widthImg={64} heightImg={64} />
              </div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="h-6 text-center text-3xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              </Link>
            </div>
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
      </div>
    </>
  )
}
