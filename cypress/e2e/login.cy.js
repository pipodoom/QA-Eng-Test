describe('Login Test', () => {
  it('should go through the test cases using predefind credentials in fixtures/config.JSON to easily switch up user info', () => {

    // load cofg.JSON and assign to consts

    cy.fixture('config').then(config => {
      
      const loginURL = config.loginURL;
      const userName = config.userName;
      const password = config.password;
      const emailAddress = config.userEmail;
      
      const firstName = config.firstName;
      const middleName = config.middleName;
      const lastName = config.lastName;

      const userProject = config.userProject;
      const startDate = config.startDate;
      const endDate = config.endDate;
    
    

    // navigate to login page and enter stored credentials in the appropriate field,then click submit

    cy.visit(loginURL);
    cy.get('input[name="username"]').type(userName);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // assert that we've successfully logged into the dashboard via URL

    cy.url().should('include', '/dashboard');

    
    // lets add a candidate!

    cy.contains('Recruitment').click()
    cy.url().should('include', 'viewCandidates');    

    cy.contains('Add').click()

    cy.get('input[name="firstName"]').type(firstName);
    cy.get('input[name="middleName"]').type(middleName);
    cy.get('input[name="lastName"]').type(lastName);
   
    
   cy.contains('-- Select --').click()
   cy.contains('QA').click()


   cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(emailAddress)

   cy.contains('Save').click()

   // asserts the candidate has been created 

    cy.contains('Initiated').should('exist')
    

    cy.contains('Recruitment').click()

    // asserts correct info was entered and now displays

    cy.get('.orangehrm-container').should('contain', 'QA')
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').should('contain', lastName)

    // cleans up (deletes) all candidates

    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
    cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()

    // to the Time section to generate a report with predfined values from our config.JSON

    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()

    cy.get('.oxd-autocomplete-text-input > input').type(userProject)
    cy.contains(userProject).click()

   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(startDate).click()

   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(endDate).click()

    cy.get('.oxd-button').click()

    cy.get('[style="height: 32px; transform: translateY(0px);"] > .cell-action')

    // wasn't sure what to do with the results of the report

    // just started reading up on testNG. looks straight forward. just adding expected @before and @after throughout the script
    })
  })
})
  

    
