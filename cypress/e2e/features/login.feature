Feature: 01 - Login
  @login
  Scenario: Login como admin
    Given  Me logueo como admin correctamente
  
  @login
  Scenario: Login como usuario normal
    Given  Me logueo como usuario correctamente

  @login
  Scenario: Login fallido
    Given  Me logueo con credenciales incorrectas
  
  @login
  Scenario Outline: Login usuario - Escenario Outline 
    Given Navego al sitio automationtesting
    When Me logueo como usuario con user '<user>' y pass '<pass>' 
    Then Valido saludo de bienvenida en el Título

        Examples:
          | user                        |   pass            |
          | mita_cervantes@hotmail.com  |   Cmita2021#      |