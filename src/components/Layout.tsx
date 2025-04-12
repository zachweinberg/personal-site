import Footer from '~/components/Footer'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col max-w-3xl min-h-screen p-6 mx-auto mt-2 text-white">
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
