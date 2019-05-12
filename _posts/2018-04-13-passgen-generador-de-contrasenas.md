---
title:  "passgen: generador de contraseñas"
layout: post
date:   2018-04-13
projects: true
category: blog, project
author: jartigag
image: /assets/images/posts/sc-passgen.png
tag:
- proyectos
- web
- javascript
mastodonReplies: https://mastodon.social/@jartigag/99854172124441523
---

Generador de contraseñas desarrollado para el proyecto dirigido de la asignatura "Servicios Web: Cliente".

Disponible en [https://jartigag.github.io/PassGen](https://jartigag.github.io/PassGen)  

![screenshot de la cabecera de PassGen]({{site.baseurl}}/assets/images/posts/sc-passgen.png)

## /índice:
- [Objetivo](#objetivo)
- [Desarrollo](#desarrollo)
- [Memoria](#memoria)
- [Validadores](#validadores)

## Objetivo

> "El proyecto dirigido consiste en implementar una interfaz que permita **generar contraseñas** 
> basándonos en ciertos parámetros, así como **medir la fortaleza** de una contraseña
> creada por el usuario. Como no vamos a hacer uso de ningún servidor, 
> nos centraremos en las capacidades front-end de la solución."

## Desarrollo

Cuando empecé a buscar [cómo había planteado otra gente este tipo de webs](https://duckduckgo.com/?q=password+generator&ia=answer) encontré diseños sencillos y bastante parecidos. Me fijé más en [password.es](https://password.es/), que a su vez se basó en [passwordgenerator.com](http://www.freepasswordgenerator.com/).

Durante el desarrollo de este proyecto he aprendido algunas cosas en cada lenguaje.  
En **HTML**, aparte del tema de `doctype`, `charset`, `viewport`, descubrí la etiqueta `<fieldset>`, que me pareció un elemento elegante, y `<progress>`, la etiqueta más razonable para usar en una barra de progreso, pero que viene [con sus peculiaridades para aplicarle estilo](https://css-tricks.com/html5-progress-element/).  
Y es que en el **CSS** hubo que usar el selector `.redBar::-[moz-progress-bar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-progress-bar){}` para que el color de la barra se mostrase correctamente en Firefox. También experimenté un poco con el [Flexbox](https://www.w3schools.com/csS/css3_flexbox.asp).  
En **Javascript** empleé por primera vez el [operador ternario](https://es.wikipedia.org/wiki/Operador_ternario) porque lo vi en el [código de passwords.es](https://password.es/en/js/script.js) y me pareció que favorecía la claridad. También tiré del [DOM](https://www.w3schools.com/js/js_htmldom.asp) para alguna situación concreta (por ejemplo, con `.className` en vez de `.style.display`). Hasta ahora no he necesitado meterme con ninguna librería, ni siquiera JQuery.

## Memoria

El código se compone de 3 archivos: index.html, style.css y app.js. Cada uno cumple un único objetivo totalmente diferenciado: el fichero HTML determina la estructura de la página, el fichero CSS añade todas las propiedades de estilo y el fichero Javascript recoge las funcionalidades implementadas.  
Los bloques de código que se utilizan varias veces están refactorizados como funciones separadas:
`resetAll`, `checkPassword`, `testPassword(passwd)`, `warning(m)` y `error(m)`.

Para todos los elementos con id, clases, selectores, variables y funciones se han utilizado nombres cortos o abreviados, descriptivos y se ha seguido la regla de capitalización "[camelCase](https://es.wikipedia.org/wiki/CamelCase)". Los elementos más repetidos se guardaban con nombres abreviados, como  
```
strengthNum = document.getElementById('strength').children[1]; // strength.children[1] es un <span>
```
El código se ha simplificado al máximo, utilizando bucles cuando era posible o el operador ternario para favorecer la legibilidad:  
```
chosenChars = mayus.checked) ? avalaibleChars[0] : '' equivale a
chosenChars IGUAL A: SI mayus.checked ENTONCES availableChars[0] SI NO ‘’
```
Se ha procurado que el código javascript sea fácil de seguir y autoexplicativo. Aun así, se incluyen comentarios frecuentemente, tanto para indicar en qué parte del enunciado se especificaba la función que se está implementando como para ayudar a entender el objetivo de algunas líneas determinadas.

Técnicas usadas para resolver las funcionalidades que se solicitaban:
1. **Captura de eventos de usuario**
Se han establecido Listeners de los eventos que se quería capturar (`click` e `input`) en los elementos donde se producía el evento de interés (`configParams`, `btnGen`, `btnRst` y `pswd`).
2. **Funcionalidad de borrar**
Mediante un Listener se asocian las siguientes acciones al evento `click` en el botón `btnRst`:  
Se recuperan los valores iniciales de los inputs del formulario `configParams`, se oculta la sección de mensajes para el usuario y se llama a la función `resetAll`, que reestablece los valores y propiedades que tenían al principio la contraseña y la sección de mensajes para el usuario.
3. **Funcionalidad de avisos**
Ante los distintos eventos que obligan a reanalizar los parámetros de configuración y el campo input/output (modificar el formulario `configParams`, pulsar el botón `btnGen` y modificar `pswd`), se comprueban las condiciones descritas en el enunciado del trabajo (función `checkPassword`) y se muestra el mensaje correspondiente en la sección de mensajes mediante las funciones `warning(m)` o `error(m)`, dependiendo de si es un aviso o un error que impide generar la contraseña (en ese caso el mensaje está en rojo).
4. **Funcionalidad de fortaleza**
La función `testPassword(passwd)` comprueba la fortaleza de la contraseña sumando puntos en función de la longitud y los conjuntos de caracteres usados. Además, se aplica una clase al elemento `strengthBar` que le da un color u otro, en función de los puntos que finalmente se obtengan, y se muestra el valor de esos puntos como un porcentaje.
5. **Funcionalidad al modificar input/output**
El Listener del evento `input` en el elemento `pswd` recorre los caracteres de la contraseña uno a uno y elimina los caracteres no permitidos. Después llama a `checkPassword` y `testPassword(passwd)` para revisar si se deben mostrar más avisos y para calcular la fortaleza de la contraseña.
6. **Funcionalidad de generar contraseña**
Se genera con `genPasswd`, función asociada al evento `click` del botón `btnGen`. El proceso consiste en concatenar en la variable `chosenChars` los caracteres que se hayan elegido en el formulario `configParams`, y después añadir en un bucle (con condición de parada “índice < longitud de contraseña indicada”) un caracter aleatorio (entre los de `chosenChars`) en cada iteración.

## Validadores

- Todo el [código HTML](https://github.com/jartigag/PassGen/blob/master/index.html) pasa la validación [http://validator.w3.org/](http://validator.w3.org/)
- Todo el [código CSS](https://github.com/jartigag/PassGen/blob/master/assets/style.css) pasa la validación [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)
- Todo el [código Javascript](https://github.com/jartigag/PassGen/blob/master/assets/app.js) pasa la validación [http://esprima.org/demo/validate.html](http://esprima.org/demo/validate.html)
