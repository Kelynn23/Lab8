describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Volume Test', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then( () => function($el) {
      expect($el).to.have.value(75);
    })    
  });
  
  it('Slider Test', () => {
    cy.get('#volume-slider').invoke('val', "33").trigger('input');
    cy.get('#volume-number').then( () => function($el) {
      expect($el).to.have.value(33);
    })
  });

  it('Audio Volume Test', () => {
    cy.get('#volume-slider').invoke('val', "33").trigger('input');
    cy.get('#horn-sound').then( () => function($el) {
      expect($el).to.have.prop('volume',0.33);
    })
  });

  //first bullet point
  it('party-horn-image-check', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then( () => function($el) {
      expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg");
    })
    cy.get('#horn-sound').then( () => function($el) {
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
    })
  });

  //second bullet point
  it('Volume Image Test High', () => {
    cy.get('#volume-slider').invoke('val', "90").trigger('input');
    cy.get('#volume-image').then( () => function($el) {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    })
  });

  it('Volume Image Test Medium', () => {
    cy.get('#volume-slider').invoke('val', "66").trigger('input');
    cy.get('#volume-image').then( () => function($el) {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    })
  });

  it('Volume Image Test Low', () => {
    cy.get('#volume-slider').invoke('val', "20").trigger('input');
    cy.get('#volume-image').then( () => function($el) {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    })
  });
  
  it('Volume Image Test Mute', () => {
    cy.get('#volume-slider').invoke('val', "0").trigger('input');
    cy.get('#volume-image').then( () => function($el) {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
    })
  });

  //third bullet point
  it('Honk Button Disabled', () => {
    cy.get('#volume-number').clear().type('abc');
    cy.get('#honk-btn').then( () => function($el) {
      expect($el).should('be.disabled')
    })
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then( () => function($el) {
      expect($el).should('be.disabled')
    })
    
  });

  //fourth bullet point
  it('Volume Out of Range', () => {
    cy.get('#volume-number').invoke('val', "500").trigger('input');
    cy.get('#volume-number:invalid').should('have.length', 1);
    }
  );
 
});
