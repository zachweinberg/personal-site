module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
      {
        source: '/',
        destination: 'https://linkedin.com/in/zweinberg3',
        permanent: false,
      },
    ]
  },
}
