import { Metadata } from 'next'
export const runtime = 'edge'
import CloudsIcon from '../components/icons/clouds'
import SearchIcon from '../components/icons/search'
import SecurityIcon from '../components/icons/security'
import BarChartIcon from '../components/icons/barchart'
import RockeIcon from '../components/icons/rocket'

import { WhatsappButton } from '@/components/whatsapp-button'
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SkalaAI - Soluções digitais para o seu negócio',
    description: 'Sua Landing Page personalizada, ideal para o seu negócio.',
    openGraph: {
      type: 'website',
      title: 'SkalaAI - Soluções digitais para o seu negócio',
      description: 'Sua Landing Page personalizada, ideal para o seu negócio.',
      url: 'https://skalaai.com',
      siteName: 'SkalaAI',
      images: ['/logo_skalaai.png']
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@gibifydev',
      title: 'Home | Gibify Link',
      description: 'Sua Landing Page personalizada, ideal para o seu negócio.',
      site: 'https://skalaai.com',
      images: '/logo_skalaai.png'
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
    <div id="landingpage" className="flex flex-col w-full">
      <section id="home" className="flex flex-col min-h-screenh-full">
        <div className="shadow-md">
          <div className="flex flex-row md:justify-between justify-center items-center max-w-5xl w-full mx-auto h-24">
            <div className="rounded-full">
              <Image
                src="/logo_skalaai.png"
                alt="Card cover image"
                className="max-w-full h-auto"
                width={200}
                height={200}
                priority
                quality={100}
              />
            </div>

            <div className="flex items-center mt-8 mb-4 lg:m-0 lg:ml-auto space-x-6 hidden md:block">
              <a className="cursor-pointer" href="#sobre">
                Sobre
              </a>
              <a className="cursor-pointer" href="#servico">
                Serviços
              </a>
              <a className="cursor-pointer" href="#contato">
                Contatos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-700 py-18">
        <div className="flex flex-row justify-between max-w-5xl mx-auto">
          <div className="w-full md:w-5/2 pb-4 pt-32 flex flex-col text-center p-4">
            <h2 className="text-3xl mb-4 font-semibold text-white">Landing Pages Personalizadas</h2>

            <button className="flex items-center justify-center rounded-full bg-white py-2 px-4 mt-2">
              <CloudsIcon /> Um ano hospedagem Grátis
            </button>

            <button className="flex items-center justify-center rounded-full bg-white py-2 px-4 mt-2">
              <SearchIcon /> Otimizada para SEO
            </button>

            <button className="flex items-center justify-center rounded-full bg-white py-2 px-4 mt-2">
              <SecurityIcon /> Certificado SSL
            </button>

            <button className="flex items-center justify-center rounded-full bg-white py-2 px-4 mt-2">
              <BarChartIcon /> Visitas Ilimitadas
            </button>

            <button className="flex items-center justify-center rounded-full bg-white py-2 px-4 mt-2">
              <RockeIcon /> CDN Incluso
            </button>
          </div>

          <div className="w-full md:w-5/3 mb-4 hidden md:block">
            <Image
              src="/Mobile.svg"
              alt="Card cover image"
              className="hidden md:block max-w-full h-auto"
              width={1800}
              height={900}
              priority
              quality={100}
            />
          </div>
        </div>
      </section>

      <section className="pb-8 shadow-md bg-sky-700 text-white">
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto text-center">
          <div className="md:text-2xl text-base p-2">
            <p>Seu site ultra veloz, em nossa plataforma</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-32">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-4xl font-semibold text-gray-800">Crie o seu sonho online</h2>
            <p className="mt-4 text-2xl text-gray-600">
              Na SkalaAI, estamos convencidos de que uma presença online robusta é fundamental para
              impulsionar o sucesso de qualquer empreendimento. Nossa plataforma oferece as
              ferramentas ideais para fortalecer o seu negócio digital e alcançar resultados
              excepcionais.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Image
              src="/img_icon.svg"
              alt="Card cover image"
              className="hidden md:block max-w-full h-auto"
              width={450}
              height={900}
              priority
              quality={100}
            />
          </div>
        </div>
      </section>

      <section className="px-2 py-10 sm:py-12 sm:px-16 bg-sky-700 text-white">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-center">
          <div className="text-3xl sm:text-3xl sm:text-5xl font-extrabold leading-6 sm:leading-10">
            Almente sua presença <label className="">DIGITAL</label>
          </div>
          <div className="mt-2 text-2xl font-extrabold leading-6 sm:leading-10 text-opacity-70">
            com seu site personalizado
          </div>

          <a
            href="https://wa.me/554896624751"
            target="_blank"
            className="flex items-center justify-center rounded-full bg-white text-black py-2 px-16 mt-2"
          >
            EU QUERO
          </a>
        </div>
      </section>

      <WhatsappButton whatsapp_link={'https://wa.me/554896624751'} />
    </div>
  )
}
