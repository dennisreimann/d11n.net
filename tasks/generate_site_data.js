const { readFileSync, readdirSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')
const request = require('sync-request')
const matter = require('gray-matter')

const loadJson = url => {
  const jsonBody = request('GET', url).getBody('utf8')
  return JSON.parse(jsonBody)
}

const dir = resolve(__dirname, '..')
const dst = join(dir, 'site-data.json')

// articles
const articles = readdirSync(join(dir, 'articles')).map(filename => {
  const filePath = join(dir, 'articles', filename)
  const content = readFileSync(filePath)
  const { data } = matter(content)
  const [, block, name] = filePath.match(/(\d+)-(.*)\.md/)
  data.block = block
  data.name = name
  data.filename = filename
  return data
}).reverse()

// blockchain
let recentBlocks = []
try {
  recentBlocks = loadJson('https://mempool.space/api/blocks/')
} catch (err) {
  console.error('Could not load recent blocks:', err)
}

const block = recentBlocks.length && recentBlocks[0].height
const data = {
  articles,
  block,
  date: (new Date()).toJSON().split('T')[0]
}
const json = JSON.stringify(data, null, 2)

writeFileSync(dst, json)

// eslint-disable-next-line no-console
console.log('✅  Generated site-data.json')
