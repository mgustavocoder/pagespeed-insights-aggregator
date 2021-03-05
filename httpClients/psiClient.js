const get = require('lodash.get')
const pagespeed = require('gpagespeed')
const { parsePerformanceAudits } = require('./formatPsiResponse')

async function requestInsights(url) {
    const options = {
        url,
        key: 'AIzaSyAKgdzyAElsbiBWrUL5FOBxwt24pwCMMk4'
    }

    try {
        const response = await pagespeed(options)
        const performanceScore = get(response, 'lighthouseResult.categories.performance.score')
        const performanceAudits = get(response, 'lighthouseResult.audits')
        const loadingExperience = get(response, 'loadingExperience.overall_category')
        return {
            performanceScore,
            performanceAudits: parsePerformanceAudits(performanceAudits),
            loadingExperience
        }
    } catch (err) {
        console.log('Error', err)
    }
}

module.exports = {
    requestInsights
}