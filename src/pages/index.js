import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    margin: 0;
    font-size: 85px;
    width: 60%;
    line-height: 0.9;
  }

  p {
    margin: 35px 0 25px;
    width: 40%;
    line-height: 1.5;
  }
`

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  object-fit: cover;
`

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Your new space</h1>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to the real.
      </p>
      <Button>estimate project</Button>
      {/* <ImageWrapper
        src={data.file.childImageSharp.fluid.src}
        srcSet={data.file.childImageSharp.fluid.srcSet}
        sizes={data.file.childImageSharp.fluid.sizes}
      /> */}
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }, childImageSharp: { fixed: {} }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
