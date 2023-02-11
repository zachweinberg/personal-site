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
          <img className="w-32 mr-6 rounded-full md:w-36 grayscale" src={data.avatar_url} />
          <div>
            <Heading title="Zach Weinberg" />
            <p className="text-2xl text-gray-300">Senior Software Engineer</p>
          </div>
        </div>
        <div className="my-8 space-y-3 text-gray-400 text-md md:text-lg">
          <p>Hey there, I'm an engineer based in Boston.</p>
          
          <p>
            Currently, I work at{' '}
            <a
              href="https://www.relay.delivery"
              target="_blank"
              className="font-semibold underline hover:text-gray-300"
            >
              Relay
            </a>{' '}
            working on food delivery logistics to help restaurants save money!
         </p>

          <p>You can check out some of my recent work below. Thanks for stopping by!</p>
        </div>
        <div className="mb-14">
          <Heading subheading title="Recent Projects" />
          <Projects />
        </div>
      </div>
    </Layout>
  )
}

export default Home
