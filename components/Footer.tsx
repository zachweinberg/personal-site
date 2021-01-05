const Footer: React.FunctionComponent = () => {
  return (
    <footer className="text-center text-gray-700 mt-12">
      <p className="mb-1">{new Date().getFullYear()} Zach Weinberg</p>
      <a
        className="hover:text-gray-500 text-xs"
        href="https://github.com/zachweinberg/personal-site"
        target="_blank"
      >
        View code
      </a>
    </footer>
  )
}

export default Footer
