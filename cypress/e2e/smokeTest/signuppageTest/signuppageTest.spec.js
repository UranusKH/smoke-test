/// <reference types="Cypress" />

describe("Verify 'Sign up' page functionalities", function () {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
  })
  it("Verify sign up functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign Up' button
    // 3. Click 'Don't have an account' button
    // 4. Click 'Create an Account' button from Sign up page
    // 5. Type all valid information
    // 6. Check 'Terms & Conditions'
    // 7. Click 'Sign Up'
  });
  it("Verify Google sign up functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign Up' button
    // 3. Click 'Don't have an account' button
    // 4. Click 'Google sign up' button from Sign up page
    // 5. Type all valid information
    // 6. Click 'Sign Up'
  });
  it("Verify Naver sign up functionality", function () {
    // 1. Go to Tamice.com
    // 2. Click 'Login/Sign Up' button
    // 3. Click 'Don't have an account' button
    // 4. Click 'Naver sign up' button from Sign up page
    // 5. Type all valid information
    // 6. Click 'Sign Up'
  });
});
