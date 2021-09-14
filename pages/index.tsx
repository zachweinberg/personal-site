import { GetServerSideProps } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'

interface GithubProfile {
  id: number
  avatar_url: string
  name: string
  followers: number
  following: number
  url: string
  bio: string
  public_repos: number
  following_url: string
  followers_url: string
}

interface Props {
  githubProfile: GithubProfile
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch('https://api.github.com/users/zachweinberg')
  const githubProfile = (await response.json()) as GithubProfile
  return { props: { githubProfile } }
}

const Home = ({ githubProfile }: Props) => (
  <Layout>
    <div>
      <div className="flex items-center justify-center md:justify-start">
        <img className="w-32 mr-6 rounded-full md:w-36 grayscale" src={githubProfile.avatar_url} />
        <Heading title="Hi there, I'm Zach" />
      </div>
      <p className="my-10 text-lg text-gray-400">
        I'm a web developer based in Boston. Currently, I work at{' '}
        <a href="https://reddoor.com" target="_blank" className="font-semibold underline hover:text-gray-300">
          RedDoor
        </a>{' '}
        as a full-stack engineer working to improve the mortgage experience for homebuyers. On this site
        you'll find some of my recent projects as well as some information about myself. Thanks for stopping
        by!
      </p>
      <div className="mb-14">
        <Heading subheading title="Recent Projects" />
        <Projects />
      </div>
      {/* <div>
        <SpotifyArtists />
      </div> */}
    </div>
  </Layout>
)

export default Home
