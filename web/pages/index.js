import Link from 'next/link'
import client from '../client'

function Index(props) {
  const { posts = [] } = props
  return (
    <div>
      <>
        <h1>Hi, I am Edward Danilyuk.</h1>
        <Link prefetch href='/posts'>
          <a>Entries</a>
        </Link>
      </>
    </div>
  )
}

export default Index
