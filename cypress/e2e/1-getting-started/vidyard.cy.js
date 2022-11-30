context('Cypress', function () {
    beforeEach(function () {
      // These are not real credentials.
      // Please sign up (for free) at www.vidyard.com, verify your email address, then update these accordingly.
      // This test also requires at least one video in your Library, so please upload at least one video.
  
  
      cy.visit('https://secure.vidyard.com/user/sign_in');
      cy.get('#username').type(email);
      cy.get('#next-login').click();
      cy.get('#password').type(password);
      cy.get('#sign-in').click();
  
    });
  
    it('Firefox Headed/Headless Issue', { retries: 0 }, function () {
      // Some conditional testing is needed to set things up consistently.
      // First we do a long wait to make sure the element will have time to appear if it's going to.
      // Then, we dismiss it if it appears.
      cy.wait(10000);
     
      // This is where the interesting part of the test is.
      cy.get('[data-testid=video-overflow]')
        .first()
        .click();
      cy.get('[data-testid=video-overflow-share]')
        .find('.vy-truncate') // In headless runs, Cypress complains this element is detached from the DOM when we try to click it.
        // Note to customer: had to change from 'Share' to get it to work
        .should('have.text', '\n    Share\n  ')
        .click();
    });
  
  });
  