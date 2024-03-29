const Footer: React.FunctionComponent = () => {
  return (
    <footer className="mt-12 text-center text-gray-700">
      <p className="mb-1">&copy; {new Date().getFullYear()} Zach Weinberg</p>
      <a
        className="text-xs hover:text-gray-500"
        href="https://github.com/zachweinberg/personal-site"
        target="_blank"
      >
        This website is open source
      </a>
      <p className="opacity-0">zweinberg3@gmail.com</p>
    </footer>
  )
}

export default Footer
