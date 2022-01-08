import { NextPage } from 'next'
import useSWR from 'swr'
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

const Home: NextPage = () => {
  const { data, error } = useSWR('githubProfile', async () => {
    const resp = await fetch('https://api.github.com/users/zachweinberg')
    const githubProfile = (await resp.json()) as GithubProfile
    return githubProfile
  })

  if (!error && !data) {
    return null
  }

  return (
    <Layout>
      <div>
        <div className="flex items-center justify-center md:justify-start">
          <img className="w-32 mr-6 rounded-full md:w-36" src={data.avatar_url} />
          <Heading title="Hi there, I'm Zach." />
        </div>
        <p className="my-10 text-lg text-gray-400">
          I'm a web developer based in Boston. Currently, I work for{' '}
          <a
            href="https://opendoor.com"
            target="_blank"
            className="font-semibold underline hover:text-gray-300"
          >
            Opendoor
          </a>{' '}
          as a full-stack web engineer working to improve the mortgage experience for homebuyers. On this site
          you'll find some of my recent projects as well as some information about myself. Thanks for stopping
          by!
        </p>
        <div className="mb-14">
          <Heading subheading title="Recent Projects" />
          <Projects />
        </div>
      </div>
    </Layout>
  )
}

export default Home
