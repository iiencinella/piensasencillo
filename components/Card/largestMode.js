import siteMetadata from '@/data/siteMetadata'

import Image from '../Image'
import Link from '../Link'

const maxWidth = 300
const maxHeight = 300

const CardLargest = ({ title, description, imgSrc, href }) => {
  return (
    <div className="md p-4 w-full">
      <div className="h-full overflow-hidden rounded-xl bg-gradient-to-r p-[3px] dark:from-[#bdc3c7] dark:to-[#2c3e50] from-[#0F2027] to-[#2C5364] animate-gradient-xy">
        <div className="grid grid-cols-3 bg-yellow-200 dark:bg-gray-900 rounded-lg p-4">
          <div className="p-6 col-span-2">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
            <p className="prose mb-3 max-w-none text-gray-700 dark:text-gray-400">{description}</p>
          </div>
          {imgSrc &&
            (href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center h-full"
                  width={maxWidth}
                  height={maxHeight}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={maxWidth}
                height={maxHeight}
              />
            ))}
          {!imgSrc &&
            (href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  src={siteMetadata.imageHome}
                  alt="logo"
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={maxWidth}
                  height={maxHeight}
                ></Image>
              </Link>
            ) : (
              <Image
                src={siteMetadata.imageHome}
                alt="logo"
                className="object-cover object-center md:h-36 lg:h-48"
                width={maxWidth}
                height={maxHeight}
              ></Image>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CardLargest
