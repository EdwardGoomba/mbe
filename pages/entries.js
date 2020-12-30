import Link from 'next/link'
import styled from 'styled-components'
// components
import Header from '../components/header'
import sanity from "../lib/sanity";

// styles
const Container = styled.div`
  display: grid;
  margin: 1rem;
`

const Body = styled.div`
  padding: 1rem;

  h1 {
    font-size: 3rem;
    color: #242424;
    margin-bottom: 3rem;
  }
`

const Post = styled.div`
  margin-bottom: 3rem;

  a {
    font-size: 1.8rem;
    font-family: 'Lato  Medium', sans-serif;
    text-decoration: none;
    color: #107c91;
  }
`

const Entries = ({ entries }) => (
  <Container>
    <Header />
    <Body>
      <h1>Entries</h1>
      {entries.map(entry => {
        const { _id, title, slug: { current }, overview } = entry
        return (
          <Post key={_id}>
            <Link href='/entry/[current]' as={`/entry/${current}`}>
              <a>{title}</a>
            </Link>
            <p>{overview}</p>
          </Post>
        )
      })}
    </Body>
  </Container>
)

export const getStaticProps = async () => {
  const entries = await sanity.fetch(`*[_type == "post"]`)

  return {
    props: { entries }
  };
};

export default Entries
