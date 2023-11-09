'use client'
import { Menu } from '@/types/user'

type HeaderProps = {
  name: string;
  username: string;
  header_menu: Menu[] | null;
  header_bg_color: string;
  header_text_color: string;
}
export function Header({
  name,
  username,
  header_menu,
  header_bg_color,
  header_text_color
}: HeaderProps) {

  function clickAncor(id: string) {
    const element = document.getElementById(id);
    console.log(element)
    if (element)
    {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <header
        style={{
          backgroundColor: header_bg_color,
          color: header_text_color
        }}
        id="home"
        className="flex flex-col w-full"
      >
        <div className="shadow-md">
          <div className="flex flex-row md:justify-between justify-center items-center max-w-5xl w-full mx-auto h-16">
            <div className="font-semibold">{name}</div>
            <nav className="items-center mt-8 mb-4 lg:m-0 lg:ml-auto space-x-6 hidden md:block">
              {header_menu?.length ? header_menu.map((link) => (
                <a
                  key={link.id}
                  href={`/${username}/#${link.id}`}
                  className="cursor-pointer font-medium text-xs uppercase"
                  onClick={() => clickAncor(link.id)}
                >{link.label}</a>
              )) : null}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
