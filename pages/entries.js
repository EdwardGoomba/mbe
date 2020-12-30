import Link from 'next/link'
import styled from 'styled-components'
// components
import Header from '../components/header'
import sanity from "../lib/sanity";

// styles
const Container = styled.div``

const Body = styled.div`
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

const Entries = ({ entries }) => (
  <Container>
    <Header />
    <Body>
      <Title>Entries</Title>
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
