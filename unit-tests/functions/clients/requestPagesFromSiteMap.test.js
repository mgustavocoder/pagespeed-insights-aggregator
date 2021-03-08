const { expect } = require('chai')
const testHelper = require('./testHelpers/requestPagesFromSitemapHelper')

const SITE_MAP_URL = 'https://www.tests.com/sitemap.xml'

describe('Sitemap Crawler Tests', () => {
    context('Tests of the requestPageFromSitemap function', () => {
        it('Given a VALID sitemap.xml then returns an array with the list of urls',
        async () => {
            const { requireRequestPageFromSitemap, getAxiosMockValidSitemapXml } = testHelper
            const requestPageFromSitemap = requireRequestPageFromSitemap({ axiosMock: getAxiosMockValidSitemapXml() })
            const listOfUrls = await requestPageFromSitemap(SITE_MAP_URL)
            expect(listOfUrls).to.be.an('array')
        })
    
        it('Given an NULL sitemap.xml then throws error',
        async () => {
            const { requireRequestPageFromSitemap, getAxiosMockNullSitemapXml } = testHelper
            const requestPageFromSitemap = requireRequestPageFromSitemap({ axiosMock: getAxiosMockNullSitemapXml() })
            try {
                await requestPageFromSitemap(SITE_MAP_URL)
                expect.fail()
            } catch(err) {
                expect(err.message).to.equal(`Retriving the list of URL for ${SITE_MAP_URL} fails.`)
            }
        })
    })
})