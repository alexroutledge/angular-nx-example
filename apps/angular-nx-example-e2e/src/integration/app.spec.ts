import { getGreeting } from '../support/app.po';

describe('angular-nx-example', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-nx-example!');
  });
});
