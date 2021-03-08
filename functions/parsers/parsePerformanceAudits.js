module.exports  = performanceAudits => {
    const response = {}
    if(performanceAudits && typeof performanceAudits == 'object') {
        let audits = Object.entries(performanceAudits)
        .map(entry => {
            const key = entry[0]
            const { title, description, score } = entry[1]
            resultObject = {}
            resultObject[key] = { title, description, score }
            return resultObject 
        }).filter(auditObj => Object.values(auditObj).some(valueObj => valueObj.score))
    
        audits.forEach(it => {
            Object.assign(response, it);
        })
        return response
    }
    return response
}