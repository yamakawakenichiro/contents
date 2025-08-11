import Image from 'next/image'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import Accordion from 'components/accordion'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import eyecatch from 'images/about.jpg'

import { siteMeta } from 'lib/constants'
const { siteTitle, siteUrl } = siteMeta

import { openGraphMetadata, twitterMetadata } from 'lib/baseMetadata'

export default function About() {
  return (
    <Container>
      <Hero title="About" subtitle="About development activities" riveOn />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          width={1920}
          height={960}
          sizes="(min-width:1152px)1152px,100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>アジアの妖怪・伝説の世界へようこそ</h2>
            <p>
              アジア、特に日本、韓国、中国といった東アジアの国々には、古くから語り継がれてきた多様な妖怪や伝説の生き物が存在します。これらは単なる空想の産物ではなく、それぞれの地域の自然環境、歴史、宗教、人々の暮らし、そして倫理観が色濃く反映された、文化の深層を物語る存在です。
            </p>
            <p>
              例えば、日本では水辺の守り神であり、いたずら好きでもある「河童」や、神通力を持つ山の精霊「天狗」、そして人々を惑わす妖艶な「九尾の狐」などが有名です。これらは自然への畏敬の念や、社会の秩序、人間の内面的な葛藤を表しています。
            </p>
            <p>
              韓国では、道具に魂が宿るとされる陽気な「トッケビ」や、人間に化けて肝を求めるが時に人間になりたがる悲しい運命の「九尾狐（クミホ）」、そして天上の美しい「チョンニョ（天女）」などが、人々の喜怒哀楽や善悪の概念と深く結びついています。
            </p>
            <p>
              そして中国では、帝王の象徴であり水の神でもある「龍」、聖人が現れる際に姿を見せる平和の象徴「麒麟」、そして百鳥の王とされる高貴な「鳳凰」といった瑞獣が、権威、繁栄、吉祥の象徴として国家や人々の精神世界に深く根ざしています。また、「鬼（グイ）」のように、死後の世界や悪霊といった概念も広範にわたります。
            </p>
            <h2>FAQ</h2>
            <Accordion heading="妖怪や伝説の生き物は、本当に存在したのですか？">
              <p>
                私たちが解説している妖怪や伝説の生き物は、歴史的記録や科学的根拠に基づいて実在が証明されたものではありません。
                これらは主に、人々の想像力、信仰、口承伝承によって語り継がれてきた存在です。しかし、それらは当時の人々の自然観、倫理観、社会の仕組み、そして不安や希望を映し出す、非常に重要な文化的な象徴であると考えています。
              </p>
            </Accordion>
            <Accordion heading="サイトの情報はどこから得ていますか？">
              <p>
                サイトの情報は、各国の民間伝承、古典文献、歴史書、神話集、学術論文、信頼できる専門書などを参考に作成しています。可能な限り正確で、かつそれぞれの文化背景を尊重した情報提供を心がけています。
              </p>
            </Accordion>
            <Accordion heading="サイトのコンテンツは今後増えていきますか？">
              <p>
                はい、このサイトは定期的に新しい妖怪や伝説の生き物の解説、関連する文化背景のコラムなどを追加していく予定です。
                東アジアにはまだまだ魅力的な物語がたくさんありますので、どうぞご期待ください。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}

const pageTitle = 'アバウト'
const pageDesc = 'About development activities'
const ogpTitle = `${pageTitle} | ${siteTitle}`
const ogpUrl = new URL('/about', siteUrl).toString()
export const metadata = {
  title: pageTitle,
  description: pageDesc,
  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
    images: [
      {
        url: eyecatch.src,
        width: eyecatch.width,
        height: eyecatch.height,
      },
    ],
  },
  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
    images: [eyecatch.src],
  },
}
