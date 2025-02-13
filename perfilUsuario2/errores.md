# Documetación de errores

1. ¿Qué ha ocurrido?
2. ¿Cómo se puede reproducir?
3. ¿En qué entorno ha ocurrido?
4. ¿Qué esperabamos que ocurriera?
5. Evidencias

## Edad main.js [Descripción breve del problema]
 Descripción: Explicar en que consite el error
 Pasos para reproducirlo: En la casilla edad, permite colocar numeros negativos y no muestra un mensaje de advertencia.
 En el recuadro de la descripcion personal puede ampliarse mas de lo habitual y se sale de la pantalla.
  - uno : Coloca un número negativo en la casilla edad
  - dos : No muestra un mensaje de advertencia.
  - tres : se pasa del rango estipulado de edad.
  - cuatro : se sale de la pantalla al ampliar la descripción personal.


  Resultado esperado: No permite colocar numeros negativos y muestra un mensaje de advertencia.

  Resultado real: No muestra un mensaje de advertencia y permite colocar numeros negativos.

  Evidencias o código donde ocurre el error: main.js, linea 43 no esta especificado pero se puede ver en el archivo main.js que no hay un mensaje de advertencia para numeros negativos
  ```
  ```

