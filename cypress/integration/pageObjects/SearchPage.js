class SearchPage {
  launchApp() {
    cy.visit("https://what3words.com/daring.lion.race");
    cy.title().should("contains", "what3words");
    cy.get("[data-testid=AcceptAll] > .MuiButton-label").click();
  }
  searchAddress(value) {
    cy.get("[data-testid=ThreeWordAddress-Text]").click();
    cy.get("[data-testid=SearchPanel-Input]").type(value);
  }
}
export default SearchPage;
