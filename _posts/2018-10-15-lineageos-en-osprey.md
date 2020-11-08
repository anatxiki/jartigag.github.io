---
title:  "lineageOS en un moto G de 2015 (osprey)"
layout: post
date:   2018-10-15
howto: true
author: jartigag
image: /assets/images/posts/lineageos.png
tag:
- android
- lineageos
- software libre
- google
- guías
mastodonReplies: https://mastodon.social/web/statuses/100901154081129525
twitterReplies: https://twitter.com/jartigag/status/1051812573807595527
---

Hace ya un par de semanas instalé un nuevo *sistema operativo Android* en mi antiguo móvil, un Moto G de 2015. Se trata de **LineageOS**, la
[ROM](https://en.wikipedia.org/wiki/List_of_custom_Android_distributions) que continúa el legado de la desaparecida
[CyanogenMod](https://arstechnica.com/information-technology/2016/12/cyanogen-inc-shuts-down-cyanogenmod-in-christmas-bloodbath/)

<p align="center">
  <iframe src="https://mastodon.social/@jartigag/100822707782160053/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400">
  </iframe>
  <script src="https://mastodon.social/embed.js" async="async">
  </script>
</p>

## /índice:

- [Motivación](#motivación)
- [Paso a paso](#paso-a-paso)
- [Apps](#apps)

## Motivación

Android me ha gustado desde siempre. Pero claro... Google :worried:  
Hay que aclarar que el proyecto **Android nació fuera de la gran G**, aunque lo adquirieron en 2005 porque tenían que hacer frente a la imparable
expansión de iOS y vieron el gran potencial que tenía ofrecer un buen sistema operativo para smartphones. El proyecto
[AOSP](https://source.android.com/) sigue vivo, pero siempre bajo la atenta supervisión de Google. Es de código abierto, sí, pero más bien del tipo
*mira pero no toques*.

Nunca me ha cabido duda de que Google hará lo que quiera sobre los dispositivos con Android, que *para eso es suyo*. Lo de "[Google tracks your
movements, like it or not](https://www.apnews.com/828aefab64d4411bac257a07c1af0ecb)" fue para mí el caso más claro, aunque la **vigilancia y control
de los smartphones** ha existido [desde
siempre](http://www.spiegel.de/international/world/how-the-nsa-spies-on-smartphones-including-the-blackberry-a-921161.html) y seguirá existiendo (o
al menos lo seguirán intentando :wink:).

¿Pero es posible tener un **Android funcional sin Google Play Services**? Esta app en realidad es mucho más: es un servicio que corre en segundo
plano y que actúa [como interfaz](https://developers.google.com/android/guides/overview) con funcionalidades de Google tan esenciales como Play Store
y sus actualizaciones, las apps propias de Google (Maps, Gmail, YouTube, etc.), la sincronización de cuentas y datos... Para sustituirlo me
recomendaron [microG](https://microg.org/), una reimplementación de Google Play Services libre.

LineageOS permite además tener un **Android puro**, sin [*bloatware*](https://es.wikipedia.org/wiki/Software_preinstalado), y contar **con las
actualizaciones oportunas** (en especial, los parches de seguridad necesarios para protegernos de [vulnerabilidades como
esta](https://hipertextual.com/2015/07/fallo-de-seguridad-en-android-mas-grave-hasta-la-fecha)).

## Paso a paso

Órdenes concretas que ejecuté para instalarlo desde GNU-Linux (se podría hacer desde Windows/Mac igualmente) en mi Moto G (en LineageOS este modelo
se ha renombrado como **[osprey](https://wiki.lineageos.org/devices/osprey/)**). Seguí [esta
guía](https://wiki.lineageos.org/devices/osprey/install).

1-
```
$ sudo apt install adb fastboot
```

2- Habilitar la Depuración USB, Permitir desbloqueo OEM

3-
```
$ adb reboot bootloader
```

4-
```
$ fastboot devices
ZY2227B25M fastboot
```

5-
```
$ fastboot oem device-info
FAILED
```

6- **[Unlock Your Bootloader](https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a)**

7-
```
$ fastboot oem get_unlock_data
...
(bootloader) 3A558409XXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXX0000
```

8- Pegar las últimas líneas en el campo de texto de la [página
anterior](https://motorola-global-portal.custhelp.com/app/standalone%2Fbootloader%2Funlock-your-device-b) para comprobar si se puede desbloquear el
dispositivo. Hacer click en "Request Unlock Key" para recibir por email el "Unlock Code".

9-
```
$ fastboot oem unlock UNLOCK_CODE
```

10- Repetir el paso 2 de nuevo y reiniciar pulsando los botones <kbd>power</kbd>+<kbd>volume_down</kbd>

11- Descargar **TWRP**: [twrp-x.x.x-x-osprey.img](https://dl.twrp.me/osprey/)

12-
```
$ fastboot flash recovery twrp-x.x.x-x-osprey.img
```

13-
```
$ fastboot reboot bootloader
```
Si en la pantalla aparece "Sin comandos", pulsar los botones <kbd>power</kbd>+<kbd>volume_up</kbd>

14- En TWRP, "Limpiar" > "Limpieza avanzada" y elegir las particiones a borrar

15- Encendido normal (con depuración USB activada), y
```
$ adb push lineage-xxxx.zip /
```

16- Encendiendo con <kbd>power</kbd>+<kbd>volume_down</kbd> y luego eligiendo "Recovery Mode", **instalar LineageOS con TWRP**, mediante el .zip que
se ha puesto en `/` (directorio raíz)

## Apps

Apps que venían con LineageOS: Archivos, AudioFX, Calculadora, Calendario, Cámara, Contactos, Correo, Galería, Grabadora, Mensajes, Música,
Navegador, Radio FM, Reloj.

Apps que instalé:

- [Bitcoin Wallet](https://f-droid.org/es/packages/de.schildbach.wallet/): busqué una app simple para comprobar si es fácil pagar en bitcoins desde
  el móvil
- [Conversations](https://f-droid.org/es/packages/eu.siacs.conversations/): cliente XMPP
- [F-Droid](https://f-droid.org/es/): repositorio de apps libres
- [Haven](https://guardianproject.github.io/haven/): app lanzada por
  [Snowden](https://www.wired.com/story/snowden-haven-app-turns-phone-into-home-security-system/) como sistema de seguridad físico
- [KeePassDroid](https://f-droid.org/es/packages/com.android.keepass/) (y
  [OpenKeychain](https://f-droid.org/es/packages/org.sufficientlysecure.keychain/)): gestor de contraseñas
- [Maps](https://f-droid.org/es/packages/com.github.axet.maps/): cliente para [OpenStreetMap](https://www.openstreetmap.org)
- [Mastalab](https://f-droid.org/es/packages/fr.gouv.etalab.mastodon/): cliente de [Mastodon](https://joinmastodon.org/)
- [Nextcloud](https://f-droid.org/es/packages/com.nextcloud.client/): una solución para sincronizar y compartir archivos ([entre otras
  cosas](https://nextcloud.com/))
- [ProtonMail](https://play.google.com/store/apps/details?id=ch.protonmail.android): correo electrónico (descargado a través de Yalp Store)
- [Simple Weather](https://f-droid.org/packages/com.a5corp.weather/): app meteorológica
- [SkyTube](https://f-droid.org/es/packages/free.rm.skytube.oss/): cliente libre para YouTube
- [Telegram](https://f-droid.org/es/packages/org.telegram.messenger/): app de mensajería instantánea
- [Termux](https://f-droid.org/es/packages/com.termux/): terminal para móviles
- [Yalp Store](https://f-droid.org/packages/com.github.yeriomin.yalpstore/): descarga APKs desde Google Play Store

<p align="center">
  <iframe src="https://mastodon.social/@jartigag/100825920576932483/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400">
  </iframe>
  <script src="https://mastodon.social/embed.js" async="async">
  </script>
</p>

Algunos juegos:

- [J2ME Loader](https://f-droid.org/es/packages/ru.playsoftware.j2meloader/): emulador de juegos Java para el móvil, como este de [Texas Hold'em
  Poker](https://java.mob.org/game/texas_holdem_poker.html) al que jugaba en mi Nokia 5800, allá por 2009. Todavía no lo he probado
- [Cow's Revenge](https://f-droid.org/es/packages/org.pipoypipagames.cowsrevenge/): juego de [@darias](https://mastodon.social/@darias) y
  [@yanaronna](https://twitter.com/yanaronna)
- [SuperTuxKart](https://f-droid.org/es/packages/org.supertuxkart.stk/): un Mario Kart con personajes del mundo GNU/Linux
