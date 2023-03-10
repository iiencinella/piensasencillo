import Link from '@/components/Link'
import PageTitle from '@/components/Post/PageTitle'
import SectionContainer from '@/components/Section/_container.section'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Post/Tag'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/Image/social-icons'
import { useRouter, withRouter } from 'next/router'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, images, tags } = frontMatter
  const router = useRouter()
  const localPath = router.asPath.substring(1)

  const sharedRoutes = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${siteMetadata.siteUrl}${localPath}`,
    twitter: `https://twitter.com/intent/tweet?text=${siteMetadata.siteUrl}${localPath}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${siteMetadata.siteUrl}${localPath}`,
  }

  const previewPath = router.pathname.substring(0, router.pathname.lastIndexOf('/'))
  let previewSection = ''
  if (router.pathname.includes('/blog')) previewSection = 'a Blog'
  else if (router.pathname.includes('/services')) previewSection = 'a Servicios'
  else if (router.pathname.includes('/laboratory')) previewSection = 'a Laboratorio'
  else if (router.pathname.includes('/project')) previewSection = 'a Proyectos'
  else previewSection = 'al Inicio'

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article>
        <div className="xl:divide-y xl:dark:divide-gray-200 xl:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              {!router.pathname.includes('/services') && (
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Publicado en</dt>
                    <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-400">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </dd>
                  </div>
                </dl>
              )}
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-700 pb-8 dark:divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Linkedin</dt>
                        <dd>
                          {!router.pathname.includes('/services') && author.linkedin && (
                            // <Link
                            //   href={author.linkedin}
                            //   className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            // >
                            //   {author.twitter.replace('https://twitter.com/', '@')}
                            // </Link>
                            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
                          )}
                          {router.pathname.includes('/services') && (
                            <>
                              <div>Comunicate conmigo</div>
                              <SocialIcon kind="whatsapp" href={siteMetadata.whatsapp} size="5" />
                            </>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-700 dark:divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
              {!router.pathname.includes('/services') && (
                <div className="grid grid-flow-col content-center py-3 px-1">
                  <h3>Comp??rtelo en las redes</h3>
                  <SocialIcon kind="facebook" href={sharedRoutes.facebook} size="6" />
                  <SocialIcon kind="twitter" href={sharedRoutes.twitter} size="6" />
                  <SocialIcon kind="linkedin" href={sharedRoutes.linkedin} size="6" />
                </div>
              )}
            </div>
            <footer>
              <div className="divide-gray-700 text-sm font-medium leading-5 dark:divide-gray-200 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400">
                      Categor??as
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {/* {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400">
                          Art??culo previo
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400">
                          Siguiente Art??culo
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )} */}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={previewPath}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Volver {previewSection}
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
