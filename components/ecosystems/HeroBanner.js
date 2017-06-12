import React from 'react'
import styled from 'styled-components'
import Link from 'next/Link'

const withInitialProps = withState()

const BannerWrapper = styled.div`
  background: url(https://twistedsifter.files.wordpress.com/2013/05/animated-gifs-of-fighting-game-backgrounds-25.gif) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 500px;
  color: white;
`

const HeroBanner = ({ url: { query: {id} }}) => (
    <BannerWrapper>
        {id}
    </BannerWrapper>
)

export default HeroBanner
