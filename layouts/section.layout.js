import Card from '@/components/Card'
import blogData from '@/data/blogData'
import projectsData from '@/data/projectsData'
import serviceData from '@/data/serviceData'
import Link from 'next/link'

export default function SectionLayout({ routePath, title }) {
  const path = '/' + routePath
  return (
    <>
      <div id={routePath} className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <Link href={path}>Ver más ...</Link>
        {routePath === 'services' && (
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {serviceData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  // imgSrc={d.imgSrc}
                  href={d.href}
                  maxWidthCard="100%"
                />
              ))}
            </div>
          </div>
        )}
        {routePath === 'blog' && (
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {blogData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  // imgSrc={d.imgSrc}
                  href={d.href}
                  maxWidthCard="100%"
                />
              ))}
            </div>
          </div>
        )}
        {routePath === 'projects' && (
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {projectsData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  // imgSrc={d.imgSrc}
                  href={d.href}
                  maxWidthCard="100%"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
