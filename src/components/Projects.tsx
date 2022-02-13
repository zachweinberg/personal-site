import { getProjects, Project as ProjectInterface } from '~/lib/projects'
import ExternalLinkIcon from './icons/ExternalLink'

interface ProjectProps {
  project: ProjectInterface
}

const Project: React.FunctionComponent<ProjectProps> = ({ project }: ProjectProps) => (
  <a href={project.url} target="_blank">
    <div className="h-full px-6 py-4 transition-colors border border-gray-700 rounded-lg hover:bg-gray-900 fade-bg-color">
      <div className="flex items-center">
        <span className="mr-2 text-lg font-bold">{project.title}</span>
        <ExternalLinkIcon className="w-3 h-3 fill-current" />
      </div>
      <p className="text-gray-400 text-md">{project.description}</p>
    </div>
  </a>
)

const Projects = () => {
  const projects = getProjects()

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  )
}

export default Projects
