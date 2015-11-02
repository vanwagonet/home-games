import React from 'react'
import Router from 'middle-router'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'
import List from './view/list'

export default Router()
  .get('/:id?', ({ params, resolve, store }) => {
    const actions = bindActionCreators(actionCreators, store.dispatch)
    const id = params.id
    console.log('resolving')
    resolve(() => {
      const players = store.getState().players
      return <List players={ players } selectedId={ id } actions={ actions } />
    })
  })
