---
title:  "lately scripted"  
layout: post  
date:   2018-08-29  
projects: true  
category: blog, project  
author: jartigag  
tag:
- proyectos
- python
- twitter
- bitcoin
- linkedin
- telegram
- web
- clojure
---

Este verano me he dedicado en gran parte a escribir código. Principalmente he programado para el proyecto de Typosquatting que presentaré como mi TFG, pero también he tirado algunas líneas en forma de scripts (todos [publicados en mi Github](https://github.com/jartigag?tab=repositories)) que voy a comentar brevemente.

## /índice:

- [trenca-TT](#trenca-tt)
- [tools.py](#toolspy)
- [genBTC](#genbtc)
- [un poco de webdev con clojure](#un-poco-de-webdev-con-clojure)
- [pinger&sender](#pingersender)

## [trenca-TT](https://github.com/jartigag/trenca-trending-topic)

Un script para **recoger los Trending Topics de Twitter**. Lo empecé con la idea de poder usarlo para el proyecto de mi TFG, en la fase de monitorización de dominios de marcas comerciales en redes sociales.  
En su versión actual, pide los TTs de las localizaciones indicadas en [woeids](https://es.wikipedia.org/wiki/WOEID).json a través de la API de Twitter, y los almacena en un fichero JSON o en una base de datos SQLite. Se puede ejecutar una vez o de manera continua (en principio, `SLEEP_INTERVAL=15*60` segundos), y el número de TTs o el de localizaciones puede limitarse con los argumentos `-n` y `-l`.  
Por primera vez, he usado la librería `sqlite3` en Python.

## [tools.py](https://github.com/jartigag/tools)

Una simple **interfaz** de línea de comandos **para acceder a algunas herramientas y enlaces útiles** que [he recopilado](https://raw.githubusercontent.com/jartigag/tools/master/tools.json). Se muestran ordenadas y clasificadas por categorías y subcategorías, de manera que con pulsar cuatro teclas se instala *y ejecuta (#wip)* la herramienta escogida, o bien se abre la aplicación online deseada.  
Como quería poder seleccionar entre las opciones ofrecidas de forma ágil, organicé las URLs en un JSON con dos listas por subcategoría (enlaces a Github y enlaces externos) y cargué el fichero de la siguiente manera:
```
index = json.load(open("tools.json"),object_pairs_hook=OrderedDict)
```
Así, con tres `for` anidados podía imprimir todos los elementos enumerados y gracias a `OrderedDict` mantenía el orden de los elementos dentro del diccionario `index`.  
También descubrí que se puede abrir un link en el navegador con `webbrowser.open_new_tab('t.co')`, e "instalar" (gracias a `git clone`) con `subprocess.run(["git","clone",url+".git",tool])`. Lo más difícil es definir una función `run_tool()` que ejecute cualquier herramienta, [en el lenguaje y con el nombre que sea](https://raw.githubusercontent.com/jartigag/tools/master/dev-notes.txt).

## [genBTC](https://github.com/jartigag/genbtc)

Para entender algunos detalles de Bitcoin, empecé por sus **fundamentos criptográficos**. Primero leí sobre las [direcciones de Bitcoin](https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses) y busqué cómo implementar sin librerías el **[ECDSA](https://en.bitcoin.it/wiki/Elliptic_Curve_Digital_Signature_Algorithm)**, mediante el cual se obtiene una clave pública `K` a partir de una clave privada `k`<sup>[1](#privKey)</sup> y la operación `K=k×G` sobre una [curva elíptica](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch04.asciidoc#elliptic-curve-cryptography-explained). Luego aprendí a **convertir esa clave pública en una dirección de Bitcoin con [codificación Base58Check](https://en.bitcoin.it/wiki/Base58Check_encoding)**. También quise probar a convertir la clave privada en formato **[WIF](https://en.bitcoin.it/wiki/Wallet_import_format)** y este en un **código QR** que pudiera escanear con una app-cartera de BTCs.  
[@ekaitz_zarraga](https://mastodon.social/@ekaitz_zarraga/100471196202731506) me indicó el libro [Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch04.asciidoc), una referencia técnica muy útil si te interesa conocer en profundidad el funcionamiento de esta criptomoneda.

---

<a name="privKey">1</a>.^ Una clave privada válida para Bitcoin es esencialmente un número aleatorio de 256 bits de entropía y menor que n≃10<sup>77</sup><[2<sup>256</sup>](https://en.wikipedia.org/wiki/Power_of_two). Por comparar, se estima que el universo observable tiene [10<sup>80</sup>](https://en.wikipedia.org/wiki/Observable_universe#Matter_content_%E2%80%93_number_of_atoms) átomos.

## [un poco de webdev con clojure](https://github.com/jartigag/wdcloj2)

De tanto ver solo buenas palabras sobre Clojure, cuando me topé con [este libro](https://pragprog.com/book/dswdcloj2/web-development-with-clojure-second-edition) pensé que era la oportunidad de iniciarme en este lenguaje que es todo listas entre paréntesis 😂  
Este es el repositorio menos desarrollado de los aquí presentes, pero como empecé sobre los [ejemplos propios del libro](https://pragprog.com/titles/dswdcloj2/source_code) es fácil que alguien que lo coja con más ganas qeu yo pueda aprovecharlo.

## [pinger&sender](https://github.com/jartigag/pinger-and-sender)

Estos dos scripts, fruto de un par de ratos muy breves, fueron adaptaciones de algunas líneas de código que había visto por ahí.   
Con **pinger.py** buscaba **si se había producido algún cambio en una página** de Moodle (lo que implicaba que se habían subido las notas), **y en tal caso enviaba una alerta** a través de un bot de Telegram. **sender.py** está extraído de [email-osint-ripper (@Quantika14)](https://github.com/Quantika14/email-osint-ripper), con el fin de **comprobar si alguno de los emails de una lista está registrado en Linkedin**.  
En ambos casos usé `BeautifulSoup`. Aparte de usar la librería de `telegram`, en pinger.py hice peticiones con cookies mediante `urllib`, mientras que en sender.py tuve que usar `mechanize` y `cookielib` para hacer las peticiones, enviar el formulario de login con POST y a la vez evitar el posible bloqueo de Linkedin.  
Cualquiera puede modificar rápidamente este código para su reutilización. Yo los escribí para solventar una necesidad puntual, pero sobre todo porque me daban pie para hacer un [terrible juego de palabras](https://github.com/jartigag/pinger-and-sender/blob/master/README.md) 😉<img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/whatsapp/116/face-palm_1f926.png" height="20px">
