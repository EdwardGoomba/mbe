import styled from 'styled-components'
// components
import Header from '../components/header'

// styles
const Container = styled.div``

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
  color: #107c91;
`

const NewsletterDetails = styled.p`
  color: #242424;
  font-size: 1.5rem;
`

const Index = () => {
  return (
    <Container>
      <Header />
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
    </Container>
  )
}

export default Index
