const pug = require('pug')
const glob = require('glob')
const { writeFileSync } = require('fs')
const { resolve } = require('path')

const dist = path => resolve(__dirname, '..', `dist`, path)
const ignore = [dist('donate.html'), dist('thankyou.html')]
const html = glob.sync(dist('**/*.html'), { ignore })
const pages = html.map(file => file.replace(/.*\/dist/, 'https://d11n.net'))
const now = (new Date()).toISOString()
const file = resolve(__dirname, '..', `includes/sitemap.pug`)
const rendered = pug.renderFile(file, { pages, now, pretty: true })
const dst = resolve(__dirname, '..', 'dist', 'sitemap.xml')

writeFileSync(dst, rendered)
