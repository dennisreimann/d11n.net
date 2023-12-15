const pug = require('pug')
const { mkdirSync, writeFileSync } = require('fs')
const { dirname, resolve } = require('path')
const config = require('../pug.config')

const renderPage = (name, data = {}) => {
  const file = resolve(__dirname, '..', `pages/${name}.pug`)
  const options = Object.assign({}, config, data)
  const rendered = pug.renderFile(file, options)
  const dst = resolve(__dirname, '..', 'dist', `${name}.html`)
  const dir = dirname(dst)

  mkdirSync(dir, { recursive: true })
  writeFileSync(dst, rendered)
}

renderPage('index')
