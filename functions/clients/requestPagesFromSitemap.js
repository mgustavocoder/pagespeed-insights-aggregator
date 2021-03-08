const axios = require('axios')
var xml2js = require('xml2js')

module.exports = async siteMapUrl => {
    try {
        const { data } = await axios.get(siteMapUrl)
    
        var parser = new xml2js.Parser();
        const siteMapXml = await parser.parseStringPromise(data)
    
        const urlArray = siteMapXml.urlset.url.map(urlObject => urlObject.loc[0])
        return urlArray    
    } catch {
        throw new Error(`Retriving the list of URL for ${siteMapUrl} fails.`)
    }
}