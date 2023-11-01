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
    <div id="landingpage" className="flex flex-col w-full">


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
