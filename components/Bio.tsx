import GithubIcon from './icons/Github'
import LinkedinIcon from './icons/Linkedin'
import PaperIcon from './icons/Paper'
import EmailIcon from './icons/Email'

const Bio = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <img className="rounded-full w-48 mb-2" src="img/avatar.png" />
      <h1 className="text-3xl">Zach Weinberg</h1>
      <h2 className="text-lg mb-2">Full-Stack Web Engineer</h2>
      <div className="flex justify-between text-white">
        <a href="https://github.com/zachweinberg" target="_blank" className="icon-tooltip">
          <GithubIcon fill="#fff" className="mr-5 h-8 w-8 fill-current hover:text-green-500 fade-color" />
          <span className="icon-tooltip-text">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/zachjamesweinberg" target="_blank" className="icon-tooltip">
          <LinkedinIcon fill="#fff" className="mr-5 h-8 w-8 fill-current hover:text-blue-500 fade-color" />
          <span className="icon-tooltip-text">LinkedIn</span>
        </a>
        <a href="mailto:zweinberg3@gmail.com" className="icon-tooltip">
          <EmailIcon fill="#fff" className="mr-5 h-8 w-8 fill-current hover:text-red-500 fade-color" />
          <span className="icon-tooltip-text">Email</span>
        </a>
        <a href="/resume.pdf" target="_blank" className="icon-tooltip">
          <PaperIcon fill="#fff" className="mr-5 h-8 w-8 fill-current hover:text-yellow-500 fade-color" />
          <span className="icon-tooltip-text">Resume</span>
        </a>
      </div>
    </div>
  )
}

export default Bio
