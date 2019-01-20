---
title:  "flutter: mi setup"
layout: post
date:   2019-01-20
category: blog
author: jartigag
tag:
- flutter
- android
---

![]({{site.baseurl}}/assets/images/posts/flutter-holamundo.png)

## /índice:

- [¿Flutter?](#flutter)
- [Instalación minimalista](#instalación-minimalista)
- [Instalación fácil](#instalación-fácil)
- [Hola Mundo](#hola-mundo)


## ¿Flutter?

[Flutter](https://flutter.io/) es un entorno de desarrollo de aplicaciones nativas para Android y iOS partiendo de un único código, en el lenguaje [Dart](https://www.dartlang.org/) (se parece a Java, pero más sencillo).

Alcanzó su versión 1.0.0 hace apenas dos meses, pero se nota que es un gigante como Google quien está poniendo los recursos para que este proyecto (en todo su conjunto: SDK, documentación, comunidad...) [evolucione de forma espectacular](https://github.com/flutter/flutter).

Yo lo descubrí por un compañero de clase, que nos habló maravillas de su agilidad, su sintaxis tanto para diseñar la UI como para la lógica de negocio, sus ricos recursos... De primeras tuve mis reservas, pero finalmente lo adoptamos para hacer [TheyLendMe](https://github.com/TheyLendMe/app-theylendme) y tengo que reconocer que funcionó de maravilla 👌👏👏

<div style="text-align: center">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/fq4N0hgOWzU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Instalación minimalista

#### Instalar Android

1- Descargar las [herramientas de línea de comandos de Android](https://developer.android.com/studio/#downloads) (del apartado "Solo herramientas de línea de comandos") y descomprimir con:
```
$ unzip sdk-tools-linux-4333796.zip
```

2- Se habrá creado un directorio `tools` (unos 170 MB) en nuestro home, que moveremos al siguiente directorio:
```
$ sudo mv tools/ /usr/lib/android-sdk/
```
*************

Podremos incluirlo en la variable de entorno $PATH añadiendo al final de nuestro `.bashrc` la siguiente línea:
```
## android ##
export ANDROID_HOME="/usr/lib/android-sdk/"
export PATH="${PATH}:${ANDROID_HOME}tools/bin:${ANDROID_HOME}tools/bin"
```
"Refrescar" estos cambios con `$ source .bashrc`

3- Ahora podremos usar [`sdkmanager`](https://developer.android.com/studio/command-line/sdkmanager) para instalar paquetes del SDK de Android. Puedes ver los disponibles con:
```
$ sdkmanager --list
```

4- Instalar las herramientas del SDK de Android (¡y aceptar las licencias!). Para trabajar con Flutter, yo he usado Android 8.1 = nivel de API 27 (suman como 300MB más):
```
yes | sudo /usr/lib/android-sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;28.0.3"
```

#### Instalar Flutter

0- Comprobar que tenemos instalado `git`. Si no,
```
$ sudo apt install git
```

1- Después de descargar [flutter_linux_v1.0.0-stable.tar.xz](https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_v1.0.0-stable.tar.xz) en el directorio deseado,
```
$ tar xf flutter_linux_v1.0.0-stable.tar.xz
```
Este directorio `flutter/` ocupará unos 600 MB.

2- Incluir la ruta al SDK de Flutter en la variable $PATH, añadiendo al final de nuestro `.bashrc` la siguiente línea:
```
## flutter ##
export PATH=$PATH:/home/javi/flutter/bin # CAMBIAR /home/javi
#POR EL DIRECTORIO EN EL QUE ESTÁ INSTALADO EL SDK DE FLUTTER
```
"Refrescar" estos cambios con `source .bashrc`

Para detectar problemas:
```
$ flutter doctor
```

![]({{site.baseurl}}/assets/images/posts/flutter-doctor.png)

#### Instalar emulador de Android


1- Instalar la API de Android correspondiente (esta es la de Android 8.0 Oreo):
```
$ sdkmanager --install "system-images;android-26;default;x86_64;emulator"
```

2- Crear el *Android Virtual Device* con [`avdmanager`](https://developer.android.com/studio/command-line/avdmanager):
```
$ avdmanager create avd --name "android8" -k "system-images;android-26;default;x86_64"
```
Otra forma es mediante Flutter, que te emula un dispositivo Pixel:
```
$ flutter emulator --create --name android8
$ flutter emulator --launch android8
```	

¡Listo! Tenemos un entorno completo de desarrollo para Android con Flutter y un emulador, **¡ocupando menos de 4 GB!**

## Instalación fácil

La herramienta *recomendada* para desarrollar en Flutter es usar [**Visual Studio Code**](https://code.visualstudio.com/) de Microsoft. Está pensada para [instalar y configurar](https://flutter.io/docs/development/tools/vs-code) todo lo necesario a golpe de click, aunque la experiencia (mía y ajena) me dice que al final hay que acabar entrando a la terminal de todas formas.

Si quieres "*aún menos problemas*" (ya sabemos que tenerlos los vamos a tener igual 😄, pero en principio este es el camino estándar) y en tu disco duro te queda espacio de sobra, ["**Android Studio** ofrece una completa e integrada experiencia de IDE para Flutter"](https://flutter.io/docs/get-started/editor).

## Hola Mundo

Empieza de cero, con solo:
```
$ flutter create holamundo
```

Ahora tienes un proyecto demo desde el que construirás tu app a base de buscar [vídeos en YouTube](https://youtu.be/iflV0D0d1zQ), [ejemplos en Github](https://github.com/flutter/samples/blob/master/INDEX.md) y por supuesto la fantástica [documentación oficial](https://flutter.io/docs).

El código está en `holamundo/lib/main.dart`. Puedes correr la app, o bien conectando tu dispositivo en [modo depuración por USB](https://developer.android.com/studio/debug/dev-options) o bien en el emulador (como hemos visto antes[↩](#instalar-emulador-de-android)), ejecutando:
```
$ cd holamundo; flutter run
```
