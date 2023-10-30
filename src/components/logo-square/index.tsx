import clsx from 'clsx'
import LogoIcon from '../icons/logo'

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
        {
          'h-[50px] w-[50px] rounded-xl': !size,
          'h-[40px] w-[40px] rounded-lg': size === 'sm'
        }
      )}
    >
      <LogoIcon />
    </div>
  )
}
