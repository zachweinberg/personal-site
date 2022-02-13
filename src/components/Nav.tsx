const Nav: React.FunctionComponent = () => {
  return (
    <nav className="flex items-center justify-end py-4 mb-6 text-gray-200 text-md md:mb-0">
      <a
        className="pr-3 md:pr-6 md:text-lg hover:text-gray-400"
        href="https://github.com/zachweinberg"
        target="_blank"
      >
        GitHub
      </a>
      <a
        className="pr-3 md:pr-6 md:text-lg hover:text-gray-400"
        href="https://www.linkedin.com/in/zachjamesweinberg"
        target="_blank"
      >
        LinkedIn
      </a>
      <a className="pr-3 md:pr-6 md:text-lg hover:text-gray-400" href="/resume.pdf" target="_blank">
        Resume
      </a>
    </nav>
  )
}

export default Nav
