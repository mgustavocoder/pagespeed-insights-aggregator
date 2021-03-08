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

const urls = ['http://www.sprite.com', 'https://www.sprite.com/products']
const pageSpeedApiKey = 'your_pagespeed_api_key'

const insightsPromises = getPSIPromiseListFromURLArray(urls, pageSpeedApiKey)
insightsPromises.forEach(promise => {
    promise.then(insights => {
        console.log(insights)
    })
})

module.exports = {
    getPSIPromiseListFromSiteMap,
    getPSIPromiseListFromURLArray
}
