const websiteInsights = require('./controllers/websiteInsights')

const pageInsigthsPromiseList = websiteInsights.getInsightsListAsync()

pageInsigthsPromiseList.forEach(pageInsightsPromise => {
    pageInsightsPromise.then(insights => {
        console.log(typeof insights)
    })
})

