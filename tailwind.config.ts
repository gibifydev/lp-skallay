const config = {
  content: [
    './node_modules/flowbite-react/**/*.js', ,
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
export default config
