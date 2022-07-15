import React from "react"
import { graphql } from 'gatsby'
import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import Container from "../components/styles/Container.styled"
import GlobalStyles from "../components/styles/Global"
import Card from "../components/Card"
import Footer from "../components/Footer"

const theme = {
  color: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

export default function Home({ data }) {
  const content = data.allMarkdownRemark.nodes
  console.log(content);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item.frontmatter} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export const query = graphql`
query Content {
  allMarkdownRemark(sort: {fields: frontmatter___id, order: ASC}) {
    nodes {
      frontmatter {
        body
        id
        image
        title
      }
    }
  }
}
`
