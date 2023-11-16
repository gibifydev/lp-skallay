'use client'
import WhtasappIcon from '../icons/whatsapp'

export function WhatsappButton({ whatsapp_link }: { whatsapp_link: string }) {
  return (
    <a
      href={whatsapp_link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center text-white bg-white border h-[52px] w-[52px] shadow-md rounded-full font-bold py-2 px-2 z-20 fixed bottom-4 right-4"
    >
      <WhtasappIcon />
    </a>
  )
}
