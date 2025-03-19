
# Documentación de errores

1. ¿Qué ha ocurrido?
2. ¿Cómo se puede reproducir?
3. ¿En qué entorno ha ocurrido?
4. ¿Qué esperabamos que ocurriera?
5. Evidencias

## Titulo Errores en el html
 Descripción: No esta bien enlazado el css al estar mal escrito. En el input del email esta mal puesto ya que este deberia ser de tipo email y no de texto. En el textarea el mensaje permite agrandar el recuadro y se distorciona el estilo del formulario
 Pasos para reproducirlo: 
  - uno
  - dos
  - tres

  Resultado esperado: Que este bien enlazado el css, bien puesto el tipo de input que es el de email y tenga por defecto el textarea un tamaño especifico para que este no pueda aumentar de tamaño

  Resultado real:
    <link rel="stylesheet" href="style.css"> 
    <input type="email" name="email" id="email">

 

  Evidencias o código donde ocurre el error:
   Email:
  <input type="text" id="email" name="email">
  Enlazar css:
  <link rel="stylesheet" href="styles.css">

## Titulo Errores en el js
Descripcion: 

