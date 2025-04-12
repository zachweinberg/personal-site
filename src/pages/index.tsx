import { NextPage } from 'next'
import useSWR from 'swr'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Nav from '~/components/Nav'
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
        <div className="my-8 space-y-3 text-gray-200 text-md md:text-lg">
          <p>Hey there, thanks for visiting!</p>

          <p>
            I'm a software engineer who specializes in building financial products that make a difference in
            consumers' lives.
          </p>

          <Nav />

          <p>You can check out some of my work below:</p>
        </div>
        <div className="mb-14">
          <Projects />
        </div>
      </div>
    </Layout>
  )
}

export default Home
