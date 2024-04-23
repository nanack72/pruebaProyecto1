const validUserRegistered = {
  username: 'ackerman',
  password: '12345'
}

describe('Add items to the cart', () => {
  it('Add to Cart', () => {
    
    //Paso 1. Iniciar Sesion.
    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=');

    //Se rellenan los campos.
    cy.get('[name="username"]').type(validUserRegistered.username);
    cy.get('[name="password"]').clear();
    cy.get('[name="password"]').type(validUserRegistered.password);
    
    //Se hace click para guardar la información.
    cy.get('[name="signon"]').click();

    //Paso 2. Seleccionar mascota deseada.
    cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img').click();
    cy.get(':nth-child(3) > :nth-child(1) > a').click();

    //Paso 3. Agregar al carrito.
    cy.get(':nth-child(2) > :nth-child(5) > .Button').click();

    //Paso 4. Comprobacion de la prueba.
    //Comprobacion del exito de la prueba.
    cy.url().should('eq', "https://petstore.octoperf.com/actions/Cart.action?addItemToCart=&workingItemId=EST-16");
    
    //Mensaje de prueba exitosa.
    cy.log('La prueba de agregar al carrito fue exitosa.');
  });
});