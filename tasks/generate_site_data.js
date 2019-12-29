const { readFileSync, readdirSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')
const request = require('sync-request')
const matter = require('gray-matter')

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
})

// blockchain
let recentBlocks = []

try {
  const jsonBody = request('GET', 'https://mempool.observer/api/recentBlocks').getBody('utf8')
  recentBlocks = JSON.parse(jsonBody)
} catch (err) {
  console.error('Could not load recent blocks:', err)
}

const data = {
  articles,
  block: recentBlocks.length && recentBlocks[0].height,
  date: (new Date()).toJSON().split('T')[0]
}
const json = JSON.stringify(data, null, 2)

writeFileSync(dst, json)

// eslint-disable-next-line no-console
console.log(`✅  Generated site-data.json\n\n${json}`)
