const Nav: React.FunctionComponent = () => {
  return (
    <div className="flex items-center">
      <p className="mr-3">View my:</p>
      <nav className="flex items-center py-4 mb-6 text-gray-200 text-md md:mb-0">
        <a
          className="pr-3 underline md:pr-6 md:text-lg hover:text-gray-400"
          href="https://www.linkedin.com/in/zweinberg3"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="pr-3 underline md:pr-6 md:text-lg hover:text-gray-400"
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </a>
        <a
          className="pr-3 underline md:pr-6 md:text-lg hover:text-gray-400"
          href="https://github.com/zachweinberg"
          target="_blank"
        >
          GitHub
        </a>
      </nav>
    </div>
  )
}

export default Nav
