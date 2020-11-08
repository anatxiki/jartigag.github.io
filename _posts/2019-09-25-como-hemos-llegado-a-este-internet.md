---
title:  "cómo hemos llegado a este internet"
layout: post
date:   2019-09-25
author: jartigag
image: /assets/images/posts/inter-nets.png
tag:
- internet
- unix
- redes
- linux
- libro
mastodonReplies: https://mastodon.social/@jartigag/102854461876365102
twitterReplies: https://twitter.com/jartigag/status/1176920595822456834
---

<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" media="all" href="{{site.baseurl}}/src/scroll-timeline.css">
<script type="text/javascript" src="{{site.baseurl}}/src/scroll-timeline.js"></script>

<nav class="timeline__nav">
  <ul>
    <li><span>1962</span></li>
    <li><span>1969</span></li>
    <li><span>1971</span></li>
    <li><span>1972</span></li>
    <li><span>1974</span></li>
    <li><span>1979</span></li>
    <li><span>1981</span></li>
    <li><span>1982</span></li>
    <li><span>1983</span></li>
    <li><span>1984</span></li>
    <li><span>1987</span></li>
  </ul>
</nav>

Este verano leí el libro "El enemigo conoce el sistema", de Marta Peirano, y me gustó lo bien documentado que está. Disfruté especialmente el
capítulo "Infraestructuras", a partir del cual he seguido tirando del hilo hasta recoger en este post algunos de los hechos más interesantes sobre la
informática de los 70-80 y el inicio de Internet.

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9hIQjrMHTv4" frameborder="0" allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
  <a href="http://www.lonja.de/the-history-of-the-internet/"><p>"The History of the Internet", Motiongraphics Documentary</p></a>
</div>

## /índice:

- [Arpanet](#arpanet)
- [UNIX](#unix)
- [TCP/IP](#tcpip)
- [PC](#pc)

## ARPANET

Paul Baran, en su informe ["Simulación Digital de **Enrutado de una patata caliente** en una Red de Comunicaciones Distribuidas de Banda
Ancha"](https://www.rand.org/pubs/research_memoranda/RM3103.html) de <span class="milestone">1962</span>, proponía un modelo que Donald Davies, del
NPL de UK, bautizaría como "*conmutación de paquetes*", y que mejoraba en dos factores clave el sistema de "*conmutación de circuitos*" que apoyaban
los Bell Labs de AT&T. Por un lado, Baran enfatizaba las virtudes estratégicas de una red descentralizada y distribuida ante un ataque nuclear
(trabajaba para la RAND Corporation, el laboratorio de ideas de las Fuerzas Armadas estadounidenses, en plena Guerra Fría). Por otro, Davis destacaba
la velocidad y eficiencia de este método de comunicación de datos.

Sin embargo, fue Leonard Kleinrock quien tuvo el honor de estrenar **ARPANET**. En la IPTO de ARPA, J.C.R. Licklider imaginaba esta red mientras
escribía "*Man-Computer Symbiosis*". Después, R. Taylor dirigió el equipo que la puso en marcha, con L. Roberts al frente. Finalmente, en <span
class="milestone">1969 </span>Kleinrock envió desde la UCLA hasta el Standford Research Institute un fallido "Login" que tuvo que reenviarse tras la
2ª letra. Efectivamente, ¡el primer mensaje en Internet fue ["LOL"](https://www.lk.cs.ucla.edu/personal_history.html)! 😂😂

A pesar de la expansión de la red, el presupuesto de DARPA estaba bajo mínimos en <span class="milestone">1971</span>, así que la agencia intentó
vendérsela a AT&T, pero esta no la quiso. Si el Gobierno o la única operadora que podía comprarla hubieran entendido su verdadero potencial.. Otro
pelo le hubiera corrido al Internet abierto y descentralizado que hemos conocido hoy.

<p align="center">
<img src="{{site.baseurl}}/assets/images/posts/inter-nets.png">
</p>

Todas estas redes y sus responsables convergieron en la [International Computer Communications Conference](https://tools.ietf.org/html/rfc371) de
<span class="milestone">1972</span>. Allí se fraguó el
[INWG](http://alexmckenzie.weebly.com/inwg-and-the-conception-of-the-internet-an-eyewitness-account.html), primer grupo de trabajo de la red, que
abordaría "el problema de Internet".

## UNIX

El mismo año que nacía ARPANET, Ken Thompson escribía **UNIX** V1 en el mes de agosto: una semana para el sistema operativo, otra para la consola,
otra para el editor y una más para el ensamblador. Tenía muchas, muchas ganas de jugar a [*Space
Travel*](https://en.wikipedia.org/wiki/Space_Travel_(video_game)).

Otros empleados del Bell Labs como Dennis Ritchie (también procedente del proyecto Multics), Brian Kernighan (la K de AWK) y Douglas McIlroy (autor
de herramientas como el *pipeline*, `sort` o `diff`) se sumaron al desarrollo del sistema operativo. En <span class="milestone">1979</span>, lanzaron
una última versión antes de que AT&T lo explotara comercialmente, la famosa V7.

Para trabajar en su red, ARPA compró la licencia de Bell Labs, pero se quedó con la distribución de UNIX que un estudiante de Berkeley, Bill Joy,
había creado bajo la licencia BSD. Un tiempo después, el presidente del INWG, Vint Cerf, encargaría a Joy un UNIX V7 modificado para su nuevo
protocolo, TCP/IP. Esta sería la primera estación de trabajo que haría con Sun Microsystems, empresa que funda en <span class="milestone">1982</span>.

## TCP/IP

Cerf y Kahn buscaban una solución al [problema de internet](https://www.wired.com/2012/04/epicenter-isoc-famers-qa-cerf/): cómo interconectar
cualquier ordenador en una red común, ya se instale en un puesto fijo, en un barco o en un avión. Según el entorno, los paquetes podrán ser más
rápidos o más lentos, tendrán distintos tamaños, se perderán...

El planteamiento de estos dos estadounidenses sobre la conmutación de paquetes se conoció como "*circuito virtual*". No obstante, los europeos Louis
Pouzin y Donald Davies no lo aceptaron por dos motivos: primero, porque les parecía una implementación compleja, y por tanto difícil de vender a la
industria; y segundo, porque mezclaba en el mismo protocolo la capa de transporte y las que participaban en el protocolo de extremo a extremo.

"Esta dualidad era políticamente inaceptable, porque estas dos capas debían ser gestionadas por dos mundos muy distintos: las operadoras y la
computación. No se podía vender algo que implicara un consenso tan difícil, aunque técnicamente tuviera sentido", decía Pouzin. Se daba poder total
sobre la gestión del tráfico a las operadoras, que en Europa eran monopolios en manos de los Estados.

Para contrarrestarlo, la solución Pouzin-Davies, que se denominó "*datagrama*", añadía una cabecera antes de cada fragmento de mensaje. De esta
forma, los nodos podían adquirir la responsabilidad de recalcular la trayectoria óptima de cada paquete en función de las condiciones de tráfico
dadas en el momento.

Se formalizó así el *Transmission Control Protocol / Internet Protocol* mediante la [RFC 675](https://tools.ietf.org/html/rfc675) de <span
class="milestone">1974</span>. Era un diseño preparado para proteger al protocolo de quienes controlaban la infraestructura, "a prueba de fascismos y
de revoluciones".  Pero cuando presentaron el protocolo ante el CCITT (actual UIT), que se encargaba de la estandarización internacional, fue
rechazado. Hubert Zimmermann fue el único que, en vez de rehusar la decisión del comité, propuso para ellos el protocolo OSI. Aunque, a esas alturas,
TCP/IP ya era imparable.

Técnicamente, Internet nació el 1 de enero de <span class="milestone">1983</span>, [flag day](https://tools.ietf.org/html/rfc801) en el que ARPANET
dejó de mantener NCP en favor de TCP/IP.

## PC

Todavía quedaban unos años para que Internet llegara a los hogares de todo el mundo, pero la computación doméstica empezaba a tener cabida. En <span
class="milestone">1974 </span>el Altair 8800 inauguraba la era del **ordenador personal**. Traía BASIC, el producto con el que Bill Gates y Paul
Allen arrancaron Microsoft. A este ordenador le seguirían muchos otros clásicos, como el Apple II, el Spectrum, el Commodore 64 (todavía hoy el
ordenador más vendido de la historia)...  La revolución de los microprocesadores había llegado, haciendo que el Gigante Azul se tambaleara.

En sus setenta años de vida, IBM había dominado la industria tecnológica por completo. "Nunca han despedido a nadie por comprar un IBM", se decía.
Pero, de repente, eran demasiado lentos para competir con Hewlett-Packard, Texas Instruments, Compaq... De repente, se decía que "IBM sacando un
ordenador personal sería como [enseñar a bailar a un elefante](https://www.ibm.com/ibm/history/exhibits/pc25/pc25_birth.html)". De repente, en <span
class="milestone">1981 </span>convocaron a los *Dirty Dozen* para que produjeran el **IBM PC**, un Frankestein que abría la hermética arquitectura
marca de la casa.

En vez de fabricar cada parte, se lo encargaron a terceros. IBM se reservó el diseño de la BIOS, pero sus rivales supieron reproducirla mediante
ingeniería inversa. Surgieron los competitivos clones de IBM, basados en los microprocesadores Intel 8086 y 8088, capaces de correr el mismo software
que vendía Microsoft. Y en medio de la revuelta, Macintosh se presentaba en la Super Bowl de <span class="milestone">1984</span> con el famoso
anuncio de Ridley Scott. "¡Nosotros prevaleceremos!"

Y no sólo se clonaron PCs de IBM; desde que se prohibiera el uso de UNIX para la enseñanza tras la V7, surgieron importantes proyectos para
reescribir UNIX que marcarían un nuevo rumbo en la historia informática. Richard Stallman inició en <span class="milestone">1983</span> el desarrollo
de **GNU** (GNU's Not Unix), y con él nació el movimiento de software libre. En <span class="milestone">1987</span>, Andrew S. Tanembaum terminó
MINIX y lo empezó a usar en sus clases de diseño de sistemas operativos. En un grupo de noticias de Usenet sobre este SO, un joven Linus Torvalds de
21 años publicaba que estaba haciendo "*a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones*".
Con el tiempo, **Linux** y los SOs basados en él dominarían casi todos los segmentos de la informática, desde los dispositivos embebidos hasta los
superordenadores, pasando por los smartphones. La excepción es la eterna promesa linuxera: cada año va a ser el año de [Linux en el
escritorio](https://netmarketshare.com/operating-system-market-share.aspx)..  hasta que algún año lo sea.

Con todo lo que he resumido, ¡y no he llegado a la WWW, ni al Internet comercial, las dotcom, el iPhone...! Ya si eso seguiremos otro día 😉
