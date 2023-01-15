import serviceData from '@/data/serviceData'
import Link from 'next/link'
import Card from '../Card/Card'

export default function SectionServices() {
  return (
    <>
      <div id="services" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Servicios
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap max-h-screen">
          {serviceData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              href={d.href}
              maxWidthCard={'100%'}
            />
          ))}
        </div>
      </div>
    </>
  )
}
