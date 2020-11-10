import ExternalLinkIcon from '../components/icons/ExternalLink'
import projects from '../projects.json'

const Project = ({ project }) => (
  <a href={project.url} target="_blank">
    <div className="project-card rounded-lg p-3 mb-3 border border-gray-700 hover:bg-gray-900 fade-bg-color">
      <div className="flex items-center">
        <span className="text-lg font-bold mr-2">{project.title}</span>
        <ExternalLinkIcon className="fill-current h-3 w-3" />
      </div>

      <p className="text-md">{project.description}</p>
    </div>
  </a>
)

const Projects = () => {
  return (
    <>
      <h3 className="text-center text-xl mb-3">Recent Projects:</h3>
      {projects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
      <div className="fader-bottom sticky bottom-0"></div>
    </>
  )
}

export default Projects
