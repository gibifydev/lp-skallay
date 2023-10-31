import Image from 'next/image';

type AboutProps = {
  about_image: string;
  about_title: string;
  about_description: string;
}
export default function About({ about_image, about_title, about_description }: AboutProps) {
  return (
    <section id="sobre" className="py-24">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="md:text-4xl text-base font-semibold text-gray-800">
            {about_title}
          </h2>
          <p className="mt-4 md:text-2xl text-base text-gray-600">
            {about_description}
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Image
            src={about_image}
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
  )
}