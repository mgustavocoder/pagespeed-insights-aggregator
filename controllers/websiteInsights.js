const psiClient = require('../httpClients/psiClient')
const insightsManager = require('../services/insightsService')
const { getWebsitePages } = require('../services/sitemapCrawler')

function getInsightsListAsync() {
    const urls = getWebsitePages('https://www.coca-cola.com')

    console.log(urls)

    return urls.map(url => {
        return insightsManager.getInsights({ 
            client: psiClient, 
            url
        })
    })
}

module.exports = {
    getInsightsListAsync
}