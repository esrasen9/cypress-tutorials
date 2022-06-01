// Testing HTTP Requests

describe("Rewards dashboard tests", () => {
  beforeEach(() => {
    // With mock
    // intercept get request
    cy.intercept("GET", "http://localhost:4000/rewards", {
      // send mock data
      fixture: "rewards.json",
    });
    cy.visit("/rewards");
  });

  it("Displays a list of rewards", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });
});
