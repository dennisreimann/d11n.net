// initialize markdown rendering
require('./markdown')

// configure pug
const siteData = require('./site-data.json')

module.exports = {
  basedir: './includes',
  siteData
}
