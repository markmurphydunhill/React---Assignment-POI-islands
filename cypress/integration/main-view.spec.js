describe("Main View ", () => {
    beforeEach(() => {
        cy.visit("/");
        //cy.get(".card").eq(2).as("targetcard")
           // .find(".card-footer")
         //   .find("button")
           // .as("cardbuttons");
    });

    it("loads the list of Regions and Islands for default region", () => {
        //cy.get(".badge").should("contain", 50);
        cy.get(".card-body").should("have.length", 11);
    });



    /*describe("Delete operation", () => {
        /* it("allows a contact be deleted", () => {
             cy.get(".badge").should("contain", 50);
             cy.get("@cardbuttons")
                 .contains("Delete")
                 .click();
             cy.get("@cardbuttons")
                 .contains("Confirm")
                 .click();
             cy.get(".badge").should("contain", 49);
         });*/

        it("allows a delete operation be canceled", () => {
            cy.get(".container-fluid").eq(2)
            //cy.get("@cardbuttons")
                .contains("Delete")
                .click();
            cy.get(".container-fluid").eq(2)
                .contains("Cancel")
                .click();
            cy.get(".card").should("contain", 6);
        });

    it("allows a Island be edited", () => {
        cy.get(".container-fluid").eq(1)
            .contains("Edit")
            .click();
        cy.get(".container-fluid").eq(1)
            .find("input")
            .first()
            .clear()
            .type("test@example.com");
        cy.get(".container-fluid").eq(1)
            .contains("Save")
            .click();
        cy.get(".container-fluid").eq(1)
            .find("[data-icon=envelope]")
          //  .first()
            .eq(0)
            .should("contain", "test@example.com");
    });






    });






