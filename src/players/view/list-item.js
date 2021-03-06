const { createElement: h, PropTypes } = require('react')
const resolve = require('../../common/resolve-url')
const EditModal = require('./edit-modal')
const Avatar = require('./avatar')
require('./list-item.css')

function back () {
  window.history.back()
}

const PlayersListItem = ({ icon, player, isSelected, actions }) =>
  h('li', { className: 'PlayersListItem' },
    h('a', { className: 'PlayersListItem-link', href: resolve(`players/${player.id}`) },
      icon
        ? h('span', { className: 'PlayersListItem-icon' }, icon)
        : h(Avatar, {
          className: 'PlayersListItem-avatar',
          name: player.name,
          avatar: player.avatar
        }),
      h('span', { className: 'PlayersListItem-name' },
        player.name
      ),
      h('span', { className: 'PlayersListItem-gender' },
        player.gender === 'male' ? '♂'
        : player.gender === 'female' ? '♀'
        : ''
      )
    ),
    h(EditModal, Object.assign({
      player: player.id === '+' ? null : player,
      isOpen: isSelected,
      onClose: back
    }, actions))
  )

PlayersListItem.displayName = 'PlayersListItem'
PlayersListItem.propTypes = {
  player: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  actions: PropTypes.object.isRequired,
  icon: PropTypes.node
}
module.exports = PlayersListItem
