/// <reference types="Cypress" />

describe("Verify 'Landing' page functionalities", function () {
  it("Verify 'Home' button on landing page redirected to 'Home' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click Home button from the navigation bar
    cy.contains("Home")
      .click({
        force: true,
      })
      .should("have.text", "Home");
    //3. Verify Home button on landing page redirect to Home page
    cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/span[2]").should(
      "have.text",
      "Must See in New York"
    );
  });
  it("Verify 'NY Big Apple Pass' button on landing page redirected to 'NY Big Apple Pass' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Hover over "Package Tour" button
    cy.contains("Package Tour").invoke("show");
    // get first li from the hidden box
    cy.get("li").contains("NY Big Apple Pass").click({
      force: true,
    });
    //4. Verify NY Big Apple Pass button on landing page redirect to NY Big Apple Pass page
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/span[1]"
    ).should("have.text", "Big Apple Pass");
  });
  it("Verify 'Observation' button on landing page redirected to 'Observation' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Hover over "City Attractions" button
    cy.contains("City Attractions").invoke("show");
    //3. Click "Observations" button
    cy.get("li").contains("Observation(Scenics)").click({
      force: true,
    });
    //4. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/span[1]"
    ).should("have.text", "Scenics");
  });
  it("verify 'Musicals & Shows' button on landing page redirected to 'Musicals & Shows' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click "Musicals & Shows"
    cy.contains("Musicals & Shows").click({
      force: true,
    });
    //3. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/span[1]"
    ).should("have.text", "Broadway Musicals / Shows");
  });
  it("Verify '여행정보' button on landing page redirected to '여행정보' page", function () {
    // 1. Go to Tamice.com
    // 2. Click '여행정보' button
  });
  it("Verify 'About Us' button on landing page redirected to 'About Us' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click "About Us"
    cy.contains("About Us").click();
    //3. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[2]/span[1]"
    ).should("have.text", "Why Tour With Us?");
  });
  it("Verify 'Guide Tour' button on landing page redirected to 'Guide Tour' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Hover over "Guid Tour"
    cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/button[4]")
      .contains("Manhattan Day Tour")
      .click({
        force: true,
      });
    //3. Click "Manhattan Day Tour" button
    //4. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/span[1]"
    ).should("have.text", "Manhattan day");
  });
  it("Verify 'Cart' button on landing page redirected to 'Cart' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click 'Cart' button
    cy.contains("Cart").click();
    //3. Verify user redirected to 'Cart'page
  });
  it("Verify 'Login' button on landing page redirected to 'Login' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click 'Login' button
    cy.contains("Login").click();
    //3. Verify user redirected to 'Login'page
    cy.url().should("include", "user/log-in");
  });
  it("Verify 'Sign Up' button on landing page redirected to 'Sign Up' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click 'Sign up' button
    cy.contains("Sign Up").click();
    //3. Verify user redirected to 'Sign up'page
    cy.url().should("include", "user/sign-up");
  });
  it("Verify '
     ' button on landing page redirected to 'Logo' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click Tamice.com logo button
    cy.get("img[alt='Tamice logo']").first().click({force: true});
    //3. Verify user redirected to 'Sign up'page
    cy.url().should("eq", "https://thernlovendev.github.io/ticket-site/#/");
  });
  it("Verify 'Contact Us' button on navigation page redirected to 'Contact Us' page", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Click "Contact Us"
    cy.contains("Contact Us").click();
    //3. Verify Observations button on landing page redirect to NY Big Apple Pass page
    cy.xpath(
      "//html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[2]/span[1]"
    ).should("have.text", "Contact Us");
    cy.url().should("include", "/contact");
  });
  it("Verify user able to land 'My Bookings' page after click 'My booking' button under 'My Account' list", function () {
    // 1. Go to Tamice.com
    // 2. Click human icon
    // 3. Click 'My booking' button under 'My Account' list
    // 4. Verify user able to land 'My Bookings' page after click 'My Booking' button under 'My Account' lists
  });
  it("Verify user able to land 'My Account' page after click 'My Account' button", function () {
    // 1. Go to Tamice.com
    // 2. Click human icon
    // 3. Click 'My booking' button under 'My Account' list
    // 4. Verify user able to land 'My Account' page after click 'My Account' link
  });
  it("Verify sign out functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign up' button
    // 3. Type valid credential
    // 4. Click 'Login' button
    // 5. Click human icon button
    // 6. Click 'Sign out' button s
  });
});
