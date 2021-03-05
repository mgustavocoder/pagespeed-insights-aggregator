const { expect } = require('chai')
const { parsePerformanceAudits } = require('../../httpClients/formatPsiResponse')
const auditsMock = require('./mocks/performanceAudits.mock.json')
const formatedObject = require('./mocks/performanceAuditsFormated.mock.json')

describe('Parse PSI Response unit tests', () => {
    it('Should properly format the PSI response', () => {
        const formattedResponse = parsePerformanceAudits(auditsMock)
        expect(formattedResponse).to.deep.equal(formatedObject);
    })
})