import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Logo({ widthImg, heightImg, srcImg }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <Image
      src={!srcImg ? siteMetadata.imageHome : srcImg}
      alt="logo"
      className="absolute mt-2"
      width={widthImg}
      height={heightImg}
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    ></Image>
  )
}
