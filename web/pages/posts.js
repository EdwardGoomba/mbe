import Link from 'next/link'
import client from '../client'

function Posts(props) {
  const { posts = [] } = props
  return (
    <div>
      <h1>Hi, I am Edward Danilyuk.</h1>
      {posts.map(
        ({ _id, title = '', slug = '', _updatedAt = '' }) =>
          slug && (
            <li key={_id}>
              <Link prefetch href={`/p/${slug.current}`}>
                <a>{title}</a>
              </Link>{' '}
              ({new Date(_updatedAt).toDateString()})
              </li>
          )
      )}
    </div>
  )
}

Posts.getInitialProps = async () => ({
  posts: await client.fetch(`*[_type == "post"]`)
})

export default Posts
