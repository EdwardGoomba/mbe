import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
// components
import Header from '../../components/header'
import sanity from "../../lib/sanity";

// styles
const Container = styled.div``

const entriesQuery = `*[_type == "post"] { _id, slug { current } }`;

const singleEntryQuery = `*[_type == "post" && slug.current == $current] {
  _id,
  slug,
  title,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}[0]
`;

const Entry = ({ entry }) => {
  const {
    title,
    categories,
    authorImage,
    body
  } = entry
  return (
    <Container>
      <Header />
      <article>
        <h1>{title}</h1>
        {categories && (
          <ul>
            Posted in
            {categories.map(category => <li key={category}>{category}</li>)}
          </ul>
        )}
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...sanity.config()}
        />
      </article>
    </Container>
  )
}

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on persons
  const entries = await sanity.fetch(entriesQuery);
  const paths = entries.map(entry => ({
    params: { current: entry.slug.current }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const entry = await sanity.fetch(singleEntryQuery, { current: params.current });
  return { props: { entry } };
};

export default Entry
