import siteMetadata from '@/data/siteMetadata'

const ComparativeMinorDate = (postDate, currentDate) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const compDate1 = new Date(postDate).toLocaleDateString(siteMetadata.localeComparative, options)
  const compDate2 = new Date(currentDate).toLocaleDateString(
    siteMetadata.localeComparative,
    options
  )

  return compDate1 <= compDate2
}
export default ComparativeMinorDate
