import Link from 'next/link'
import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Logo = styled.div`
  font-size: 1.5rem;
  padding: 1rem;

  a {
    text-decoration: none;
    color: #242424;
  }
`

const Menu = styled.div`
  justify-self: end;
  font-size: 1.5rem;
  padding: 1rem;

  a {
    text-decoration: none;
    color: #107c91;
  }
`

const Header = () => (
  <Container>
    <Logo>
      <Link href='/'>
        <a>Made by Edward</a>
      </Link>
    </Logo>
    <Menu>
      <Link href='/entries'>
        <a>Entries</a>
      </Link>
    </Menu>
  </Container>
)

export default Header
