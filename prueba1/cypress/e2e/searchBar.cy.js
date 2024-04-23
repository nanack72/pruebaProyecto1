const searchingItems = {
  pez: 'koi',
  gato: 'persian'
}

describe('Search Koi Fish', () => {
  it('Search Koi', () => {
    
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

    //Se rellenan los campos
    cy.get('[size="14"]').type(searchingItems.pez);
    
    //Se hace click para guardar la información.
    cy.get('[name="searchProducts"]').click();

    //Mensaje de prueba exitosa.
    cy.log('La prueba de busqueda fue exitosa.');
  });
});

describe('Search Persian Cat', () => {
  it('Search Persian', () => {
    
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action');

    //Se rellenan los campos
    cy.get('[size="14"]').type(searchingItems.gato);
    
    //Se hace click para guardar la información.
    cy.get('[name="searchProducts"]').click();

    //Mensaje de prueba exitosa.
    cy.log('La prueba de busqueda fue exitosa.');
  });
});