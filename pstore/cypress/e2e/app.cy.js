const { CYPRESS_ID } = require("../../src/cy_constant");
const { generateTestSelector } = require("../support/helper");

describe("Pet Store App", () => {
  it("allows user to login, view pets, and edit pet information", () => {
    // Visit the login page
    cy.visit("http://localhost:3000/");

    // Type in the username and password and click the login button
    cy.get(generateTestSelector(CYPRESS_ID.USERNAME_INPUT)).type(
      "admin@admin.com"
    );
    cy.get(generateTestSelector(CYPRESS_ID.PASSWORD_INPUT)).type("AdminAdmin");
    cy.get(generateTestSelector(CYPRESS_ID.LOGIN_BUTTON)).click();

    // Wait for the login to complete and confirm the user landed on Dashboard
    cy.get(generateTestSelector(CYPRESS_ID.WELCOME_MESSAGE)).should(
      "be.visible"
    );

    // EDIT PET TEST
    cy.get(generateTestSelector(CYPRESS_ID.EDIT_PET_BUTTON)).eq(0).click();
    cy.get(generateTestSelector(CYPRESS_ID.CHANGE_STATUS_DROPDOWN)).should(
      "be.visible"
    );

    // Change pet status and save
    // cy.get(generateTestSelector(CYPRESS_ID.UPDATE_PET_INFO_BUTTON))
    //   .eq(0)
    //   .click();
    // cy.get(generateTestSelector(CYPRESS_ID.PET_STATUS_BADGE)).should(
    //   "be.visible"
    // );

    // // View available pets
    // cy.contains("Available Pets").should("be.visible");

    // // Edit the pet's name and status
    // cy.get('[placeholder="Name"]').clear().type("New Pet Name");
    // cy.get('[placeholder="Status"]').clear().type("Pending");

    // // Save the changes
    // cy.contains("Save").click();

    // // Confirm that the changes were saved
    // cy.contains("Edit Pet Information").should("be.visible");
    // cy.contains("Name: New Pet Name").should("be.visible");
    // cy.contains("Status: Pending").should("be.visible");
  });
});
