import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Pagination from 'components/pagination'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import { eyecatchLocal } from 'lib/constants'
import { getPostBySlug, getAllSlugs } from 'lib/api'
import { extractText } from 'lib/extract-text'
import { prevNextPost } from 'lib/prev-next-post'

import { siteMeta } from 'lib/constants'
const { siteTitle, siteUrl } = siteMeta

import { openGraphMetadata, twitterMetadata } from 'lib/baseMetadata'

export default async function Post({ params }) {
  const { slug: slug } = await params
  const post = await getPostBySlug(slug)
  const { title, publishDate: publish, content, categories } = post
  const description = extractText(content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64
  const allSlugs = await getAllSlugs()
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug)
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:1152px) 1152ex,100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  )
}

export const dynamicParams = false
export async function generateStaticParams() {
  const allSlugs = await getAllSlugs()
  return allSlugs.map(({ slug }) => {
    return { slug: slug }
  })
}

export async function generateMetadata({ params }) {
  const { slug: slug } = await params
  const post = await getPostBySlug(slug)
  const { title: pageTitle, publishDate: publish, content, categories } = post
  const description = extractText(content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const ogpTitle = `${pageTitle} | ${siteTitle}`
  const ogpUrl = new URL(`/blog/${slug}`, siteUrl).toString()

  const mataData = {
    title: pageTitle,
    description: description,
    openGraph: {
      ...openGraphMetadata,
      title: ogpTitle,
      description: description,
      url: ogpUrl,
      images: [
        {
          url: eyecatch.url,
          width: eyecatch.width,
          height: eyecatch.height,
        },
      ],
    },
    twitter: {
      ...twitterMetadata,
      title: ogpTitle,
      description: description,
      images: [eyecatch.url],
    },
  }
  return mataData
}
