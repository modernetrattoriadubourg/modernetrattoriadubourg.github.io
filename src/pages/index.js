import { navigate } from 'gatsby'

function Home () {
  return navigate(process.env.GATSBY_FACEBOOK_PAGE_URL)
}

export default Home
