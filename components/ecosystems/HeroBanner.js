import React from 'react'
import styled from 'styled-components'
import withRepo from '../../hocs/withRepo'
import { compose } from 'recompose';
import {Container, Grid, Card} from 'semantic-ui-react'

const BannerWrapper = styled(Container)`
  background: url(https://twistedsifter.files.wordpress.com/2013/05/animated-gifs-of-fighting-game-backgrounds-25.gif) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 500px;
`

const TranspalentCard = styled(Card)`
    opacity: 0.7;
`

const HeroBanner = ({ id, orgName, repoData }) => (
    <BannerWrapper fluid>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <TranspalentCard centered
                        image='https://www.atomix.com.au/media/2015/06/atomix_user31.png'
                        header='Elliot Bakerr'
                        meta='Friend'
                        description={JSON.stringify(repoData)}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </BannerWrapper>
)

export default withRepo(HeroBanner)
