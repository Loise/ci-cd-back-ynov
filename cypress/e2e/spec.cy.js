describe("GET /", () => {
  it("gets a welcome message", () => {
    cy.request("GET", "/").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.eq("Hello World")
    })
  })
})

describe("GET /users", () => {
  it("gets a list of users", () => {
    cy.request("GET", "/users").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.utilisateurs).length.to.be.greaterThan(1)
    })
  })
})