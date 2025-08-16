import { siteMeta } from 'lib/constants'
const { siteTitle, siteUrl } = siteMeta
import { openGraphMetadata, twitterMetadata } from 'lib/baseMetadata'
import RiveAnimation from 'components/rive-animation'

export default async function Home() {
  return (
    <RiveAnimation src="/0802.riv" stateMachines="State Machine 1" width="200px" height="200px" />
  )
}
const pageTitle = 'first'
const pageDesc = 'ファースト'
const ogpTitle = `${pageTitle} | ${siteTitle}`
// const ogpUrl = new URL('/blog', siteUrl).toString()
const ogpUrl = new URL(siteUrl).toString()
export const metadata = {
  title: pageTitle,
  description: pageDesc,
  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
  },
  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  },
}
