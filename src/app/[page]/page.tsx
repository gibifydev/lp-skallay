import json from '../../JSON/data.json'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const runtime = 'edge'

export async function generateMetadata({
  params
}: {
  params: { page: string }
}): Promise<Metadata> {
  const page = json.data?.find((user) => params.page && user.username === params.page)
  if (!page) return notFound()

  return {
    title: page.metadata?.title,
    description: page.metadata.description,
    openGraph: {
      type: 'website',
      url: 'https://gibify.link',
      siteName: 'Gibify Link',
      title: page.metadata?.title,
      description: page.metadata.description,
      images: [`${page.image}`]
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gibifydev',
      site: 'https://gibify.link',
      title: page.metadata?.title,
      description: page.metadata.description,
      images: `${page.image}`
    }
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = json.data?.find((user) => params.page && user.username === params.page)
  if (!page) notFound()

  return <div>página aqui</div>
}
