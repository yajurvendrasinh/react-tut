import { CYPRESS_ID } from "../../cy_constant";
import { generateTestSelector } from "../../../cypress/support/helper";
import EditPets from "./EditPets";

describe("EditPets Component", () => {
  it("allows editing and updating pet information", () => {
    const pet = {
      id: 1,
      name: "Sample Pet",
      status: "available",
    };
    const onUpdateSpy = cy.spy().as("onUpdateSpy");

    cy.mount(<EditPets pet={pet} onUpdate={onUpdateSpy} />);
    cy.get(generateTestSelector(CYPRESS_ID.EDIT_PET_BUTTON)).should(
      "be.visible"
    );

    cy.get(generateTestSelector(CYPRESS_ID.EDIT_PET_BUTTON)).click();

    cy.get(generateTestSelector(CYPRESS_ID.EDIT_NAME_INPUT)).should(
      "be.visible"
    );
    cy.get(generateTestSelector(CYPRESS_ID.CHANGE_STATUS_DROPDOWN)).should(
      "be.visible"
    );

    cy.get(generateTestSelector(CYPRESS_ID.EDIT_NAME_INPUT)).clear();
    cy.get(generateTestSelector(CYPRESS_ID.EDIT_NAME_INPUT)).type("New Name");
    cy.get(generateTestSelector(CYPRESS_ID.CHANGE_STATUS_DROPDOWN)).select(
      "sold"
    );

    cy.get(generateTestSelector(CYPRESS_ID.UPDATE_PET_INFO_BUTTON)).should(
      "be.visible"
    );
    cy.get(generateTestSelector(CYPRESS_ID.UPDATE_PET_INFO_BUTTON)).click();

    cy.get("@onUpdateSpy").should("have.been.calledWith", {
      id: 1,
      name: "New Name",
      status: "sold",
    });
  });

  it("cancels the editing process", () => {
    const pet = {
      id: 1,
      name: "Sample Pet",
      status: "available",
    };
    const onUpdateSpy = cy.spy().as("onUpdateSpy");

    cy.mount(<EditPets pet={pet} onUpdate={onUpdateSpy} />);

    cy.get(generateTestSelector(CYPRESS_ID.EDIT_PET_BUTTON)).click();

    cy.get(generateTestSelector(CYPRESS_ID.EDIT_NAME_INPUT)).should(
      "be.visible"
    );
    cy.get(generateTestSelector(CYPRESS_ID.CHANGE_STATUS_DROPDOWN)).should(
      "be.visible"
    );

    cy.get(generateTestSelector(CYPRESS_ID.CANCEL_PET_INFO_BUTTON)).click();

    cy.get("@onUpdateSpy").should("not.be.called");
  });
});
