import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Button from '../components/Button'
import Grid from '../components/Grid'
import GridBlock from '../components/GridBlock'

// styled components
const Container = styled.div`
  color: black;
`

const Subtitle = GridBlock.extend`
  margin: 0.5rem;
  text-align: right;

`

const PageLinkContainer = GridBlock.extend`
  margin: 0.5rem;
  display: block;
  color: black;


  &:hover {
    font-style: italic;
  }
`

// components
function PageLink(props) {
  return (
    <PageLinkContainer {...props}>
      <Link to={props.to}>{props.title}</Link>
    </PageLinkContainer>
  )
}

// page component
export default function IndexPage({ data }) {
  const pages = data.allMarkdownRemark.edges;

  return (
    <Grid
      height="100vh"
      width="100%">

      <Subtitle col={1} row={4}>
        dynamic pages:
      </Subtitle>

      {pages.map( ({ node: page }, i) => (
        <PageLink
          row={4+i}
          col={2}
          to={page.frontmatter.path}
          title={page.frontmatter.title}
          key={page.id}
        />
      ))}

      <Subtitle col={1} row={6}>other pages:</Subtitle>

      <PageLink
        row={6}
        col={2}
        to="/components"
        title="Components Page"
      />

      <PageLink
        row={7}
        col={2}
        to="/page-2"
        title="Test Page"
      />

      <Button
        text="this is a button component"
        row="5"
        col="3"
      />

    </Grid>
  )
}

// data query
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }

    allSitePage {
      totalCount

      edges {
        node {
          id
          path
        }
      }
    }
  }
`;
