import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="pt-8">
        <Heading title="About Me" />
        <p className="text-gray-400 text-lg mb-4">Hey, I'm Zach Weinberg. 👋</p>
        <p className="text-gray-400 text-lg mb-4">
          I began exploring web development as a hobby during college. I attended University of Massachusetts
          Amherst and graduated with a degree in Economics. During school, I did some freelance web work and
          by that point, I was hooked!
        </p>
        <p className="text-gray-400 text-lg mb-4">
          When I'm not coding, you can probably find me playing piano or guitar because I love listening to
          and writing music.
        </p>
      </div>
    </Layout>
  )
}

export default About
