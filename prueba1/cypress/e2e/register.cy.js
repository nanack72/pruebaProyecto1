const validUser = {
  userID: 'Samuel',
  phoneNumber: '1234',
  newPassword: '1234',
  email: '1234@gmail.com',
  address: 'Costa Rica',
  state: 'Heredia',
  zip: '2002',
  enable: 'true'
}

describe('User registration API', () => {
  it('Register a new user', () => {
    
    cy.visit('https://petstore.octoperf.com/actions/Account.action?newAccountForm=');

    //Se rellenan los campos
    cy.get('[name="username"]').type(validUser.userID);
    cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(2) > input').type(validUser.newPassword);
    cy.get(':nth-child(2) > tbody > :nth-child(3) > :nth-child(2) > input').type(validUser.newPassword);
    cy.get(':nth-child(4) > tbody > :nth-child(1) > :nth-child(2) > input').type(validUser.userID);
    cy.get(':nth-child(4) > tbody > :nth-child(2) > :nth-child(2) > input').type(validUser.userID);
    cy.get(':nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > input').type(validUser.email);
    cy.get(':nth-child(4) > tbody > :nth-child(4) > :nth-child(2) > input').type(validUser.phoneNumber);
    cy.get(':nth-child(5) > :nth-child(2) > input').type(validUser.state);
    cy.get(':nth-child(7) > :nth-child(2) > input').type(validUser.state);
    cy.get(':nth-child(8) > :nth-child(2) > input').type(validUser.state);
    cy.get(':nth-child(9) > :nth-child(2) > input').type(validUser.zip);
    cy.get(':nth-child(10) > :nth-child(2) > input').type(validUser.address);
    
    //Se marca la casilla del enable.
    cy.get(':nth-child(6) > tbody > :nth-child(3) > :nth-child(2) > input').check();

    //Se hace click para guardar la información.
    cy.get('[name="newAccount"]').click();

    //Comprobacion del exito de la prueba.
    cy.url().should('eq', "https://petstore.octoperf.com/actions/Catalog.action");
    
    //Mensaje de prueba exitosa.
    cy.log('La prueba de registro de usuario fue exitosa.');
  });
});