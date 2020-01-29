import Head from 'next/head'

import BracketsIcon from '../components/icons/Brackets'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Zach Weinberg | Web Developer</title>
      </Head>
      <main className="antialiased flex flex-col min-h-screen max-w-2xl mx-auto p-6 text-white">
        {children}
        <footer className="text-center text-gray-700 mt-5">
          <p className="mb-1">Zach Weinberg &copy; {new Date().getFullYear()}</p>
          <a
            className="hover:text-gray-300 fade-color"
            href="https://github.com/zachweinberg/zachweinberg.com"
            target="_blank"
          >
            View Code <BracketsIcon className="inline fill-current w-4 h-4" />
          </a>
        </footer>
      </main>
    </>
  )
}

export default Layout
