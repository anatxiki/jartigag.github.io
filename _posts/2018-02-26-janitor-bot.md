---
title:  "janitor bot"
layout: post
date:   2018-02-26
projects: true
category: blog, project
author: jartigag
image: https://raw.githubusercontent.com/jartigag/janitor/master/logo.png
tag:
- proyectos
- telegram
- python
- redes
mastodonReplies: https://mastodon.social/@jartigag/99598320158826842
twitterReplies: https://twitter.com/jartigag/status/968833165082099712
---

[Janitor](https://github.com/jartigag/janitor) es una **herramienta para LANs** escrita en Python y controlable tanto desde terminal como mediante un
bot de Telegram.  Su función principal consiste en saludar cuando llega alguien y despedirle cuando se marcha. Es decir, este *empleado* cumple con
la primera norma de educación que cabe esperar en cualquier ámbito de la vida (incluida una red IP): **hacer ping** 🙃

Una vez iniciado el programa en cualquier máquina con [Python 3](https://www.python.org/) y conectada a una red local, nuestro conserje comprueba la
comunicación con los equipos de la red, enviando mensajes ICMP de forma continua a las IPs que el usuario haya pedido.

De esta manera, tenemos un host en la red que está al corriente de **si un dispositivo está en casa**, revisando cada pocos segundos si está
conectado al router. Ante una nueva conexión/desconexión de las IPs configuradas, el usuario recibe un mensaje de Telegram (esté o no conectado en
ese momento a la red local) informándole del evento.

Además, permite asociar **recordatorios** a cada IP. El objetivo de esta función es recibir un mensaje de Telegram con el texto deseado cuando el
dispositivo en cuestión *llegue a casa*.

![](https://raw.githubusercontent.com/jartigag/janitor/master/logo.png)

> Janitor: un conserje 24h para tu red WiFi doméstica o la red de tu oficina.

<p style="text-align: center;"> Para <b>descargar</b> Janitor basta con guardar <a
href="https://raw.githubusercontent.com/jartigag/janitor/master/janitor.py"><b>este script</b></a>.</p>

## /índice:
- [Configurar](#configurar)
- [Funcionalidades](#funcionalidades)
- [Acerca de](#acerca-de)

## Configurar

Entre las opciones que se nos ofrecen al ejecutar `python3 janitor.py`, la primera (después de `-h` para mostrar la ayuda) es `-c` o `--config`, con
la que configuraremos nuestro nuevo bot.  En Telegram los bots se crean a través de [@BotFather](https://telegram.me/botfather), siguiendo las
[instrucciones de la web oficial](https://core.telegram.org/bots#6-botfather). Este bot nos proporcionará el **token** que se nos pide. A
continuación, iniciando una conversación con [@get_id_bot](https://telegram.me/get_it_bot) nos devolverá el **chat_id** que necesitamos para terminar
la configuración.  Estos valores que hemos introducido se guardan en un archivo JSON, en la ruta `~/.config/janitor/janitor.conf`  Demostración (en
un vídeo [asciinema](https://asciinema.org)) de cómo llevar a cabo la configuración en 4 segundos:

<a href="https://asciinema.org/a/165092" target="_blank"><img src="https://asciinema.org/a/165092.png" /></a>

## Funcionalidades

Estos comandos permiten controlar el bot. La gestión de las IPs actúa sobre otro JSON, `ips.json`, en la misma ruta que el
anterior. Gracias a este fichero cada IP guardada se identifica con la **etiqueta** que el usuario elija, para evitar memorizar direcciones IP.

### start

Arranca el programa.  ``` python3 janitor.py --start ``` Combinado con `nohup python3 janitor.py --start &` se envía a segundo plano y en caso de
emplear una conexión ssh se evita que se interrumpa la ejecución al cerrarla.

### /add_ip

Asigna una etiqueta a una IP local.  ``` python3 janitor.py --add_ip 192.168.1.10 juan ```

### /print_ips

Imprime las IPs guardadas con sus respectivas etiquetas.  ``` python3 janitor.py --print_ips ```

### /delete_ip

Elimina una IP, dada su etiqueta.  ``` python3 janitor.py --delete_ip juan ```

### /reminder:

Añade un mensaje de recordatorio a una IP (identificada por su etiqueta), de forma que cuando esta IP *llegue a casa* (es decir, cuando el ping a esa
IP obtenga respuesta) recibirá el recordatorio vía Telegram.  ``` python3 janitor.py --reminder juan lavadora ```

Todas las acciones (menos arrancar) se pueden realizar como comandos de Telegram:

![captura del menú en telegram]({{site.baseurl}}/assets/images/posts/telegram-janitor.png)

## Acerca de

La única manera de aprender a programar es programando, así que busqué una excusa para enfrentarme a un proyecto nuevo, conjugando la sencillez de
Python y la comodidad de usar un bot desde el móvil como interfaz.  En **Python**, además de funciones básicas como tratar con fechas o ficheros
JSON, aprendí sobre ejecución de [procesos](https://docs.python.org/3/library/subprocess.html) desde Python y sobre
[multihilos](https://docs.python.org/3/library/threading.html).  Por otro lado, para manejar la **API de Telegram** elegí el wrapper
[python-telegram-bot](https://python-telegram-bot.org/), con documentación y ejemplos suficientes para poner rápidamente en marcha la comunicación
con Telegram.

### Codename

Pienso que un buen nombre para un proyecto ayuda a afrontar su desarrollo con más ganas. Dándole un contexto dotamos al producto de un atractivo
mayor, y ya con un logo conseguimos que cobre identidad suficiente para poder presentarlo.  [The
Janitor](https://en.wikipedia.org/wiki/Janitor_(Scrubs)) ("El Conserje" en castellano) es un personaje de la serie Scrubs. Lo elegí cuando buscaba un
nombre que sugiriese en qué consiste este programa y que no fuera nada técnico. Un **conserje** de un edificio **saludando constantemente** a quien
pasa por la puerta me pareció una metáfora acertada del mecanismo que aquí se emplea de *detección de hosts en una LAN*. Personificar este rol en un
individuo que conociera fue un paso obvio, y con una búsqueda en [Deviant Art](https://11kaito11.deviantart.com/art/Scrubs-Wallpaper-11-330396239)
encontré una imagen para mi proyecto.

[![](https://img.youtube.com/vi/9_Vd08LoB_4/0.jpg)](https://youtu.be/9_Vd08LoB_4)

### Despliegue

En mi caso, una Raspberry Pi siempre encendida y conectada a nuestro router doméstico era una forma ideal de mantener el script continuamente en
ejecución, independientemente de dónde estuviera yo. A través de **ssh** y con **git** actualizaba el script según lo escribía, comprobaba su
funcionamiento y descubría problemas o posibles mejoras.  La app de Android [RasPi
Check](https://play.google.com/store/apps/details?id=de.eidottermihi.raspicheck) fue todo un hallazgo. Permite conocer el estado de la Raspberry Pi,
enviar comandos (incluso guardar los más frecuentes) y revisar los procesos activos de manera muy simple y desde el móvil. Además en Github está
disponible [su código fuente](https://github.com/eidottermihi/rpicheck), y ante una [duda que
planteé](https://github.com/eidottermihi/rpicheck/issues/171) recibí respuesta enseguida.

### Mejoras futuras

La versión actual de Janitor ha cumplido con el objetivo inicial para el que se concibió, pero durante el desarrollo han ido surgiendo muchas ideas
nuevas (suelo dejarlas apuntadas en el código con un comentario del tipo `//TODO: new idea`). De cara a seguir mejorando la herramienta, podrían
**añadirse características** como comprobar la validez de las IPs, mejorar los recordatorios (actualmente no permiten espacios, y también sería mejor
enviar un mensaje por cada uno), guardar logs y otras **funcionalidades nuevas**: `/stats`, para mostrar estadísticas relacionadas con las IPs
guardadas, `/at_home` y `/outside`, para imprimir las IPs activas y las ausentes, o la posibilidad de añadir el bot a un grupo de Telegram y
controlar el mismo bot desde varios usuarios. Todo dependerá del tiempo del que disponga y de cuántos nuevos proyectos me lo quiten 😉
