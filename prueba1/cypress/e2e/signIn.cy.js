const validUserRegistered = {
  username: 'ackerman',
  password: '12345'
}

describe('User Sign In API', () => {
  it('Sign In', () => {
    
    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=');

    //Se rellenan los campos
    cy.get('[name="username"]').type(validUserRegistered.username);
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type(validUserRegistered.password);
    
    //Se hace click para guardar la información.
    cy.get('[name="signon"]').click();

    //Comprobacion del exito de la prueba.
    cy.url().should('eq', "https://petstore.octoperf.com/actions/Catalog.action");
    
    //Mensaje de prueba exitosa.
    cy.log('La prueba de inicio de sesion fue exitosa.');
  });
});