const { expect } = require('chai')
const parsePerformanceAudits = require('../../../functions/parsers/parsePerformanceAudits')
const auditsInput = require('./mockData/auditsInput.json')
const expectedAuditsOutput = require('./mockData/auditsOutputs.json')

describe('Parse performance audits tests', () => {
    context('Format Performance Audits Response tests', () => {
        it('Given a VALID performance audits json then returns a formated audit json', () => {
            const formattedAudits = parsePerformanceAudits(auditsInput)
            expect(formattedAudits).to.deep.equal(expectedAuditsOutput);
        })

        it('Given a NULL performance audits json then returns an empty object', () => {
            const formattedAudits = parsePerformanceAudits(null)
            expect(formattedAudits).to.deep.equal({});
        })
    })
})