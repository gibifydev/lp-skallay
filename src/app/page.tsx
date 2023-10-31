import WhtasappIcon from '@/components/icons/whatsapp'
import { Metadata } from 'next'
import Image from 'next/image'
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
    }
  }
}

export default function HomePage() {
  return (
    <div id="landingpage" className="flex flex-col w-full">
      <header id="home" className="flex flex-col w-full">
        <div className="shadow-md">
          <div className="flex flex-row md:justify-between justify-center items-center max-w-5xl w-full mx-auto h-16">
            <div className="font-semibold text-gray-800">Nayra Fisioterapeuta</div>
            <nav className="items-center mt-8 mb-4 lg:m-0 lg:ml-auto space-x-6 hidden md:block">
              <a href='#sobre' className="cursor-pointer">Sobre</a>
              <a href='#servicos' className="cursor-pointer">Serviços</a>
              <a href='#duvidas' className="cursor-pointer">Dúvidas</a>
              <a href='#contato' className="cursor-pointer">Contatos</a>
            </nav>
          </div>
        </div>
      </header>

      <section>
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto">
          <div className="w-full">
            <Image
              src="/images/banner_nayara.png"
              alt="Card cover image"
              className="hidden md:block max-w-full h-auto"
              width={1800}
              height={900}
              priority
              quality={100}
            />
            <Image
              src="/images/banner_nayara_mobi.png"
              alt="Card cover image"
              className="block md:hidden max-w-full h-auto"
              width={1800}
              height={900}
              priority
              quality={100}
            />
          </div>
        </div>
      </section>

      <section className="py-8 shadow-md">
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto text-center">
          <div className="md:text-2xl text-base p-2 text-gray-600">
            <p>
              Avaliação e tratamento especializado para lesões e recuperações ortopédicas, Pré e
              Pós-operatório de cirurgias plásticas, prevenção e cuidado da saúde do idoso, terapias
              manuais, tratamento e acompanhamento visando o sistema respiratório, o desenvolvimento
              motor e funcional de crianças.
            </p>
          </div>
          <a
            href="https://wa.me/message/XUJCDWE7XTRKN1"
            className="mt-4 px-12 text-white bg-lime-800 rounded-full p-4"
            target="_blank"
          >
            AGENDAR CONSULTA
          </a>
        </div>
      </section>

      <section id="sobre" className="py-24">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="md:text-4xl text-base font-semibold text-gray-800">
              Quem é Nayra Araújo
            </h2>
            <p className="mt-4 md:text-2xl text-base text-gray-600">
              Olá, me chamo Nayra Araújo e atuo como fisioterapeuta na região de São Luis e
              Chapadinha no Estado do Maranhão. Formada em Fisioterapia pelo SEST SENAT e
              especializada em ortopedia e traumatologia e pré e pós-operatório de cirurgias
              plásticas. Meu propósito é auxiliar no tratamento da dor e prevenção das condições
              físicas de adultos e crianças para uma melhor qualidade de vida.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <Image
              src="/images/sobre_nayara.png"
              alt="Card cover image"
              className="object-cover ng-tns-c1318422951-24 ng-star-inserted"
              width={1800}
              height={900}
              priority
              quality={100}
            />
          </div>
        </div>
      </section>

      <section className="px-2 py-10 sm:py-12 sm:px-16 text-base  shadow-md bg-[#EEEEEE]">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto text-center">
          <div className="text-3xl sm:text-5xl font-extrabold leading-6 sm:leading-10">
            Atendimento à Domicilio e Online
          </div>
          <div className="mt-2 text-3xl font-extrabold leading-6 sm:leading-10 text-opacity-70">
            Em São Luis e Chapadinha no Estado do Maranhão.
          </div>
          <a
            href="https://wa.me/message/XUJCDWE7XTRKN1"
            className="mt-4 px-12 text-white bg-lime-800 rounded-full p-4"
            target="_blank"
          >
            AGENDAR CONSULTA
          </a>
        </div>
      </section>
      <section id="duvidas" className="py-24 bg-white">
        <h1 className="text-3xl font-extrabold text-center m-6">Dúvidas frequentes</h1>

        <div className="flex flex-col justify-between items-center max-w-5xl gap-4 mx-auto mt-4">
          <div className="flex items-center w-full md:w-1/1 p-4 filter-info rounded-lg shadow-md">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold leading-tight">
                O que é fisioterapia home care?
              </h2>
              <div className="text-base">
                A fisioterapia home care no atendimento domiciliar é caracterizada como uma
                assistência onde cuidados fisioterápicos são realizados na casa do paciente,
                permitindo uma avaliação profissional quanto a realidade e dificuldades dele. A
                partir dessa avaliação é elaborado um plano de assistência adequado à realidade que
                o paciente vive. O fisioterapeuta vai desenvolver atividades que promovam o
                tratamento de doença ou sequelas de traumatismo no sistema esquelético, sistema
                locomotor, do sistema respiratório, do sistema cardíaco etc. O objetivo é
                reabilitar, reeducar e prevenir deformidades ósseas e articulares para que o
                paciente possa voltar o quanto antes para suas atividades de vida diária. Além
                disso, a fisioterapia home care ajuda a promover inclusão, melhorar a qualidade de
                vida, preservar ou recuperar a saúde do paciente.
              </div>
            </div>
          </div>

          <div className="flex items-center w-full md:w-1/1 p-4 filter-info rounded-lg shadow-md">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold leading-tight">
                Para quem é indicado a fisioterapia home care?{' '}
              </h2>
              <div className="text-base">
                O atendimento de fisioterapia home care é indicado para todo tipo de paciente que
                necessitam de acompanhamento fisioterápico. Mas principalmente, para pacientes que
                possuem dificuldade em frequentar uma clínica por diversos motivos sejam eles de
                transporte, tempo, condições físicas, ou até mesmo por desejarem ser atendidos no
                conforto do seu lar.
              </div>
            </div>
          </div>

          <div className="flex items-center w-full md:w-1/1 p-4 filter-info rounded-lg shadow-md">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold leading-tight">
                Em quais cidades há atendimento?{' '}
              </h2>
              <div className="text-base">
                Neste momento nas regiões de São Luís e Chapadinha no Estado do Maranhão
              </div>
            </div>
          </div>

          <div className="flex items-center w-full md:w-1/1 p-4 filter-info rounded-lg shadow-md">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold leading-tight">Como funciona o atendimento?</h2>
              <div className="text-base">
                Os atendimentos são realizados em domicílio. É realizada uma avaliação das condições
                do paciente e definido o melhor tratamento para ele. Em alguns casos é necessário a
                utilização do ultrassom à laser, mas o paciente não precisa preocupar-se, eu levarei
                o equipamento no dia da aplicação. Após a avaliação, conversamos com os familiares e
                se forem necessárias alterações no domicílio, elas devem ser realizadas para um
                melhor aproveitamento da terapia. Alguns cuidados domiciliares serão repassados à
                família, como: - Orientações de Saúde em Geral - Treinamento quanto ao Uso das
                Órteses/Próteses - Orientação sobre a Importância da Continuidade do Tratamento e a
                sua Realização Diária É importante salientar que observo também as condições
                socioeconômicas da família, elaborando uma assistência específica e individualizada
                dentro da realidade em que o paciente vive. Com isso iniciamos o tratamento
                personalizado.
              </div>
            </div>
          </div>

          <div className="flex items-center w-full md:w-1/1 p-4 filter-info rounded-lg shadow-md">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold leading-tight">
                Quanto tempo dura cada sessão de tratamento?
              </h2>
              <div className="text-base">Aproximadamente 1 hora.</div>
            </div>
          </div>

          <div className="flex items-center w-full md:w-1/1 p-4 filter-info rounded-lg shadow-md">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold leading-tight">
                Quanto custa a avaliação e o tratamento?{' '}
              </h2>
              <div className="text-base">
                Os valores são definidos conforme a necessidade do paciente. É necessária uma
                avaliação para entender o tipo de serviço e necessidade.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
