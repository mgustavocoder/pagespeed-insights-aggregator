# Description
This module expose functions which returns a list of promises that performs Page Speed Analisys
using the google PSI API.

* getPSIPromiseListFromSiteMap(sitemap.xml url, pagespeed api key string)
  * Get the list of urls to be analysed from a given sitemap.xml page.


* getPSIPromiseListFromURLArray(urls as an array, pagespeed api key string)
  * Accepts the list of pages to be analysed as a parameter.

## Usage:
const { getPSIPromiseListFromSiteMap, getPSIPromiseListFromURLArray} = require('pageSpeedAgregator')

## getPSIPromiseListFromSiteMap:
```
async function run() {
    const sitemapUrl = 'https://www.jnjbrasil.com.br/sitemap.xml'
    const pageSpeedApiKey = 'your_pagespeed_api_key'

    const resp = await getPSIPromiseListFromSiteMap(sitemapUrl, pageSpeedApiKey)
    
    if (!resp.error) {
        console.log(`URL: ${resp.urls}`)

        resp.insightsPromises.forEach(promise => {
            promise.then(insights => {
                console.log(insights)
            })
        })
    } else {
        console.log(resp.error)
    }
}
run()
```
* Response Object
```
{
    error: [String] If it's not possible to reach or parse the sitemap.xml
    urls: [array] 'The list of urls from the sitemap.xml',
    insightsPromises: [array] 'An array of promises of page speed insights'
}
```

### Insights promise success response object 
```
{
   "url":"https://www.test.com/",
   "performanceScore": The score number,
   "performanceAudits": An object with more granulary scores and improvment suggestions
   "loadingExperience": The overall loading experince ["SLOW", "MEDIUM", "FAST]
}
```

### Insights promise error response object
```
{
   "error": [String] Error to get insights for this url: ${url},
   "url": [String] The URL that failed to be analysed,
   "message": [String] The failure reason 
}
```

## getPSIPromiseListFromURLArray:
```
const urls = ['http://www.sprite.com', 'https://www.sprite.com/products']
const pageSpeedApiKey = 'your_pagespeed_api_key'

const insightsPromises = getPSIPromiseListFromURLArray(urls, pageSpeedApiKey)
insightsPromises.forEach(promise => {
    promise.then(insights => {
        console.log(insights)
    })
})
```