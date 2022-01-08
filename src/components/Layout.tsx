import Footer from '~/components/Footer'
import Nav from '~/components/Nav'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-3xl mx-auto p-6 text-white">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
