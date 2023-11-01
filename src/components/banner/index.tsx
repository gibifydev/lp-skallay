import Image from 'next/image';

type BannerProps = {
  banner_desktop_image: string;
  banner_mobile_image: string;
}
export function Banner({ banner_desktop_image, banner_mobile_image }: BannerProps) {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center mx-auto">
      <Image
        src={banner_desktop_image}
        alt="Card cover image"
        className="hidden md:block max-w-full h-auto"
        width={1800}
        height={900}
        priority
        quality={100}
      />
      <Image
        src={banner_mobile_image}
        alt="Card cover image"
        className="block md:hidden max-w-full h-auto"
        width={1800}
        height={900}
        priority
        quality={100}
      />
    </section>
  )
}