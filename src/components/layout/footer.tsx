export default function Footer() {
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')

  return (
    <footer className="w-full flex flex-col items-center justify-center border-t border-neutral-200 dark:border-neutral-700 px-4 text-center text-black dark:text-white">
      <div className="flex flex-col justify-center items-center my-4">
        <p> &copy; {copyrightDate} Todos os direitos reservados.</p>
        <a href="https://gibify.link" className="font-semibold mb-4 mt-2">
          Skallai
        </a>
      </div>
    </footer>
  )
}
