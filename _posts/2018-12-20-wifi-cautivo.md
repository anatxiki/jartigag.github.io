---
title:  "WiFi cautivo"
layout: post
date:   2018-12-20
projects: true
category: blog, project
author: jartigag
image: /assets/images/posts/captive.png
tag:
- wifi
- seguridad
mastodonReplies: https://mastodon.social/@jartigag/101274896570193224
twitterReplies: https://twitter.com/jartigag/status/1076772123170037760
---

Para el trabajo final de la asignatura de Seguridad, trasteamos un poco con redes Wi-Fi. *Y lo que descubrimos a continuación te sorprenderá.*  
Al menos nosotros consideramos que la gente debería ser consciente de lo fácil que es engañar a los dispositivos de una red WiFi. ¿Estaría esto al alcance de tus conocimientos informáticos? ¿Y al alcance de alguien cercano a ti? ¿Quizás alguien de quien te debas preocupar...? 😱

<a href="https://jartigag.xyz/captive"><img src="{{site.baseurl}}/assets/images/posts/captive.png"></a>

#### Alerta [script kiddies](https://knowyourmeme.com/memes/script-kiddie)
Aplicar estas prácticas fuera del entorno de un laboratorio [es ilegal](https://foro.elhacker.net/hacking_wireless/mitm_es_legal_en_una_red_publica-t468294.0.html;msg2119271#msg2119271). Aquí se describirán por su interés educativo y se recomendarán algunas posibles contramedidas. Por favor, *juakers*: el que venga para espiar conexiones ajenas, *[stay AFK](https://www.keepcalmandposters.com/poster/1941183_keep_calm_and_stay_afk)*.

## /índice:

- [WiFi Access Point](#wifi-access-point)
- [Portal Cautivo Falso](#portal-cautivo-falso)
- [HTTPS](#https)
- [Delorean](#delorean)
- [Contramedidas](#contramedidas)

## WiFi Access Point

Se puede crear un AP con igual SSID (es decir, igual "nombre") que el que tiene la red WiFi a suplantar (por ejemplo, con el [NetworkManager](https://en.wikipedia.org/wiki/NetworkManager), o si no, directamente con la herramienta [hostapd](https://w1.fi/hostapd/)), y ya solo con eso los dispositivos que tengan guardada esa red se conectarán automáticamente a nuestro Access Point.  
Si se trata de una red protegida con [WPA2-PSK](https://en.wikipedia.org/wiki/Wi-Fi_Protected_Access) (el mecanismo de seguridad habitual en las redes domésticas), simplemente copiando la MAC del AP legítimo en nuestra interfaz de red, los hosts se conectarán al AP falso.  
¿Y no se puede hacer nada [para protegerse](https://es.wikipedia.org/wiki/Suplantaci%C3%B3n_de_ARP#Defensas) de esto? Pues por defecto no, porque la capa de enlace en Ethernet funciona así. Las tablas de MACs dinámicas se van rellenando y no hay forma de autenticar las respuestas ARP... Podrían usarse entradas ARP estáticas, aunque en redes grandes sería inmanejable. Para esos casos, también existe software de detección y prevención de *ARP Spoofing*, además de algunas protecciones (débiles) por defecto a nivel de sistema operativo.

> "Internet no fue diseñado para ser seguro"

## Portal Cautivo Falso

Para demostrar de forma más tangible el peligro de esta técnica, usamos el portal que se abre al conectarse a la red wifi abierta "UPNA", mediante el cual obtienes acceso a Internet introduciendo tu usuario y contraseña de la universidad. ¿Pero qué pasa si quien te sirve esa página no es quien tú crees...?

<div style="text-align: center">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c8lA9j0KTmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>
Este es solo un posible uso malicioso de ejemplo. Si alguien se sitúa en medio de tu conexión a Internet y actúa como tu router... Pues ya me dirás si no podrá ver lo que es TODO tu tráfico en general.

## HTTPS

¿Todo, todo? Bueno, todo no: las conexiones cifradas no, claro. Esas del candadito, lo del "candado seguro". Pero es que <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/HTTPS_icon.png" alt="el candado de HTTPS" height="36" width="72" style="vertical-align: middle;"> **no garantiza "seguridad"**. Ese candado indica "privado".

En realidad, **el candadito únicamente significa que la conexión va cifrada**, es decir, que solo ven el contenido de esa comunicación los dos extremos: tú y el servidor de esa web, [sea quien sea el que está al otro lado](https://twitter.com/shanselman/status/187572289724887041). El certificado que se abre si haces click en el candado es lo que de alguna forma "valida la identidad" de esa dirección, ya que informa de qué [autoridad certificadora](https://es.wikipedia.org/wiki/Autoridad_de_certificaci%C3%B3n) ha comprobado quién controla esa web (además de cuándo lo hizo y cuándo expirará ese certificado).

## Delorean

Como digo, el certificado gracias al cual una web puede servirse por HTTPS tiene un periodo de validez. Cuando venza, la comunicación dejará de estar cifrada. Así que, si esa web no renueva su certificado, al conectarte a ella de nuevo un atacante podrá ver toda la información que os intercambiáis.

Además, hay [otra medida de seguridad (que incluye a los navegadores)](https://es.wikipedia.org/wiki/HTTP_Strict_Transport_Security#Soporte_de_navegadores) por la que a ciertos sitios web conocidos se conectan siempre y desde la primera vez por HTTPS. ¿Pero quién te dice que en un futuro alguien no suplantará la web de Paypal, Facebook o Amazon? *Torres más altas han caído*. Por razones como esta, **estas medidas tienen fecha de caducidad**.

El cuándo siempre importa. Hoy puede haber cierto mecanismo que me obliga a conectarme por HTTPS a Facebook hasta pongamos el "viernes, 22 de marzo de 2019 a las 13:00", pero **¿y si estamos en el futuro (o al menos nuestro ordenador así lo cree)?**

Igual nunca habías pensado en ello: ¿por qué tu ordenador/móvil sabe exactamente qué hora es? Lo apagas y enciendes, pero no se desincroniza como le pasaba al viejo reloj de tu horno, por ejemplo. La respuesta es fácil: [se lo dice Internet](https://es.wikipedia.org/wiki/Network_Time_Protocol).

¿Pero Internet quién? ¿Nos podemos fiar de que siempre se lo digan bien? ¿Y si (como antes) alguien se pone en medio y le da a mi ordenador una fecha incorrecta intencionadamente? Eso pensó [José Selvi](http://www.pentester.es/), y por eso construyó su [delorean.py](https://github.com/PentesterES/Delorean)

<div style="text-align: center">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/S3ZgKpmGU0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

## Contramedidas

A nivel de red empresarial, los administradores ya deberían saber si tienen que incluir otras soluciones para su WiFi o no.

**Como usuarios**, lo que podemos hacer es:  
- No conectarnos a redes públicas ni desconocidas  
- Usar una [VPN](https://www.xataka.com/seguridad/que-es-una-conexion-vpn-para-que-sirve-y-que-ventajas-tiene)  
- Lo más fácil (y a la vez "difícil de recordar"): **escribir https:// siempre**.  Es la manera de decirle al navegador "o me lo das por privado o no me lo das". La herramienta [HTTPS Everywhere](https://www.eff.org/https-everywhere) (para Chrome, Firefox, Android y Opera) también es útil en eso.
