import Logo from '../Image/logo'
import Link from '../Link'
import MobileNav from './MobileNav'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between py-10">
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
    </>
  )
}
