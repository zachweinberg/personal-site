const Layout = ({ children }) => {
  return (
    <main className="antialiased flex flex-col min-h-screen max-w-2xl mx-auto p-8 text-white">
      {children}
      <footer className="text-center text-gray-700 mt-5">
        Zach Weinberg &copy; {new Date().getFullYear()}
      </footer>
    </main>
  )
}

export default Layout
