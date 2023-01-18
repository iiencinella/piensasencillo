import Footer from '../components/Footer'
import { SectionContainer } from '@/components/Section'
import Header from '@/components/Header'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="mt-44 mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
