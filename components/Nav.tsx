import Link from 'next/link'

const Nav: React.FunctionComponent = () => {
  return (
    <nav className="flex items-center justify-end py-2">
      <Link href="/">
        <a className="p-4 text-md hover:text-gray-300 hover:text-gray-300">Home</a>
      </Link>
      <Link href="/about">
        <a className="p-4 text-md hover:text-gray-300">About Me</a>
      </Link>
      <a className="p-4 text-md hover:text-gray-300" href="https://github.com/zachweinberg" target="_blank">
        GitHub
      </a>
      <a
        className="p-4 text-md hover:text-gray-300"
        href="https://www.linkedin.com/in/zachjamesweinberg"
        target="_blank"
      >
        LinkedIn
      </a>
    </nav>
  )
}

export default Nav
