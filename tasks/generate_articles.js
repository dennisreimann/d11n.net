const pug = require('pug')
const matter = require('gray-matter')
const { readFileSync, writeFileSync } = require('fs')
const { join, resolve } = require('path')
const { articles } = require('../site-data.json')
const config = require('../pug.config')
const renderMarkdown = require('../markdown')

const template = resolve(__dirname, '..', 'includes/article.pug')

// articles
articles.forEach(article => {
  const filePath = resolve(__dirname, '..', 'articles', article.filename)
  const file = readFileSync(filePath)
  const { content } = matter(file)

  article.content = renderMarkdown(content)

  const dst = resolve(__dirname, '..', 'dist', `${article.name}.html`)
  const options = Object.assign({}, config, { article })
  const rendered = pug.renderFile(template, options)

  writeFileSync(dst, rendered)
})

// eslint-disable-next-line no-console
console.log(`✅  Generated ${articles.length} articles`)
