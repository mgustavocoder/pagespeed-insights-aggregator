const fs = require('fs');
const proxyquire = require('proxyquire').noCallThru()

const sitemapXml = fs.readFileSync(__dirname + '/../mockData/sitemap.xml', 'utf8');

function getAxiosMockValidSitemapXml() {
    return {
        get: () => { return { data: sitemapXml } }
    }
}

function getAxiosMockNullSitemapXml() {
    return {
        get: () => null
    }
}

function requireRequestPageFromSitemap({ axiosMock }) {
    const mockObject = {}
    if(axiosMock) Object.assign(mockObject, { 'axios': axiosMock })
    return proxyquire('../../../../functions/clients/requestPagesFromSitemap', mockObject);
}

module.exports = {
    getAxiosMockValidSitemapXml,
    getAxiosMockNullSitemapXml,
    requireRequestPageFromSitemap
}
