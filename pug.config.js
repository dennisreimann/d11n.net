// configure markdown-it
const highlightjs = require('highlight.js')
const transformer = require('jstransformer')
const { _tr: mdTransformer } = transformer(require('jstransformer-markdown-it'))

// monkey-patch render function to pass custom options
const { render: renderMd } = mdTransformer

mdTransformer.render = str => renderMd(str, {
  html: true,
  typographer: true,
  highlight (code, lang) {
    const languages = (lang != null) ? [lang] : undefined
    return highlightjs.highlightAuto(code, languages).value
  },
  plugins: [
    ['markdown-it-anchor', {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    }],
    ['markdown-it-implicit-figures', {
      figcaption: true,
      link: true
    }],
    ['markdown-it-mark']
  ]
 })

// configure pug
const siteData = require('./site-data.json')

module.exports = {
  basedir: './includes',
  siteData
}
