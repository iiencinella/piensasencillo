import Link from 'next/link'

export default function SectionServices() {
  return (
    <>
      <div id="services" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Servicios
          </h1>
        </div>
        <div className="mt-4 flex flex-col text-center">
          <p>
            Mantenimiento de PC, notebooks{' -> '}
            <span className="text-blue-500">
              <Link href="/services/mantenimiento">Más info</Link>
            </span>
          </p>
          <p>
            Asesoramiento informático{' -> '}
            <span className="text-blue-500">
              <Link href="/services/asesoramiento">Más info</Link>
            </span>
          </p>
          <p>
            Armado de PC{' -> '}
            <span className="text-blue-500">
              <Link href="/services/armado">Más info</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
