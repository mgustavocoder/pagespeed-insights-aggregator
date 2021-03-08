const get = require('lodash.get')
const pagespeed = require('gpagespeed')
const parsePerformanceAudits = require('../parsers/parsePerformanceAudits')

module.exports = async (url, key) => {
    const options = {
        url,
        key
    }

    try {
        const response = await pagespeed(options)
        const performanceScore = get(response, 'lighthouseResult.categories.performance.score')
        const performanceAudits = get(response, 'lighthouseResult.audits')
        const loadingExperience = get(response, 'loadingExperience.overall_category')
        return {
            url,
            performanceScore,
            performanceAudits: parsePerformanceAudits(performanceAudits),
            loadingExperience
        }
    } catch (err) {
        return {
            error: `Error to get insights for this url: ${url}`,
            url,
            message: err.message
        }
    }
}