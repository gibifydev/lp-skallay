import { Metadata } from 'next'
export const runtime = 'edge'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home | Gibify Link',
    description: 'Simplificando a maneira de compartilhar seus links na internet.',
    openGraph: {
      type: 'website',
      title: 'Home | Gibify Link',
      description: 'Simplificando a maneira de compartilhar seus links na internet.',
      url: 'https://gibify.link',
      siteName: 'Gibify Link',
      images: ['/images/gibify-link-logo.png']
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gibifydev',
      title: 'Home | Gibify Link',
      description: 'Simplificando a maneira de compartilhar seus links na internet.',
      site: 'https://gibify.link',
      images: '/images/gibify-link-logo.png'
    },
    verification: {
      google: 'NZ-zRsj3eU2EdmeG8llgzrBIHSozkP7W9illfOmVr0M',
      other: {
        'facebook-domain-verification': 'alnqlc2yhr8rblyge29wouyoon2483'
      }
    }
  }
}

export default function HomePage() {
  return (
    <div>HOME</div>
  )
}
