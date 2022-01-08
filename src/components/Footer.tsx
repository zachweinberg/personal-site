const Footer: React.FunctionComponent = () => {
  return (
    <footer className="mt-12 text-center text-gray-700">
      <p className="mb-1">&copy; {new Date().getFullYear()} Zach Weinberg</p>
      <a
        className="text-xs hover:text-gray-500"
        href="https://github.com/zachweinberg/personal-site"
        target="_blank"
      >
        View code
      </a>
    </footer>
  )
}

export default Footer
