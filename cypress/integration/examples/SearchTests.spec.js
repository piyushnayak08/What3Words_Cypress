import SearchPage from '../pageObjects/SearchPage'

describe('What3words search feature', () => {

    it('Search for 3 word address', () => {
        const sp = new SearchPage()
        sp.launchApp()
        sp.searchAddress('certified.potato.vine')
    })
})