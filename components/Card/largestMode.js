import Image from '../Image'
import Logo from '../Image/logo'
import Link from '../Link'

const CardLargest = ({ title, description, imgSrc, href }) => {
  return (
    <div className="md p-4 w-full">
      <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
        <div className="grid grid-cols-3">
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
            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          </div>
          {imgSrc &&
            (href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center h-full"
                  width={300}
                  height={300}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={300}
                height={300}
              />
            ))}
          {!imgSrc && <Logo widthImg={300} heightImg={300} />}
        </div>
      </div>
    </div>
  )
}

export default CardLargest
