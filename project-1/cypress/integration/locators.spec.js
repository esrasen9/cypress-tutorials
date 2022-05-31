describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("Locating elements with get", () => {
    // Get elements by tag name
    cy.get("button");
    cy.get("form");
    cy.get("h3");

    // Get elements by class name
    cy.get(".btn-1");

    // Get elements by tag name and attribute
    cy.get("button.btn-1");
    cy.get("button.Elements-btn#btn-with-id");
    cy.get("button.Elements-btn[type='submit']");

    // Get element by id
    cy.get("#form-1");

    // Get elements by specific attributes
    cy.get("[class='Elements-btn'][id='btn-with-id']");

    // Get elements by data test id
    cy.get("[data-cy='btn-id-1']");

    // support/Commands
    // add getByTestId method
    /*
        Cypress.Commands.add("getByTestId", (testId) => {
             cy.get(`[data-cy="${testId}"]`);
        });
    */
    cy.getByTestId("btn-id-1");
  });

  it("Locating elements with contains", () => {
    // Contains get only one element

    // Get element by text
    cy.contains("Unique Text");
    cy.contains("Not Unique Text");

    // Combine with selector
    cy.contains("[type='submit']", "Not Unique Text");

    // Combine with tag name
    cy.contains("h3", "Contains");
    cy.contains("form", "Not Unique Text");

    // Combine with get
    cy.get("button.btn-1").contains("Button in Form");
  });
});
