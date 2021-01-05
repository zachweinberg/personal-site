import { getProjects, Project as ProjectInterface } from '~/lib/projects'
import ExternalLinkIcon from './icons/ExternalLink'

interface ProjectProps {
  project: ProjectInterface
}

const Project: React.FunctionComponent<ProjectProps> = ({ project }: ProjectProps) => (
  <a href={project.url} target="_blank">
    <div className="rounded-lg px-6 py-4 h-full border border-gray-700 hover:bg-gray-900 fade-bg-color">
      <div className="flex items-center">
        <span className="text-lg font-bold mr-2">{project.title}</span>
        <ExternalLinkIcon className="fill-current h-3 w-3" />
      </div>

      <p className="text-md">{project.description}</p>
    </div>
  </a>
)

const Projects = () => {
  const projects = getProjects()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  )
}

export default Projects
