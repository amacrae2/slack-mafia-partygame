const gameSettings = {
  LANG: 'en',
  GROUPS: {
    'mafia-hideout': 'mafia-room'
  },
  CHANNELS: {
    'the-town': 'town-room'
  },

  SETUP: 'default',
  DATABASE_TABLE: 'normal',

  timers: {
    DAY_DEBATE: 30,
    DAY_DEBATE_POLL: 20,
    DAY_TRIAL: 15,
    DAY_TRIAL_POLL: 15,

    MAFIA_LYNCH: 20,
    NIGHT_ACTIVITY: 20
  }

}

export default gameSettings
export const {
  LANG,
  GROUPS,
  CHANNELS,
  SETUP,
  DATABASE_TABLE
} = gameSettings
export const {
  DAY_DEBATE,
  DAY_DEBATE_POLL,
  DAY_TRIAL,
  DAY_TRIAL_POLL,
  MAFIA_LYNCH,
  NIGHT_ACTIVITY
} = gameSettings.timers
