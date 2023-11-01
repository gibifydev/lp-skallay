import Image from 'next/image';

type AboutProps = {
  about_image: string;
  about_title: string;
  about_description: string;
  about_bg_color: string;
  about_title_color: string;
  about_description_color: string;
}
export function About({
  about_image,
  about_title,
  about_description,
  about_bg_color,
  about_description_color,
  about_title_color
}: AboutProps) {
  return (
    <section
      style={{
        backgroundColor: about_bg_color,
      }}
      id="sobre"
      className="py-24 w-full"
    >
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 p-4">
          <h2
            style={{
              color: about_title_color,
            }}
            className="md:text-4xl text-base font-semibold"
          >
            {about_title}
          </h2>
          <p
            style={{
              color: about_description_color,
            }}
            className="mt-4 md:text-2xl text-base"
          >
            {about_description}
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <Image
            src={about_image}
            alt="Card cover image"
            className="object-cover ng-tns-c1318422951-24 ng-star-inserted"
            width={500}
            height={500}
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}