---
title:  "principios de analítica en tiempo real"
layout: post
date:   2020-11-22
notes: true
author: jartigag
image: /assets/images/posts/hummingbird-levi-jones-grRhpfQbBZI-unsplash.jpg
tag:
- notas
- charla
- análisis
- bases de datos
mastodonReplies: https://mastodon.social/@jartigag/105253363811680170
twitterReplies: https://twitter.com/jartigag/status/1330452033242075136
---
<p align="center">
<img src="{{site.baseurl}}/assets/images/posts/hummingbird-levi-jones-grRhpfQbBZI-unsplash.jpg">
</p>

Esta segunda entrada de "notas" va sobre un curso relámpago que tienen preparado en [Tinybird](https://www.tinybird.co) para su *on-boarding*.
Este verano lo hicieron [público](https://twitter.com/javisantana/status/1278639107556720640) y me pareció muy interesante, así que tomé algunos apuntes.

Antes de seguir, solo por comentarlo: me he dado cuenta de que esto de compartir apuntes de libros y charlas, que creía que lo estaba inaugurando con [el post anterior]({{site.baseurl}}/aburkov-machine_learning_engineering), en realidad lo llevo haciendo desde que empecé el blog.
Así que he reordenado los [posts antiguos que encajaban en esta categoría]({{site.baseurl}}/notes).

Sobre el curso, se basa en entender los fundamentos de las tecnologías que utilizamos para trabajar con grandes cantidades de datos.
Esto es lo que nos permitirá operar con ellos en tiempo real, de la misma forma que hemos venido operando hasta ahora con cantidades más manejables.

Cabe aclarar que "en tiempo real" no significa streaming, sino lo que podemos considerar en términos humanos como "instantáneamente".
Algo que, cuando tratamos con billones de datos actualizados constantemente, es un reto importante.
En estos casos especialmente (y en realidad siempre) conviene seguir [algunas reglas básicas](https://twitter.com/javisantana/status/1311991142301433857) a la hora de construir queries.
Pero hay otros aspectos más allá de la query que también influyen, y a ellos se aplican los siguientes principios:

## /índice:

<!-- vim-markdown-toc GFM -->

* [Principios generales de análisis en tiempo real sobre grandes conjuntos de datos](#principios-generales-de-análisis-en-tiempo-real-sobre-grandes-conjuntos-de-datos)
    * [III. Bases de datos](#iii-bases-de-datos)
    * [IV. Ingesta de datos](#iv-ingesta-de-datos)
    * [V. Almacenamiento de datos](#v-almacenamiento-de-datos)
    * [VI. Queries](#vi-queries)
    * [VII. Vistas](#vii-vistas)
    * [VIII. Productizar los datos](#viii-productizar-los-datos)
    * [IX. Escalado](#ix-escalado)

<!-- vim-markdown-toc -->

# [Principios generales de análisis en tiempo real sobre grandes conjuntos de datos](https://www.tinybird.co/courses/principles-of-real-time-analytics)

[J. Santana](http://javisantana.com) (Fundador de Tinybird)

## III. Bases de datos

Diferentes problemas (diferentes datos) requieren diferente soluciones.

**Bases de datos**: sistema de ficheros que los gestiona por nosotros de la forma más óptima.

¿Cuál es la base de datos adecuada para cada trabajo?
- Pequeña app con modelo relacional -> SQLite puede ser la opción adecuada
- Sistema robusto que asegure la integridad de los datos -> PostgreSQL/MySQL
- Almacenar datos no estructurados -> MongoDB/Elasticsearch
- Alta escalabilidad -> Cassandra, HBase, Redis o cualquier almacenamiento clave-valor
- Tienes 10TB de datos que necesitas analizar -> ClickHouse, Spark, Druid ("Bases de datos analíticas")
- _Todos los casos de uso a la vez -> Olvídate_

"Un Postgres bien configurado no es tan lento como para cambiarse a Elastic. Si te vas a cambiar a algo, tiene que ser 100, 1000 veces mejor."

Alternativa: copiar los datos como hacen las GPUs, como se ha hecho siempre en el mundo del hardware.

- ¿Qué es lo que diferencia a una base de datos analítica?

Fundamentalmente, el orden de los datos. Están enfocadas en solo añadir datos (aunque permitan otras operaciones).

- Row store vs. Column store

Ej.:
```
country | product | sales    Row store:
-------------------------                  row1: IND   |   choco   |  100
  IND   |  choco  |  100                   row2: IND   | ice-cream |  200
  IND   |ice-cream|  200
  GER   |  choco  |  400     Column store:
  USA   |  noodle |  500                country:  IND  |    IND    |  GER  |  USA
                                        product: choco | ice-cream | choco | noodle
```

¿Cuál es la ventaja?
Ej.: ordenar la ropa por día o por tipo.
En el día a día, normalmente preferimos poder coger la ropa por día.
Pero alguien que trabaja en una tienda podrá querer coger todas las camisetas.

Si en mi caso de uso típicamente seleccionaré una de cien columnas, solo necesitaré ir a memoria a buscar el trozo que tiene toda esa información.
Además, los datos similares en posiciones cercanas serán más fácilmente compresibles.
También se podrán vectorizar, lo que puede agilizar las operaciones.

> Donde normalmente fallamos es en la ingesta y en el almacenamiento de los datos.

## IV. Ingesta de datos

- Tipos de fuentes de datos:
    * Streams/Logs: eventos de aplicación, Kafka
    * Datos de sistemas transaccionales como bancos o la mayoría de apps web: tenemos una vista de los datos en momentos concretos
    * Datos en bruto almacenados en alguna parte (CSV/JSON)

- Métricas importantes:
    * Tasa de ingesta
    * Tamaño de ingesta

- La clave es ingestar tanto como sea posible de una vez (buffers, batch). "Cuanto más hagas a la vez, más rápido funcionará"

- Tablas de eventos -> crecen continuamente
- Tablas de dimensiones -> muchos órdenes de magnitud menores

## V. Almacenamiento de datos

Con grandes cantidades de datos, entender cómo se almacena los datos internamente es importante.

Lo que queremos al final es **que nuestras queries vayan más rápido**.

Consejos sobre aspectos como: esquemas, cargar en memoria la mayoría de datos, compresión, tipos de datos, re-ordenar los datos de la mejor manera para la que cogemos los datos en nuestro caso -> índices (accesos con distintos patrones)...

## VI. Queries

Cómo funciona la paralelización en las bases de datos analíticas, a distintos niveles:

* Ordenación de los datos en función de su acceso: antes de consumirlos y a la hora de consumirlos
* Paralelización entre varias máquinas
* Paralelizarión entre varios cores
* Vectorización, usando extensiones SSE (Streaming SIMD (Single Instruction Multiple Data) Extensions) que tiene en los pocesadores para procesar más de un valor a la vez

> "La query más rápida es la que no procesa datos  
> (solo los que necesitas)"

Poner los **filtros primero**. Hacer las **operaciones simples primero**.

Ej.:
```
select a,b,c,d
    from (select a,b from t where b>10) --filtro
    join dimensions using a             --join
```

> "Usa menos columnas. Usa índices"

## VII. Vistas

Es una forma de facilitar las queries haciendo parte del trabajo por adelantado (ordenar).
Existen vistas materializadas y live. Principales problemas: tamaño y mantenimiento (actualización).
A veces se les llama "cubos (de datos)".

> "Duplicar datos puede ahorrar dinero"

Es más barato usar la RAM y el disco (duplicar datos) que las CPUs (calcular).

- Vistas incrementales: no necesito recalcularlas enteras, solo necesito recalcular los estados intermedios de los datos nuevos.

- Casos de uso en las vistas: **denormalización en ingesta**.
    * Hacer los joins según llegan los datos nuevos (prejoin)
    * Precalcular cosas complejas (ej: condición de varias columnas en una sola)

---
Denormalizar: "Proceso de procurar optimizar el funcionamiento de una base de datos por medio de la agregación de datos redundantes (-> más columnas)"

## VIII. Productizar los datos

Hay diferentes formas de exponer tus datos: API, CSV, desde Tableau u otros BIs, etc.

Consejo general: piensa en tus piezas analíticas como otra pieza más de tu sistema (es decir: con sus esquemas, tests, código, CI, etc.), no como una base de datos expuesta al mundo.

## IX. Escalado

Antes de escalar, hay que tener en cuenta:

n° máquinas: 1 ->  2  
complejidad: 1 -> 10

Intentar escalar verticalmente. Si no, más CPUs es preferible a más MHz.

Sharding -> Más velocidad

Replicación -> Redundancia (y también velocidad)
