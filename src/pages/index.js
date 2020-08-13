import React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

function Home () {
  const { title } = useSiteMetadata()

  if (typeof window !== 'undefined') {
    window.location = process.env.GATSBY_FACEBOOK_PAGE_URL
  }

  return <>{title}</>
}

export default Home
