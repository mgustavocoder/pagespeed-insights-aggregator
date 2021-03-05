async function getInsights({ client, url }) {
    const insights = await client.requestInsights(url)
    return insights
}

module.exports = {
    getInsights
}