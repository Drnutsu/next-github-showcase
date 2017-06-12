import React from 'react'
import withPage from '../hocs/withPage'
import HeroBanner from '../components/ecosystems/HeroBanner'

class Repos extends React.Component {
  render(){
    return(
      <div>
        <HeroBanner />
      </div>
    )
  }
}

export default withPage('Repos')(Repos)
