Feature: 03 - Shop Store

    Background:
        Given Me logueo como usuario correctamente - shop demo

    @shop @rangoPrecio
    Scenario: Buscar por rango de precio
        When Ingreso user '<user>' y pass '<pass>' 
        Then Ingreso al shop
        Then Busco por rango de precio, de medio a mayor
        Then Ingreso al rango de busqueda marcada
        Then Verifico que ingreso al rango de busqueda deseada

        Examples:
          | user                        |   pass            |
          | mita_cervantes@hotmail.com  |   Cmita2021#      |

    @elementosPage
    Scenario:  Verificar elementos en la página
        When Ingreso user '<user>' y pass '<pass>' 
        Then Ingreso al shop
        Then hago clic en el botón de menú Home
        Then debería ver sliders en la página de inicio

        Examples:
          | user                        |   pass       |
          | mita_cervantes@hotmail.com  |   Cmita2021# |