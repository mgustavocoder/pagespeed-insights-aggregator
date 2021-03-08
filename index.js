const requestPagesFromSitemap = require('./functions/clients/requestPagesFromSitemap')
const getInsightsListAsync = require('./functions/getInsightsListAsync')

async function getPSIPromiseListFromSiteMap(siteMapUrl, psiApiKey) {
    let urls
    try {
        urls = await requestPagesFromSitemap(siteMapUrl)
    } catch(err) {
        return {
            error: err.message
        }
    }

    const insightsPromises = getInsightsListAsync(urls, psiApiKey)
    return {
        urls,
        insightsPromises
    }
}

function getPSIPromiseListFromURLArray(urls, psiApiKey) {
    return getInsightsListAsync(urls, psiApiKey)
}



module.exports = {
    getPSIPromiseListFromSiteMap,
    getPSIPromiseListFromURLArray
}
