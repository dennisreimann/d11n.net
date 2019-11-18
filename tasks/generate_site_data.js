const { readFileSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')
const request = require('sync-request');

const dir = resolve(__dirname, '..')
const dst = join(dir, 'site-data.json')

let recentBlocks = []

try {
  const jsonBody = request('GET', 'https://mempool.observer/api/recentBlocks').getBody('utf8')
  recentBlocks = JSON.parse(jsonBody)
} catch (err) {
  console.error('Could not load recent blocks:', err)
}

const data = {
  createdAtBlock: recentBlocks.length && recentBlocks[0].height,
  createdAtDate: (new Date()).toJSON().split('T')[0]
}
const json = JSON.stringify(data, null, 2)

writeFileSync(dst, json)

// eslint-disable-next-line no-console
console.log(`✅  Generated site-data.json\n\n${json}`)
