import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Logo() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <Image
      src={siteMetadata.imageHome}
      alt="logo"
      className="absolute mt-2"
      width={500}
      height={500}
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    ></Image>
  )
}
