// configure markdown-it
const transformer = require('jstransformer')
const { _tr: mdTransformer } = transformer(require('jstransformer-markdown-it'))
const highlightjs = require('highlight.js')
const anchor = require("markdown-it-anchor");

const config = {
  html: true,
  typographer: true,
  highlight(code, lang) {
    const languages = lang != null ? [lang] : undefined;
    return highlightjs.highlightAuto(code, languages).value;
  },
  plugins: [
    [
      "markdown-it-anchor",
      {
        permalink: anchor.permalink.linkInsideHeader({
          symbol: '#',
          placement: "before",
        }),
      },
    ],
    [
      "markdown-it-implicit-figures",
      {
        figcaption: true,
        link: true,
      },
    ],
    ["markdown-it-mark"],
  ],
};


// monkey-patch render function to pass custom options
const { render: renderMd } = mdTransformer

mdTransformer.render = str => renderMd(str, config)

module.exports = mdTransformer.render
