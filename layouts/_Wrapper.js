import Footer from '../components/Footer'
import { SectionContainer } from '@/components/Section'
import Header from '@/components/Header'
import ScrollTopAndComment from '@/components/Post/ScrollTopAndComment'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <ScrollTopAndComment />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
