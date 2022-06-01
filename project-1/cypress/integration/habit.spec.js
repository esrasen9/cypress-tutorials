describe("Habit dashboard tests", () => {
  beforeEach(() => {
    cy.visit("/habits");
    cy.contains("#habit-add-btn", "Add").click();
  });

  it("A modal appears when you click the add button", () => {
    cy.get(".modal-dialog").contains(/add a new habit/i);
    cy.get(".modal-dialog").should("be.visible");
  });

  it("When you click the save button, habit card appears", () => {
    // Before saving, the input field should be typed in
    cy.get("input").type("hello");
    cy.contains(".btn-primary", /save changes/i).click();
    cy.get(".HabitCard")
      .should("be.visible")
      .should("have.text", "hello")
      .children(".HabitCard__completion-container")
      .children(".HabitCard__completion-icon");
  });

  it("When you click the close button, modal disappears", () => {
    cy.contains(".btn-secondary", /close/i).click();
    cy.get(".modal-dialog").should("not.exist");
  });

  it("When you click the save changes button the modal will still appear if the input field is empty", () => {
    cy.contains(".btn-primary", /save changes/i).click();
    cy.get(".modal-dialog").should("be.visible");
    cy.get(".HabitCard").should("not.exist");
  });

  it("When you click on a habit card, the icon changes", () => {
    cy.get("input").type("hello");
    cy.contains(".btn-primary", /save changes/i).click();
    cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible");
    cy.get(".HabitCard").click();
    cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible");
  });
});
