import UpIcon from '../components/icons/Up'
import DownIcon from '../components/icons/Down'

import projects from '../projects.json'

const Project = ({ project }) => (
  <a href={project.url} target="_blank">
    <div className="rounded-lg p-3 mb-3 border border-gray-700 hover:bg-gray-900">
      <span className="text-md font-bold">{project.title}</span>
      <p className="text-sm">{project.description}</p>
    </div>
  </a>
)

const Projects = () => {
  return (
    <>
      <h3 className="text-center text-xl">My Recent Projects:</h3>
      <div className="overflow-scroll">
        <div className="fader-top sticky top-0"></div>
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
        <div className="fader-bottom sticky bottom-0"></div>
      </div>
    </>
  )
}

export default Projects
