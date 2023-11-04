Feature: 02 - Registration

  
  @Register
  Scenario: Registro como usuario
    Given  Me registro como usuario correctamente

  @Register
  Scenario: Registro fallido
    Given  Me registro con datos incorrectos
  
  @Register
  Scenario Outline: Registro usuario - Escenario Outline 
    Given Navego al sitio automationtesting
    When Me registro como usuario con email '<email>' y pass '<pass>' 
    Then Valido estar en la pagina para loguearme

        Examples:
          | email                   |   pass           |
          | otroemailv1@hotmail.com |   cypress#2023     |