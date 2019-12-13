
describe('My First Test', function() {
    it('it set value to global variable', function() {
      Cypress.env('some_variable', "hello")
    })
    it('it get value to global variable', function() {
      expect(Cypress.env('some_variable')).to.equal('hello')
    })
  })