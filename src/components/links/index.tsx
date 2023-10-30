import { Link } from '@/types/user'
import Icons from '../icons'

type LinksProps = {
  links: Link[]
  color: string
}
export default function Links({ links, color }: LinksProps) {
  return (
    <div className="flex flex-col gap-4  max-w-sm w-full text-xs uppercase px-4 md:p-0">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.value}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: `${color || '#0f9d58'}`
          }}
          className="flex items-end justify-center gap-2 rounded-3xl text-white border border-transparent p-2 w-full"
        >
          <Icons icon={link.icon} />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  )
}
