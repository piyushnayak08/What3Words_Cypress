import SearchPage from '../pageObjects/SearchPage'

describe('What3words search feature', () => {
    beforeEach(() => {
        const sp = new SearchPage()
        sp.launchApp()
      })

    it('Search by 3 word address', () => {
        const sp = new SearchPage()
        sp.searchAddress('certified.potato.vine')
        sp.selectDropdownThreeWords('certified.potato.vine')
    })

    it('Search by Name', () => {
        const name = 'Tower Bridge hotel'
        const sp = new SearchPage()
        sp.searchAddress('Tower Bridge')
        sp.selectDropdownName(name)
    })
})