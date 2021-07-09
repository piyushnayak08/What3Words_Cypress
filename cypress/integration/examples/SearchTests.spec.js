import SearchPage from '../pageObjects/SearchPage'

describe('What3words search feature', () => {

    it('Search by 3 word address', () => {
        const sp = new SearchPage()
        sp.launchApp()
        sp.searchAddress('certified.potato.vine')
        sp.selectDropdownThreeWords('certified.potato.vine')
    })
})