---
title:  "escritura automática"
layout: post
date:   2018-03-30
category: blog
author: jartigag
tag:
- web
- javascript
---

> simplemente, escribe sin parar → https://jartigag.github.io/ea

## /índice:
- [Qué es](#qué-es)
- [Qué mide](#qué-mide)
- [Diseño web](#diseño-web)
- [Puesta en marcha](#puesta-en-marcha)

## Qué es
La escritura automática es una técnica de la corriente surrealista. Se define en la Wikipedia como la escritura **"que proviene de los pensamientos inconscientes de quien escribe"**. Se consigue dejando fluir las ideas sin la contención moral o social que suele limitar la redacción.

Oí hablar de la la escritura automática por primera vez en 2007, y me llamó la atención. Ya en los tiempos de Tuenti (!) usábamos el chat y los comentarios para aplicarla, sólo por las risas :joy: Una noche hace un par de semanas me acordé, y se me ocurrió que podría usar este recurso literario como excusa para trabajar un poco con los lenguajes web básicos.

Con [esta página](https://jartigag.github.io/ea) he pretendido facilitar una herramienta para **dar rienda suelta a la escritura automática** de manera simple y multi-plataforma, a la vez que ofrecer información sobre cómo escribe el usuario, en forma de 3 sencillas métricas.

## Qué mide
Durante un periodo de tiempo elegido, se obtienen dos índices principalmente: **pulsaciones por minuto**, que mide *a qué velocidad escribes* (ya sea en teclado de ordenador o de smartphone), y **palabras por minuto**, que refleja también *a qué velocidad discurres*.  
Otras pruebas de mecanografía suelen pedir que se teclee un texto dado. Por el contrario, este ejercicio te obliga a usar la imaginación y tu capacidad de expresión escrita, buscando que una práctica continuada a lo largo de varios minutos libere el discurso propio y a la larga mejore la habilidad de comunicación.

Para valorar la *calidad* de la expresión escrita del usuario también se muestra una **penalización** por repetir palabras.  
En caso de introducir una que ya se había empleado, se señala cuál ha sido y se resta -1 punto si aparecía en una frase anterior o -2 puntos si se repite dentro de la misma frase.

## Diseño web
Este ha sido mi primer desarrollo web desde cero. Por ello, he procurado complicarme lo menos posible, así que el diseño se basa en **etiquetas `<div>`** con estilos mínimamente retocados y un par de funciones en Javascript puro (**una que calcula las variables** que se muestran bajo el cuadro de texto periódicamente, y **otra que compara lo que se está escribiendo con lo ya escrito** al pulsar <kbd>↵ Enter</kbd>), aparte de las asociadas a cada elemento o botón.

Como resultado, me han quedado unas 40 líneas de HTML, 120 de CSS y 200 de Javascript.

En cuanto a usar **Vanilla JavaScript** o con librerías, aquí creo que no tenía sentido cargar ningún frameworks ni historias. Pero sí me parece un debate interesante el que hay en torno a las librerías Javascript. Me gustaría conocer mejor el tema, para entender en qué casos sale "rentable" usar una libería y poder elegirlas con buen criterio.

## Puesta en marcha
A lo largo del desarrollo he hecho varias pruebas desde el ordenador y desde el móvil, para comprobar cómo se visualizaba la página en distintas pantallas, detectar fallos y descubrir el resultado de esta aplicación en mí mismo; es decir, *a qué velocidad escribo* y *a qué velocidad pienso*. [¿Te gustaría saber qué tal escribes tú?](https://jartigag.github.io/ea)
