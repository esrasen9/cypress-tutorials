describe("Accomplishment dashboard tests", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("When text or accomplish includes giraffe, displays inappropriate content error", () => {
    cy.intercept("POST", "http://localhost:4000", (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your content is not appropriate",
        });
      });
    });
    cy.getByTestId("accomplishment-title-input").type("Title1");
    cy.get(".Accomplishment-textarea").type("giraffe");
    cy.getByTestId("accomplishment-checkbox").click();
    cy.get(".Accomplishment-btn").click();
    cy.get(".Accomplishment-error-container")
      .should("be.visible")
      .and("have.text", "Your content is not appropriate");
  });
});
