import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from '../components/Link'
import Footer from '../components/Footer'
import MobileNav from '../components/Header/MobileNav'
import Logo from '../components/Image/logo'
import { SectionContainer } from '@/components/Section'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
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
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
