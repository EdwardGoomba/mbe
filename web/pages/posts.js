import Link from 'next/link'
import client from '../client'
import styled from 'styled-components'

// styles
const Entries = styled.div`
  padding: 1rem;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #242424;
`
const Post = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #107c91;
    font-size: 1.4rem;
    font-family: 'Lato  Medium', sans-serif;
  }
`

function Posts(props) {
  const { posts = [] } = props
  console.log('Post Data: ', props)
  return (
    <Entries>
      <Link prefetch href='/'>
        <Title>Entries by Edward Danilyuk</Title>
      </Link>
      {posts.map(
        ({ _id, title = '', slug = '', _updatedAt = '', overview = '' }) =>
          slug && (
            <Post key={_id}>
              <Link prefetch href={`/p/${slug.current}`}>
                <>
                  <a>{title}</a>
                  <p>{overview}</p>
                </>
              </Link>{' '}
            </Post>
          )
      )}
    </Entries>
  )
}

Posts.getInitialProps = async () => ({
  posts: await client.fetch(`*[_type == "post"]`)
})

export default Posts
