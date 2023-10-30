'use client'
import { usePathname } from 'next/navigation'
import LogoSquare from '../logo-square'

export default function Header() {
  const pathname = usePathname()

  return (
    <>
      {pathname !== '/' ? (
        <></>
      ) : (
        <header className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 p-8 fixed backdrop-blur-sm">
          <div className="flex items-center text-sm font-medium uppercase gap-2">
            <LogoSquare size="sm" />
            <p>
              gibify<span className="text-green-500 ml-1">.link</span>
            </p>
          </div>
        </header>
      )}
    </>
  )
}
