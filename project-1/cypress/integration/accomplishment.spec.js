describe("Accomplishment dashboard tests", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("When information is missing show an error message", () => {
    cy.get(".Accomplishment-btn").click();
    cy.contains(
      ".Accomplishment-error-container",
      /complete the items above to continue/i
    );

    // When textarea is empty and check input is unchecked
    cy.getByTestId("accomplishment-title-input").type("Title1");
    cy.get(".Accomplishment-btn").click();

    // When check input is unchecked
    cy.getByTestId("accomplishment-input").type("Hello Cypress!");
    cy.get(".Accomplishment-btn").click();
    cy.contains(
      ".Accomplishment-error-container",
      /complete the items above to continue/i
    );
  });

  it("When you've filled out all of the information", () => {
    cy.getByTestId("accomplishment-title-input").type("Title1");
    cy.getByTestId("accomplishment-input").type("Hello Cypress!");
    cy.getByTestId("accomplishment-checkbox").click();
    cy.contains(".Accomplishment-error-container").should("not.exist");
    cy.get(".Accomplishment-btn").click();
    cy.get("img").should(
      "have.attr",
      "src",
      "/static/media/confetti.36cf59bd.svg"
    );
    cy.contains(
      ".Accomplishment-spinner-container",
      /this accomplishment was successfully submitted/i
    );
    cy.contains(".Accomplishment-btn", /go back/i);
  });

  it("When you click the go back button, the blank form is displayed", () => {
    cy.getByTestId("accomplishment-title-input").type("Title1");
    cy.getByTestId("accomplishment-input").type("Hello Cypress!");
    cy.getByTestId("accomplishment-checkbox").click();
    cy.get(".Accomplishment-btn").click();
    cy.contains(".Accomplishment-btn", /go back/i).click();
    cy.getByTestId("accomplishment-title-input").should("be.empty");
    cy.getByTestId("accomplishment-input").should("be.empty");
    cy.getByTestId("accomplishment-checkbox").should("be.not.checked");
  });
});
