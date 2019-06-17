import Link from 'next/link'
import styled from 'styled-components'

// styles
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 1.5rem;
  padding: 1rem;
  a {
    text-decoration: none;
    color: #107c91;
  }
`

const IntroSection = styled.div`
  max-width: 40%;
  padding: 1rem;
`

const Intro = styled.h1`
  font-size: 3rem;
  color: #242424;
`

const Details = styled.p`
  color: #242424;
  font-size: 1.5rem;
`

const NewsletterSection = styled.div`
  padding: 1rem;
  max-width: 40%;
`

const Newsletter = styled.h2`
  font-size: 2.5rem;
  color: #107c91
`

const NewsletterDetails = styled.p`
  color: #242424;
  font-size: 1.5rem;
`

function Index(props) {
  const { posts = [] } = props
  return (
    <>
      <Header>
        <Logo>
          <Link prefetch href='/'>
            <a>Made by Edward</a>
          </Link>
        </Logo>
        <Menu>
          <Link prefetch href='/posts'>
            <a>Entries</a>
          </Link>
        </Menu>
      </Header>
      <IntroSection>
        <Intro>Hi, I am Edward Danilyuk.</Intro>
        <Details>I am a designer and developer who is always building things. I believe that sharing knowledge is the core of humanity. I believe that I have a positive, unique experience I can share with others.</Details>
        <Details>By sharing my goals, frustrations, views, and projects in all stages - good or bad - I hope to encourage you to share your experiences as well. I try to follow a path of intentional living and invite you to do the same.</Details>
      </IntroSection>
      <NewsletterSection>
        <Newsletter>Momentum</Newsletter>
        <NewsletterDetails>I also write a weekly newsletter that is sent out on Tuesdays.</NewsletterDetails>
        <NewsletterDetails>If you are looking for laughs, “wtf was this guy thinking” or life lessons - this is the newsletter for you.
  If you like thoughts that make you stop and think - this is probably also for you.</NewsletterDetails>
        <p>Signup Coming Soon</p>
      </NewsletterSection>
    </>
  )
}

export default Index
