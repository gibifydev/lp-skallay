'use client'
import { Menu, SocialMedia } from '@/types/user';
import { Icon } from '../icons';


type FooterProps = {
  footer_bg_color: string;
  footer_text_color: string;
  footer_social_media: SocialMedia[];
  footer_menu: Menu[];
  username: string;
}
export function Footer({
  footer_bg_color,
  footer_text_color,
  footer_social_media,
  footer_menu,
  username
}: FooterProps) {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')

  if (!footer_social_media.length) return;

  function clickAncor(id: string) {
    const element = document.getElementById(id);
    console.log(element)
    if (element)
    {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <footer
      style={{
        backgroundColor: footer_bg_color,
        color: footer_text_color
      }}
      id="contact"
      className="pt-8 w-full"
    >
      <div className="mb-4 md:mb-0 w-full flex items-center justify-between p-8 max-w-5xl mx-auto">
        <div className="">
          <ul>
            {footer_menu.length ? footer_menu.map((link) => (
              <li key={link.id}>
                <a
                  href={`/${username}/#${link.id}`}
                  className='uppercase text-xs'
                  onClick={() => clickAncor(link.id)}
                >{link.label}</a>
              </li>
            )) : null}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Redes Sociais</h2>
          <ul className="flex flex-col space-y-2">
            {footer_social_media.length ? footer_social_media.map((link, index) => (
              <li key={index}>
                <a
                  href={link.value}
                  className="flex items-center gap-2 hover:brightness-50 transition duration-300"
                  target="_blank"
                  rel='noopener noreferrer'
                >
                  <Icon icon={link.label} />
                  <span className='uppercase text-xs'>{link.label}</span>
                </a>
              </li>
            )) : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-400 mt-2">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center">
          <div className="text-sm text-gray-400">
            <span className="mr-2">&copy; {copyrightDate} Todos os direitos reservados <a href="skalaai.com" className="underline font-semibold">skalaai.com</a></span>
          </div>
        </div>
      </div>
    </footer >
  )
}