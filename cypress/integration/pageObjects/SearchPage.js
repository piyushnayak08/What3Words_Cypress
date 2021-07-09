class SearchPage {
  launchApp() {
    cy.visit("https://what3words.com/daring.lion.race");
    cy.title().should("contains", "what3words");
    cy.get("[data-testid=AcceptAll] > .MuiButton-label").click();
  }

  searchAddress(value) {
    cy.get("[data-testid=ThreeWordAddress-Text]").click();
    cy.get("[data-testid=SearchPanel-Input]").type(value);
    cy.wait(3000);
  }

  selectDropdownThreeWords(value) {
    cy.get(".notranslate").each(($el, index, $list) => {
      if ($el.text() === value) {
        cy.wrap($el).click();
        cy.wait(1000);
      }
    });
    cy.get(".notranslate").should("have.text", value);
    cy.wait(2000);
  }

  selectDropdownName(value) {
    cy.get(".SearchPanel-LocationLine1").each(($el, index, $list) => {
      if ($el.text() === value) {
        cy.wrap($el).click();
        cy.wait(1000);
      }
    });
  }

  selectDropdownCoordinate(value) {
    cy.get(".SearchPanel-Location").type("{downarrow}")
    cy.wait(1000);
  }

  errorNotFound(value) {
    cy.get(".NotificationMessage-Label").contains('No address found.')
    cy.wait(1000);
  }
}
export default SearchPage;
