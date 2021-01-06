---
title:  "cómo hemos llegado a este internet 2.0"
layout: post
date:   2021-01-06
notes: true
author: jartigag
image: /assets/images/posts/inter-nets.png
tag:
- notas
- internet
- redes
- unix
- iphone
- android
mastodonReplies: https://mastodon.social/@jartigag/XXXXXXXXXXXXXXXXXX
twitterReplies: https://twitter.com/jartigag/status/XXXXXXXXXXXXXXXXXXX
---

<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" media="all" href="{{site.baseurl}}/src/scroll-timeline.css">
<script type="text/javascript" src="{{site.baseurl}}/src/scroll-timeline.js"></script>

<nav class="timeline__nav">
  <ul>
    <li><span>1990</span></li>
    <li><span>1991</span></li>
    <li><span>1992</span></li>
    <li><span>1995</span></li>
    <li><span>1996</span></li>
    <li><span>2000</span></li>
    <li><span>2006</span></li>
    <li><span>2007</span></li>
    <li><span>2016</span></li>
  </ul>
</nav>

Hace tiempo investigué los comienzos de Internet [en este post]({{site.baseurl}}/como-hemos-llegado-a-este-internet), y me quedé a finales de
los 80. Hoy lo retomo en ese punto, ya para alcanzar nuestras redes de hoy en día. No sé si eso sería la web 2.0, la 3.0, la revolución móvil..
así que vamos a llamarlo "este internet 2.0", simplemente porque viene después de aquel post 1.0.

## /índice:

<!-- vim-markdown-toc GFM -->

* [Internet entra en el mercado](#internet-entra-en-el-mercado)
* [RedIRIS](#rediris)
* [La fibra óptica](#la-fibra-óptica)
* [Internet móvil](#internet-móvil)

<!-- vim-markdown-toc -->

### Internet entra en el mercado

Por aquel entonces, las universidades estadounidenses se hallaban conectadas a través de la NSFNET, la primera *backbone* de internet. Con la llegada en
1991 de la ley conocida como "the Gore Bill", el experimento académico se convirtió en "la autopista de la información". A partir de entonces, comenzó
la red de redes que conocemos como el Internet moderno. Construido y financiado con dinero privado, pero manteniendo su principio de generalidad. Gracias
a su propósito general, la experiencia de Internet se ha ido moldeando conforme a las decisiones de sus usuarios: desde la época en la que "estar en Internet"
equivalía a tener correo electrónico, hasta la orientación actual al streaming, pasando por la web, las descargas P2P, las apps y el *mobile-first*, etc.

[![](https://upload.wikimedia.org/wikipedia/commons/4/41/NSFNET-traffic-visualization-1991.jpg)](https://en.wikipedia.org/wiki/National_Science_Foundation_Network#/media/File:NSFNET-traffic-visualization-1991.jpg)

Seguramente la figura más reconocida en la historia de Internet sea **Tim Berners-Lee**, el padre de la World Wide Web. Durante su estancia en el CERN,
este científico inglés unió el hipertexto (concepto sobre el que ya había estado trabajando) con los protocolos TCP y DNS para diseñar el [protocolo HTTP](https://www.w3.org/People/Berners-Lee/Kids.html).
En <span class="milestone">1990</span> le puso aquella pegatina de "[esta máquina es un servidor, ¡no apagar!](https://en.wikipedia.org/wiki/Tim_Berners-Lee#/media/File:First_Web_Server.jpg)"
al ordenador que alojaría la primera página web: [info.cern.ch](http://info.cern.ch/).

Antes de la web, en Internet predominaban el email, las BBS y el acceso a máquinas remotas con telnet y FTP. Tras su popularización, la WWW se
extendió de tal manera que habitualmente se utiliza el nombre de este servicio para referirse a todo internet en su conjunto.

Berners-Lee siempre ha mantenido la [vocación pública](https://achievement.org/achiever/sir-timothy-berners-lee/#interview) de su invención,
reafirmada en múltiples ocasiones. Fue especialmente memorable la ceremonia de apertura de Londres 2012, en la que hizo un recordatorio en forma de tuit:
["This is for everyone"](https://en.wikipedia.org/wiki/Tim_Berners-Lee#/media/File:This_is_for_Everyone.jpg). Gracias a la filosofía abierta que la web
comparte con otros tantos elementos clave en la expansión de Internet, la red ha podido continuar tejiéndose por todo el mundo.

### RedIRIS

[](https://www.elsaltodiario.com/tecnologia/rediris-historia-privatizacion-plataforma-espanola-alternativa-silicon-valley)

A finales de los 80, en España se puso en marcha un proyecto que en <span class="milestone">1991</span> tomaría el nombre de [RedIRIS](http://www.rediris.es/difusion/publicaciones/boletin/)
(y que aún sigue vivo, tras integrarse en 2004 como departamento autónomo de la empresa pública Red.es). Se trataba de una red de conectividad para
la comunidad investigadora española, coordinada con otras redes de investigación europeas como la EARN (European Academic Research Network, promovida
por IBM) o la [EUnet](https://es.wikipedia.org/wiki/EUnet) (European Unix Users Network). De hecho, el nodo "Goya" de EUnet, situado en la UPM, dio
lugar en <span class="milestone">1992</span> a "Goya Servicios Telemáticos", el primer proveedor comercial de Internet en nuestro país, para todo tipo
de empresas y particulares.

[![]({{site.baseurl}}/assets/images/posts/red_earn_europa_1985-andreu_vea_tesis_doctoral_2002.jpg)](https://www.ontsi.red.es/sites/ontsi/files/50%20A%C3%B1os%20de%20la%20Red%20de%20Redes.pdf#page=143)

RedIRIS es un buen ejemplo para seguir la evolución de Internet en esa época (incluido el nacimiento del movimiento hacker en España con los [Glaucoma](https://hackstory.net/Glaucoma)).
Inicialmente, se usó la red de datos pública Iberpac. Luego se construyó una red troncal propia, ARTIX (Arteria IRIS X.25), mediante líneas punto a
punto de 64kbps alquiladas a Telefónica. Hasta entonces, la apuesta oficial eran los protocolos OSI: X.25 a nivel de red, X.400 para email... Pero OSI
se perdió en la burocracia y la excesiva complejidad conceptual. El PC, los sistemas UNIX (con TCP/IP embebido) y la generalización de tecnologías de
red de área local como Ethernet y Token Ring asientan la informática distribuida, que estará interconectada por redes de área local IP con acceso a
Internet. Aquí arranca SIDERAL (Servicio de Internet de RedIRIS), y tras él llegarán los proveedores comerciales de servicios de Internet como el
mencionado Goya y, en <span class="milestone">1995</span>, Infovía.

El lanzamiento de [Infovía](https://www.microsiervos.com/archivo/internet/20-anos-de-la-presentacion-de-infovia.html) por parte de Telefónica puede
tomarse como referencia en el camino hacia la privatización de las telecomunicaciones en España. La legislación de esos años se orientó a liberalizar
el sector: venta de las acciones que el Estado mantenía sobre Telefónica, creación del operador Retevisión, regulación mediante la CMT y cese de Infovía
en 1998 para abrir el servicio de Internet a la competencia. También se concedieron licencias para el desarrollo de
infraestructuras alternativas a la red tradicional de cobre de Telefónica (a finales de la década había decenas de cableras por toda la geografía nacional).

### La fibra óptica

En Estados Unidos, la privatización de las comunicaciones llega con la ley de Telecomunicaciones de <span class="milestone">1996</span>, que libera radicalmente
el mercado. Comienza un periodo de fusiones y adquisiciones por parte de las grandes empresas, que amplían sus monopolios, así como de endeudamiento instalando
infraestructura. Es el regreso del **salvaje oeste**, la fiebre del cable en lugar de la del oro. Citando a Marta Peirano, "Internet iba a cambiarlo todo
y tener un trozo de propiedad en el nuevo imperio era crucial, costase lo que costase. Cientos de empresas pidieron prestados miles de millones de dólares
para cablear el mundo con fibra óptica, incluyendo los [cables submarinos](https://atlantic-cable.com/Cables/CableTimeLine/index2001.htm) que [conectan los continentes](https://submarine-cable-map-2020.telegeography.com/)".
Debajo de las ciudades se acumularon montones de fibra óptica oscura, que es como se conoce a la fibra sin uso que se despliega pensando en futuras ampliaciones.
Curiosamente, ese derroche de fibra oscura es el que más tarde ha permitido alcanzar las capacidades que ahora tenemos.

[![]({{site.baseurl}}/assets/images/posts/psinet_world.png)](https://personalpages.manchester.ac.uk/staff/m.dodge/cybergeography/atlas/more_isp_maps.html)

Frente a esta corriente, en el mismo año John Perry Barlow escribió la [Declaracion de Independencia del Ciberespacio](https://www.eff.org/es/cyberspace-independence),
documento fundacional del cypherpunk. Proclamaba, ante el FMI y el resto de asistentes al Foro Económico Mundial, la libertad de la red, "espacio social
que construimos nosotros, por naturaleza independiente de la tiranía que nos tratáis de imponer. No tenéis derecho moral para gobernar sobre nosotros,
ni tenéis herramientas para obligarnos a temer". Sería el espíritu de la **Electronic Frontier Fundation**, organización fundamental en la lucha por
los derechos civiles online.

Se acercaba el estallido de la **burbuja puntocom**, cuya caída se precipitó en marzo del <span class="milestone">2000</span>. Durante los años previos,
todo el mundo quería estar subido a la "[Nueva Economía](https://es.wikipedia.org/wiki/Nueva_econom%C3%ADa)". La euforia llevó a la fuerte especulación
sobre empresas tecnológicas, que aumentaban su valor con solo empezar por "e-" o acabar en ".com". A esta crisis sobrevivieron muy pocos: Amazon (fundada
en 1994), eBay (95), Yahoo (95) y Google (98). En España, la burbuja quedó patente con [Terra](https://elpais.com/tecnologia/2005/07/15/actualidad/1121416078_850215.html).


Un nuevo símbolo se hace cada vez más frecuente en los diagramas de red: **la nube**. Independientemente del sistema que estuviera diseñando el ingeniero,
lo único que necesitaba saber de su relación con el exterior es que se podía conectar a esa nube. Con el tiempo, todo se definió respecto a la nube y a la
velocidad a la que podían intercambiarse datos con ella.

> "A medida que las redes crecieron y se interconectaron, la nube se hizo más importante. Se convirtió en una *buzzword* del negocio, en algo más que una
> abreviatura ingenieril: [se convirtió en una metáfora](https://www.theguardian.com/books/2018/jun/15/rise-of-the-machines-has-technology-evolved-beyond-our-control-).
> Pero hay un problema con esta metáfora: la nube no es algo mágico que simplemente funciona. Es una infraestructura física hecha de cables, satélites y
> enormes centros de datos con servidores que consumen grandes cantidades de agua y energía. Oscurecidos, se vuelven menos visibles y menos susceptibles
> a ser criticados, investigados y regulados."

### Internet móvil

Poco después del inicio de la expansión de las redes de cable, llegó el desarrollo de las redes móviles en España.

En los 90, el estándar europeo GSM para telefonía móvil soportaba una *killer app* de gran éxito durante décadas: el SMS. El acceso a Internet se hizo
posible a través del servicio WAP, ya sobre la tecnología GPRS. El mercado creció exponencialmente, de forma que en el año 2000 en España había cuatro
empresas con licencia para operar con las comunicaciones móviles denominadas de 3ª generación (UMTS): Xfera Móviles (actual Yoigo), Telefónica (actual
Movistar), Airtel Móvil (actual Vodafone) y Amena (la división móvil de Retevisión). Se produce el siguiente salto en el verano de 2013, cuando Yoigo
despliega su red LTE (4G) y le siguen el resto de operadores con red propia (Movistar, Vodafone y Orange).

Sin duda el hito en España de la era social de Internet fue Tuenti (<span class="milestone">2006</span>), que en 2012 alcanzó 15 millones de usuarios
registrados. Las redes sociales vinieron acompañadas del lanzamiento del iPhone en <span class="milestone">2007</span> y de los primeros Android un año
después. Todo ello propició la conexión ubicua de hoy en día y un ecosistema digital donde [cada persona cuenta con unos 3 dispositivos conectados](https://www.cisco.com/c/en/us/solutions/executive-perspectives/annual-internet-report/infographic-c82-741491.html).
También se aplica el paradigma de las redes sociales a activos de todo tipo (AirBnB, Uber, Wallapop), bajo el nombre de "consumo colaborativo".

Todos los sectores se ven afectados por la "transformación digital". Comercio electrónico, industria 4.0, auge de las startups... Destaca el fenómeno
de integración de servicios que se conoce como **la plataformización de Internet**. Representado por la hegemonía de las [GAFAM](https://en.wikipedia.org/wiki/Big_Tech)
(Google, Apple, Facebook, Amazon y Microsoft, las 5 empresas con más valor en el mercado), su potencia para capitalizar la información que recogen ha
hecho de la publicidad el modelo de negocio más importante en la actualidad. Cabe destacar también la práctica habitual en la que se ha convertido la
compra de "pequeñas" empresas innovadoras por parte de los agentes de Internet del *establishment*, normalmente tras haber fracasado en el lanzamiento
de un servicio online similar o como estrategia anti-competencia (citemos como ejemplo la compra de Whatsapp por parte de Facebook en <span class="milestone">2016</span>).
Pero qué voy a contar de esto que no se sepa ya.

Pues otro post que me ha quedado bien comprimidito 😂 No podía ser de otra manera, si nos fijamos en que con estos dos artículos de ["cómo hemos llegado
a este internet"]({{site.baseurl}}/como-hemos-llegado-a-este-internet) (que se leen en menos de un cuarto de hora) hemos recorrido 25 años de historia
en cada uno, repasando en ellos muchos de los nombres más importantes que nos han llevado hasta aquí.
