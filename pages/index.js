import { PageSEO } from '@/components/SEO'
import { SectionBlog, SectionPortfolio, SectionServices } from '@/components/Section'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="w-full">
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
    </>
  )
}
