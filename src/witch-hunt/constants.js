// where the overall game is at
export const stages = {
  ADD_PLAYERS: 'add-players', // setup your player
  INTRO: 'intro', // assigned roles, read begining of story
  NIGHT: 'night', // decide what to do
  MORNING: 'morning', // your decision results, decide who to put in trial
  AFTERNOON: 'afternoon', // trial result, possible execute vote
  EVENING: 'evening', // execution result, vote to end trials
  END: 'end' // final result
}

export const roles = {
  WITCH: 'witch',
  PURITAN: 'puritan',
  UNKNOWN: 'unknown'
}

export const errors = {
  BAD_TRANSITION: 'bad-transition',
  NUM_PLAYERS: 'num-players',
  WITCH_MUST_VOTE: 'witch-must-vote',
  EVERYONE_MUST_VOTE: 'everyone-must-vote'
}

export const MIN_PLAYERS = 4
