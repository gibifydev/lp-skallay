import Image from 'next/image'

export default function Avatar({
  image,
  color,
  name
}: {
  image: string
  color: string
  name: string
}) {
  return (
    <div className="flex md:flex-row flex-col gap-4 items-center justify-center mt-8 w-full">
      <Image
        style={{
          borderWidth: 2,
          borderColor: color || '#0f9d58'
        }}
        className="w-20 h-20 p-1 rounded-full"
        src={image}
        alt={name}
        width={80}
        height={80}
        objectFit="cover"
        priority
      />
      <span className="text-black dark:text-white text-xl">{name}</span>
    </div>
  )
}
