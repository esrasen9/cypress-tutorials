describe("todo tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("User can add, remove and check todo", () => {
    // Add random two todo
    cy.get("#title").type("todo1");
    cy.getByTestId("add-todo-btn").click();
    cy.contains("li", "todo1");
    cy.get("#title").type("todo2");
    cy.getByTestId("add-todo-btn").click();

    // Wait for submit (onsubmit function is async)
    cy.wait(2000);

    // Every todo is unchecked by default
    cy.contains(/total todos: 2/i);
    cy.contains(/selected todos: 0/i);

    // Check a todo
    cy.getByTestId("todo-todo2").children("input").check();
    cy.contains(/selected todos: 1/i);

    // Uncheck a todo
    cy.getByTestId("todo-todo2").children("input").uncheck();
    cy.contains(/selected todos: 0/i);

    // Remove a todo
    // data-cy = `todo-${title}`
    cy.getByTestId("todo-todo2").children("button").click();
    cy.contains("#title", "todo2").should("not.exist");
    cy.getByTestId("todo-todo1").children("label").should("have.text", "todo1");
  });
});
