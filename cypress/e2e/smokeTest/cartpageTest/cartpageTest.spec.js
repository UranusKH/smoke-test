/// <reference types="Cypress" />

describe("Verify 'Cart' page functionalities", function () {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });
  it("Verify user able to add product in the cart", function () {
    // 1. Go to Tamice.com
    // 2. Hove over 'Package Tour' from the navigation bar
    // 3. Click 'NY Big Apple Pass'
    // 4. Add products
    // 5. Go to 'Cart' page
    // 6. Verify product is in the 'Cart' page
  });
  it("User able to subtract product quantity from the '티켓구입' field", function () {
    //1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    //2. Hove over "Package Tour" from the navigation bar
    cy.contains("Package Tour").invoke("show").should("be.visible");
    //3. Get first li 'NY Big Apple Pass' from the hidden box
    cy.get("li").first().should("have.text", "NY Big Apple Pass").click({
      force: true,
    });
    //4. Go to "티켓구입" box and click "+" button two times
    for (let n = 1; n < 3; n++) {
      cy.xpath(
        "//body[1]/div[1]/div[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[5]/div[2]/img[2]"
      ).click();
    }
    //5. Check quantity equals to 3
    cy.xpath(
      "//body[1]/div[1]/div[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[5]/div[2]"
    ).contains("3");
    //6. Click "2" button until 1
    cy.xpath(
      "//body/div[@id='root']/div[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[5]/div[2]/img[1]"
    ).click();
    cy.xpath(
      "//body/div[@id='root']/div[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[5]/div[2]/img[1]"
    ).click();
    //7. Check quantity equals to 1
    cy.xpath(
      "//body[1]/div[1]/div[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[5]/div[2]"
    ).contains("1");
  });

  it("User able to add product quantity from the '티켓구입' field", function () {
    // 1. Go to Tamice.com
    cy.visit(Cypress.env("url"));
    // 2. Hove over 'Package Tour' from the navigation bar
    cy.contains("Package Tour").invoke("show").should("be.visible");
    // 3. Get first li 'NY Big Apple Pass' from the hidden box
    cy.get("li").first().should("have.text", "NY Big Apple Pass").click({
      force: true,
    });
    // 4. Click '+' button until 4
    for (let n = 1; n < 4; n++) {
      cy.xpath(
        "//body[1]/div[1]/div[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[5]/div[2]/img[2]"
      ).click();
    }
    // 5. Check quantity equals to 4
    cy.xpath(
      "//body[1]/div[1]/div[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[3]/div[5]/div[2]"
    ).contains("4");
  });

  it("Verify user able to see product detail after clicking tour list", function () {
    // 1. Go to Tamice.com
    // 2. Hove over 'Package Tour' from the navigation bar
    // 3. Click 'NY Big Apple Pass'
    // 4. Add products
    // 5. Go to 'Cart' page
    // 6. Click tour list
    // 7. Verify user able to see product detail
  });

  it("Verify user able to continue checkout", function () {
    // 1. Go to Tamice.com
    // 2. Hove over 'Package Tour' from the navigation bar
    // 3. Click 'NY Big Apple Pass'
    // 4. Add products
    // 5. Go to 'Cart' page
    // 6. Click Proceed Checkout
  });

  it("Verify user able to checkout as guest", function () {
    // 1. Go to Tamice.com
    // 2. Hove over 'Package Tour' from the navigation bar
    // 3. Click 'NY Big Apple Pass'
    // 4. Add products
    // 5. Go to Cart Page
    // 6. Click 'Proceed Checkout' button
    // 7. Click 'Guest Checkout' button
    // 8. Click 'Proceed Checkout' button
  });
  
  it("Verify user able to checkout with valid credit/debit card", function () {
    // 1. Go to Tamice.com
    // 2. Hove over 'Package Tour' from the navigation bar
    // 3. Click 'NY Big Apple Pass'
    // 4. Add products
    // 5. Go to 'Cart' page
    // 6. Click Proceed Checkout
    // 7. Click 'Login/Sign Up' button
    // 8. Type valid debit/credit card information
    // 9. Click 'Proceed Checkout' button
    // 10. Verify user able to checkout with valid credit/debit card
  });
});
