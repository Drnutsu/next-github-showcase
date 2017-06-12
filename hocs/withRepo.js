import React from 'react'
import {STATUS} from '../constants/status'
import _ from 'lodash'

const withRepo = (ComposedComponent) => {
  return class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repoFetchStatus: '',
            repoData: {},
            repoErrorMessage: ''
        }
    }

    componentDidMount() {
        this.setState({
        repoFetchStatus: STATUS.REQUEST,
        repoData: {},
        repoErrorMessage: ''
        })
        const { id } = this.props
        fetch(`https://api.github.com/orgs/${this.props.orgName}/repos`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
            this.setState({
                repoFetchStatus: STATUS.FAILURE,
                repoErrorMessage: data.message,
                repoData: {}
            })
            } else {
            const repo = _.find(data, (o) => { return o.id == id })
            this.setState({
                repoFetchStatus: STATUS.SUCCESS,
                repoErrorMessage: '',
                repoData: repo
            })
            }
        })
    }

    render () {
      const {repoFetchStatus, repoData, repoErrorMessage} = this.state
      return (
        <ComposedComponent 
          repoFetchStatus={repoFetchStatus} 
          repoData={repoData} 
          repoErrorMessage={repoErrorMessage}
          {...this.props}
        />
      )
    }
  }
}

export default withRepo
