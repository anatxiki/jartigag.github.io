---
title:  "machine learning engineering"
layout: post
date:   2020-11-08
notes: true
author: jartigag
image: /assets/images/posts/cover-aburkov-machine_learning_engineering.png
tag:
- notas
- libro
- machine learning
mastodonReplies: https://mastodon.social/@jartigag/105174732236617291
twitterReplies: https://twitter.com/jartigag/status/1325416277477892096
---

Con esta entrada empiezo una nueva categoría de posts que voy a llamar "notas".
No son más que apuntes que he hecho mientras leía algún libro o veía alguna charla.

En este caso, salen de un libro sobre ingeniería de aprendizaje automático, que es un tema al que le quería echar un ojo.
Me picó la curiosidad después de haber desplegado mi [TFM sobre clustering](https://github.com/jartigag/tfm-clustering) en un entorno real
como buenamente supe, poniendo el foco en evitar cualquier complicación que amenazara poder presentarlo en la defensa del trabajo.
Una vez cerrada esa historia, encontré este libro, que se distribuye bajo el principio ["read-first, buy-later"](https://twitter.com/burkov/status/1324765117846851584),
y quise saber cómo dicen que hay que hacer esto.

Es un tema sobre el que me parece que no hay mucho publicado, por cierto.
No sobre teoría de machine learning, qué tipos hay y cómo funcionan los algoritmos más conocidos, claro. Eso está más que machacado.
Me refiero a poner a funcionar el aprendizaje automático en el mundo real, a lo ingenieril del asunto.
Este libro trata de esos aspectos prácticos que suelen descubrirse solo con la experiencia.

Lo que hice fue recopilar los borradores de los capítulos, que se ofrecían [sueltos en la web](http://www.mlebook.com/wiki/doku.php#released_drafts_of_the_chapters),
revisarlos todos por encima y leer en detalle los que me interesaban más.
Para quedarme con las ideas que exponía, escribí estas cuatro cosas, pero eso no quiere decir que sean las más importantes del libro.
Ni siquiera que esté de acuerdo con ellas o que deban tomarse como referencia. Solo las comparto como la síntesis que saqué de aquí en el momento en el que lo leí.
Si alguien más encuentra algo útil en ella, yo que me alegro :)

<p align="center">
<img src="{{site.baseurl}}/assets/images/posts/cover-aburkov-machine_learning_engineering.png">
</p>

## /índice:

<!-- vim-markdown-toc GFM -->

* [Machine Learning Engineering](#machine-learning-engineering)
    * [Cuándo usar aprendizaje automático](#cuándo-usar-aprendizaje-automático)
    * [Cuándo no utilizar aprendizaje automático](#cuándo-no-utilizar-aprendizaje-automático)
    * [El ciclo de vida de un proyecto de aprendizaje automático](#el-ciclo-de-vida-de-un-proyecto-de-aprendizaje-automático)
    * [Propiedades de un buen modelo](#propiedades-de-un-buen-modelo)
    * [Problemas comunes con los datos](#problemas-comunes-con-los-datos)
    * [Los datos de calidad](#los-datos-de-calidad)
    * [Generación de datos artificiales ("data augmentation")](#generación-de-datos-artificiales-data-augmentation)
    * [Selección de características](#selección-de-características)
    * [Reducción de dimensionalidad](#reducción-de-dimensionalidad)
    * [Escalar las características](#escalar-las-características)
    * [Buenas prácticas de la ingeniería de datos ("feature engineering")](#buenas-prácticas-de-la-ingeniería-de-datos-feature-engineering)
    * [Servir, monitorizar y mantener el modelo](#servir-monitorizar-y-mantener-el-modelo)
        * [Propiedades del entorno de ejecución en el que se sirve el modelo](#propiedades-del-entorno-de-ejecución-en-el-que-se-sirve-el-modelo)
        * [Servir un modelo en el mundo real: lidiar con errores](#servir-un-modelo-en-el-mundo-real-lidiar-con-errores)

<!-- vim-markdown-toc -->

# [Machine Learning Engineering](http://www.mlebook.com/wiki/doku.php)

[A. Burkov](https://ca.linkedin.com/in/andriyburkov) (Director de Data Science y Machine Learning Team Leader en Gartner)

## Cuándo usar aprendizaje automático

* Cuando el problema es demasiado complejo para programarlo (entiéndase como "codificarlo en términos de algoritmos tradicionales").

    ej.: detección de spam, concesión de préstamos

* Cuando el problema está cambiando constantemente.

    ej.: scraping

* Cuando es un problema de percepción.

    ej.: reconocimiento de voz / imagen / vídeo ("en el pasado, se usaban filtros").

* Cuando es un fenómeno "poco estudiado".

    "No se ha estudiado en profundidad científicamente, pero sus ejemplos son observables". ej.: opciones de medicación personalizadas para salud mental, predicciones a partir de logs de sistemas o redes informáticas complejos.

* Cuando el problema tiene un objetivo simple.

    ej.: decisiones de sí o no, un único número

* Cuando es efectivo en coste.

    Considerando el coste de: recoger y preparar datos, entrenar el modelo, construir y poner en funcionamiento la infraestructura para sevir y monitorizar el modelo y, por último, mantenerlo.

## Cuándo no utilizar aprendizaje automático

* Cuando cada acción del sistema o cada decisión que tome debe ser explicable.
* Cuando cada cambio en el comportamiento del sistema (respecto a su comportamiento pasado) debe ser explicable.
* Cuando el coste de un error que cometa el sistema es demasiado alto.
* Cuando se pueda resolver el problema utilizando desarrollo tradicional de software con un coste menor.
* Cuando una heurística simple sería suficiente para que funcionara razonablemente bien.
* Cuando no puedes conseguir una cantidad de ejemplos suficiente para representar todos los resultados del fenómeno.

## El ciclo de vida de un proyecto de aprendizaje automático

![]({{site.baseurl}}/assets/images/posts/ml_project_life_cycle.png)

## Propiedades de un buen modelo

* Respeta tanto las especificaciones de las entradas y las salidas como los requisitos de rendimiento.
* Beneficia a la organización (en términos de reducción de costes, incremento de ventas o beneficio).
* Ayuda al usuario (en términos de productividad, *engagement* y sentimiento).
* Es científicamente riguroso.

Al definir el objetivo de un proyecto de aprendizaje automático, deben definirse:
* Las entradas y salidas del modelo
* La función de coste
* La métrica de rendimiento

## Problemas comunes con los datos

* Alto coste
* Mala calidad
* Ruido
* Sesgo:
    * Sesgo de selección: tendencia a restringir la elección de fuentes de datos a aquellas que son convenientes, fáciles de obtener y/o efectivas en coste.
    * Sesgo de auto-selección: obtener los datos de fuentes que los proporcionan "voluntariamente" (ej.: encuestas).
    * Sesgo de variables omitidas: entre las características extraídas de los datos falta alguna que es necesaria para una predicción precisa (ej.: prediciendo la fidelidad del cliente, aparece un competidor y eso no estaba caracterizado en tu modelo).
    * Sesgo de muestreo: la distribución de ejemplos usada para el entrenamiento no refleja la distribución de las entradas que recibirá el modelo en producción.
    * Sesgo de prejuicio: ej.: fotos en las que los ricos son blancos y los pobres son negros, word embedding que predice que programmer - man + woman = homemaker.
    * Distorsión sistemática de los valores: es un problema relativo al dispositivo que hace las medidas u observaciones.
    * Sesgo del experimentador: tendencia a confirmar las hipótesis que tiene uno mismo a priori.
    * Sesgo de etiquetado: se da cuando un proceso o individuo sesgado asigna las etiquetas.
* Bajo poder de predicción: ocurre cuando los datos no contienen suficiente información de la que aprender o cuando el modelo no es suficientemente expresivo. Es difícil de anticipar. Sugerencias: ingeniar tantas características como sea posible (usa tu creatividad!), considerar fuentes de datos indirectas para enriquecer los vectores de características.
* Filtración de datos: afecta a varias fases del ciclo de vida del aprendizaje automático. Se define como "la introdución no intencionada de información sobre el objetivo que no debería estar disponible".

![]({{site.baseurl}}/assets/images/posts/data_leakage.png)

## Los datos de calidad

* Contienen información suficiente que se puede usar para modelar
* Reflejan las entradas reales que verá el modelo en producción.
* Son lo menos sesgados posible.
* No son un resultado del propio modelo.
* Tienen etiquetas consistentes.
* Están en una cantidad lo suficientemente grande como para generalizar a partir de ellos.

## Generación de datos artificiales ("data augmentation")

Estrategia para conseguir más datos etiquetados sin necesidad de procesos de etiquetado adicionales.

El caso más efectivo es el aplicado a imágenes. Consiste en aplicar operaciones simples como recortar o reflejar.

## Selección de características

No todas las características son igualmente importantes para un problema dado. Si estimamos la importancia de las características, podremos mantener sólo las más importantes. Esto nos permitirá ahorrar tiempo, cargar más ejemplos en memoria y mejorar la calidad del modelo.

Técnicas de selección de características:
* Descartar las colas largas.
* Boruta: este método envolvedor (wrapper), popular en Kaggle, entrena modelos de random forest de manera iterativa y les aplica test estadísticos para identificar las características como importantes o no importantes. Recuérdese que el meta-algoritmo random forest usa árboles de decisión basándose en la idea del bagging (empaquetado).
* Regulación Lasso (L1): mejora la generalización del modelo permitiendo que el algoritmo de aprendizaje automático aprenda a ignorar algunas características.
* Específicas de la tarea: ej.: eliminar palabras no significativas.

Las buenas características tienen alto poder de predicción, pueden computarse rápidamente, son fiables y están incorreladas. También son fáciles de entender y mantener.

## Reducción de dimensionalidad

* Reducción de dimensionalidad rápida: PCA (Análisis de Componentes Principales).
* Reducción de dimensionalidad para visualización: UMAP (Aproximación y Proyección Múltiple Uniforme), auto-encoder.

## Escalar las características

* Normalización: en un rango [0,1]. Cuidado con los outliers (posible solución: windsorización).
* Estandarización: reescalar los valores de las características de manera que tengan las propiedades de una distribución normal estándar (media 0, desviación típica 1). Es decir, calcular sus valores Z aplicando (x-avg)/stdev

## Buenas prácticas de la ingeniería de datos ("feature engineering")

Básicas:
* Escalar las características antes de entrenar el modelo.
* Documentar y almacenar las características en *schema files* o *feature stores* (esto en grandes organizaciones que reutilizan características a lo largo de múltiples equipos y proyectos).
```
feature{name:"height", type:float, min:..,max:..,.. zeroes:F, undefined:F, popularity:1.0},
feature{name:"color red", type:binary, zeroes:T, undefined:F, popularity:1.0}
```

Más:
* Generar muchas características simples.
* Reutilizar sistemas legacy.
* Usar IDs como características cuando es necesario..  
    Esto es contraintuitivo, pero permite cear un modelo que tiene un comportamiento en un caso general y otro en casos distintos (ej.: localización general/específicas).
* ..Pero reducir la cardinalidad cuando sea posible.  
    Técnicas: agrupar valores similares, agrupar colas largas, eliminar características con mucha cardinalidad
* Loggear los valores de las características (o al menos una muestra aleatoria)  
    Cuando se trabaje en una nueva versión del modelo, estos valores serán útiles para controlar la calidad de los datos de entrenamiento (los valores de las características en producción deben ser los mismos que en los datos de entrenamiento).

## Servir, monitorizar y mantener el modelo

### Propiedades del entorno de ejecución en el que se sirve el modelo

* Seguridad y corrección (al interaccionar con los usuarios).
* Facilidad de despliegue.
* Garantías de la validez del modelo -> tests tanto end-to-end como de confianza (calcular una métrica de rendimiento y establecer un rango de valores aceptables).
* Facilidad de recuperación -> rolling back
* Evitar desvirtuaciones entre el entorno de entrenamiento y el de producción (evitar utilizar dos bases de código distintas)
* Evitar bucles de retroalimentación ocultos. Hay dos tipos:
    * El modelo B extrae características de la salida del modelo A, sin saber que el modelo A utiliza la del modelo B.
    * Un solo modelo involucrado. ej.: acciones del usuario en un sistema anti-spam (el usuario no va a la carpeta de spam para marcar que algunos mensajes no son spam). Esto serían datos sesgados (skewed data), porque influenciamos en el fenómeno sobre el que queremos aprender. Para evitarlo, podría marcarse un pequeño % de ejemplos como "retenidos" y mostrárselos al usuario sin aplicar el modelo de antemano. Entonces solo estos ejempos retenidos se usarían como ejemplos adicionales de entrenamiento.

### Servir un modelo en el mundo real: lidiar con errores

La visibilidad del error es un factor importante a la hora de decidir si se esconde o no y cómo hacerlo. ej.: alertas no críticas. En esta situación, puede ser preferible optimizar el modelo para la precisión, a costa de mantener la sensibilidad razonablemente alta.

Precision (predicción positiva) = TP / TP+FP

Recall (sensibilidad o tasa de TP) = TP / TP+FN
