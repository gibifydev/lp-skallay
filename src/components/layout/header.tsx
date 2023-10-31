'use client'
import { Menu } from '@/types/user'

type HeaderProps = {
  name: string;
  menu: Menu[] | null;
  username: string;
}
export default function Header({ name, username, menu }: HeaderProps) {
  return (
    <>
      <header id="home" className="flex flex-col w-full">
        <div className="shadow-md">
          <div className="flex flex-row md:justify-between justify-center items-center max-w-5xl w-full mx-auto h-16">
            <div className="font-semibold text-gray-800">{name}</div>
            <nav className="items-center mt-8 mb-4 lg:m-0 lg:ml-auto space-x-6 hidden md:block">
              {menu?.length ? menu.map((link, index) => (
                <a key={index} href={`/${username}/#${link.label}`} className="cursor-pointer text-xs uppercase">{link.label}</a>
              )) : null}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
