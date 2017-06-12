import React from 'react'
import {Grid} from 'semantic-ui-react'
import Router from 'next/router'
import styled from 'styled-components'
import ReposCard from '../molecules/ReposCard'

const ReposList = ({reposList}) => {
  const renderListByData = (reposList) => (
    reposList.map((repos) => {
      return (
        <Grid.Column key={repos.id} width={4}>
          <ReposCard 
            repos={repos} 
            className="animated bounceInUp"
            onClick={()=>{Router.push(`/repos?id=${repos.id}&orgName=${repos.owner.login}`)}}
          />
        </Grid.Column>
      )
    })
  )

  return (
    <Grid padded>
      {renderListByData(reposList)}
    </Grid>
  )
}

export default ReposList
