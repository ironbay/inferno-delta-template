export const IS_SECURE = location.protocol === 'https:'
export const WS_PREFIX = IS_SECURE ? 'wss' : 'ws'

export const DELTA_HOST = window.location.hash.substring(1) || 'localhost:12000'
export const DELTA_URL = `${WS_PREFIX}://${DELTA_HOST}/socket`
