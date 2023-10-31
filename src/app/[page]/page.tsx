import WhatsappButton from '@/components/whatsapp-button'
import json from '../../JSON/data.json'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import { Metadata } from 'next'
import Banner from '@/components/banner'
import About from '@/components/about'
import Services from '@/components/service'

export const runtime = 'edge'
export async function generateMetadata({
  params
}: {
  params: { page: string }
}): Promise<Metadata> {
  const page = json.data?.find((user) => params.page && user.username === params.page)
  if (!page) return notFound()

  const title = page.role ? `${page.name} | ${page.role}` : page.name

  return {
    title,
    description: page.about_section.description,
    openGraph: {
      type: 'website',
      url: 'https://skalaai.com.br',
      siteName: 'Skalaai',
      title: page.name,
      description: page.name,
      images: [`${page.about_section.image_url}`]
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gibifydev',
      site: 'https://skalaai.com.br',
      title,
      description: page.about_section.description,
      images: page.about_section.image_url
    }
  }
}



export default async function Page({ params }: { params: { page: string } }) {
  const page = json.data?.find((user) => params.page && user.username === params.page)
  if (!page) notFound()

  return (
    <>
      <Header
        menu={page.menu ? page.menu : null}
        name={page.name}
        username={page.username}
      />
      <Banner
        banner_desktop_image={page.banner_desktop_image}
        banner_mobile_image={page.banner_mobile_image}
      />
      <Services
        service_description={page.service_section.description}
        service_whatsapp_link={page.whatsapp_link}
        service_button_label={page.service_section.button_label || 'entrar em contata'}
        service_button_bg_color={page.service_section.service_button_bg_color || '#FFF'}
        service_button_label_color={page.service_section.service_button_label_color || '#333333'}
      />
      <About
        about_title={page.about_section?.title}
        about_description={page.about_section?.description}
        about_image={page.about_section?.image_url}
      />

      {page.whatsapp_link ? <WhatsappButton whatsapp_link={page.whatsapp_link} /> : null}
    </>
  )
}
