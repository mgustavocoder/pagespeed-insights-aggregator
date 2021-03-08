const requestPageSpeedInsights = require('./clients/requestPageSpeedInsights')

module.exports = (urls, psiApiKey) => {
    return urls.map(url => requestPageSpeedInsights(url, psiApiKey))
}