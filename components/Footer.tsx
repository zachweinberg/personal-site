import BracketsIcon from '~/components/icons/Brackets'

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="text-center text-gray-700 mt-5">
      <p className="mb-1">{new Date().getFullYear()} Zach Weinberg</p>
      <a
        className="hover:text-gray-300 fade-color"
        href="https://github.com/zachweinberg/personal-site"
        target="_blank"
      >
        View code here <BracketsIcon className="inline fill-current w-4 h-4" />
      </a>
    </footer>
  )
}

export default Footer
