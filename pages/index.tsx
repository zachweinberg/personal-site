import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'
import SpotifyTracks from '~/components/SpotifyTracks'

const Index: NextPage = () => (
  <Layout>
    <div>
      <div className="flex items-center">
        <img className="rounded-full w-36 mr-6 mb-6" src="img/zach.png" />
        <Heading title="Hi there, I'm Zach" />
      </div>
      <p className="text-gray-400 text-lg mb-14">
        I'm a web developer based in Boston. I currently work at{' '}
        <a href="https://reddoor.com" target="_blank" className="font-semibold hover:text-gray-300">
          RedDoor
        </a>{' '}
        as a full-stack engineer working to improve the mortgage experience for homebuyers. On this site
        you'll find some of my recent projects and other information about myself. Thanks for stopping by!
      </p>
      <div className="mb-14">
        <Heading subheading title="Recent Projects" />
        <Projects />
      </div>
      <div>
        <Heading subheading title="What I'm Listening To" />
        <p className="text-gray-400 text-lg mb-4">
          I always (seriously) have Spotify open. My current top tracks are below:
        </p>
        <SpotifyTracks />
      </div>
    </div>
  </Layout>
)

export default Index
