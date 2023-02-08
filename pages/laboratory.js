import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import laboratoryData from '@/data/laboratoryData'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Laboratorio - ${siteMetadata.headerTitle}`}
        description={siteMetadata.description}
      />
      <div className="divide-y dark:divide-gray-200 divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Laboratorio
          </h1>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
            Vamos a realizar experimentos e intentar romper la web para parender más
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {laboratoryData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
