function Home () {
  if (typeof window !== 'undefined') {
    window.location = process.env.GATSBY_FACEBOOK_PAGE_URL
  }

  return null
}

export default Home
