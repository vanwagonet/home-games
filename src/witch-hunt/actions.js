/*globals fetch*/
import uniflow from 'uniflow'

export default function WitchHuntActions (config) {
  return uniflow.createActions({
    baseUrl: config.state.api + '/witch-hunt/',

    create (o) {
      this.emit('create')
      this.send('create.json', {})
    },

    addPlayer (player) {
      this.emit('add-player', player)
      this.send('add-player.json', player)
    },

    vote (player, vote) {
      this.emit('player-vote', player, vote)
      this.send('player-vote.json', { player, vote })
    },

    ready (player) {
      this.emit('player-ready', player)
      this.send('player-ready.json', { player })
    },

    changeState (state) {
      this.emit('change-stage', state)
    },

    send (path, data) {
      if (!config) { return }
      const url = this.baseUrl + path
      return fetch(url, {
				method: data ? 'post' : 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: data && JSON.stringify(data)
			})
      .then(response => response.json())
      .then(
        json => this.emit(path + '-send-success', path, data, json),
        err => this.emit(path + '-send-failure', path, data, err)
      )
    },

    load () {
      if (!config) { return }
      this.emit('load')
      const url = this.baseUrl + '/state.json'
      return fetch(url, {
				headers: {
					'Accept': 'application/json'
				}
      })
			.then(response => response.json())
      .then(
        state => this.emit('load-success', state),
        err => this.emit('load-failure', err)
      )
    },

    bootstrap (json) {
      this.emit('bootstrap', json)
    }
  })
}