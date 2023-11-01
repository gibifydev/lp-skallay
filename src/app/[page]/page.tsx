import { WhatsappButton } from '@/components/whatsapp-button'
import json from '../../JSON/data.json'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Metadata } from 'next'
import { Banner } from '@/components/banner'
import { About } from '@/components/about'
import { Services } from '@/components/service'
import { Highlight } from '@/components/highlight'

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
      title,
      description: page.about_section.description,
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
        header_bg_color={page.header.bg_color}
        header_text_color={page.header.text_color}
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
        service_button_label={page.service_section.button_label}
        service_button_bg_color={page.service_section.button_bg_color}
        service_button_label_color={page.service_section.button_label_color}
        service_bg_color={page.service_section.bg_color}
        service_description_color={page.service_section.description_color}
      />
      <About
        about_title={page.about_section?.title}
        about_description={page.about_section?.description}
        about_image={page.about_section?.image_url}
        about_bg_color={page.about_section.bg_color}
        about_description_color={page.about_section.description_color}
        about_title_color={page.about_section.title_color}
      />
      <Highlight
        highlight_title={page.highlight_section.title}
        highlight_description={page.highlight_section.description}
        highlight_bg_color={page.highlight_section.bg_color}
        highlight_button_bg_color={page.highlight_section.button_bg_color}
        highlight_button_label={page.highlight_section.button_label}
        highlight_button_label_color={page.highlight_section.button_label_color}
        highlight_button_link={page.whatsapp_link}
        highlight_description_color=''
        highlight_title_color={page.highlight_section.title_color}
      />

      {page.whatsapp_link ? <WhatsappButton whatsapp_link={page.whatsapp_link} /> : null}
    </>
  )
}
