import React from 'react'
import formatMessage from 'format-message'

export default class WitchHuntView extends React.Component {
  render () {
    return (
      <h1>{ formatMessage('Witch Hunt') }</h1>
    )
  }
}