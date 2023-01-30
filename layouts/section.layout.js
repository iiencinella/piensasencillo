import CardLargest from '@/components/Card/largestMode'
import Logo from '@/components/Image/logo'

import blogData from '@/data/blogData'
import projectsData from '@/data/projectsData'
import serviceData from '@/data/serviceData'
import siteMetadata from '@/data/siteMetadata'

import Link from 'next/link'

const paths = {
  services: serviceData,
  blog: blogData,
  projects: projectsData,
}

export default function SectionLayout({ routePath, title }) {
  const path = '/' + routePath
  const file = paths[routePath]

  return (
    <>
      <div id={routePath} className="space-y-2 pt-6 pb-8 md:space-y-5">
        <Link href={path}>
          <h1 className="text-3xl font-extrabold underline leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </Link>
      </div>
      <Link href={path}>Ver más ...</Link>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {file.map((d) => (
            <CardLargest
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </>
  )
}
