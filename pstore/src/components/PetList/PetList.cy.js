import { CYPRESS_ID } from "../../cy_constant";
import { generateTestSelector } from "../../../cypress/support/helper";
import PetList from "./PetList";

describe("PetList Component", () => {
  it("loads pets successfully", () => {
    cy.mount(<PetList status="pending" />);

    cy.contains("Loading...").should("be.visible");

    cy.wait(300);
    cy.get(generateTestSelector(CYPRESS_ID.EDIT_PET_BUTTON)).should(
      "be.visible"
    );
  });

  it("handles API error", () => {
    cy.mount(<PetList status="nonexistent-status" />);

    cy.contains("API error").should("be.visible");

    cy.contains("No pets found.").should("exist");
    cy.get(generateTestSelector(CYPRESS_ID.EDIT_PET_BUTTON)).should(
      "not.exist"
    );
  });
});
