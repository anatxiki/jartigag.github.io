---
title:  "SOs cifrados: debian 9 y windows 10"
layout: post
date:   2018-01-24
howto: true
category: blog
author: jartigag
tag:
- linux
- debian
- windows
- guías
---

## /índice:

- [Debian 9](#debian-9)
- [Windows 10](#windows-10)
- [Dual Boot](#dual-boot)

A veces uso distros Live USB para tareas puntuales, por eso mantengo la opción de arrancar el equipo desde un medio USB (¡con contraseña en la BIOS para proteger estos ajustes!). No obstante, mantener las unidades sin cifrar hace ridículamente fácil [acceder a los archivos del disco sin necesidad de contraseñas](https://youtu.be/eMO6Borz72w?t=5m20s). Cualquiera con acceso físico al ordenador puede usar un **sistema operativo desde un pendrive** para explorar el contenido del disco duro. Por eso, he aprovechado que instalaba un nuevo SO (la última versión de Debian) y reinstalaba Windows para **cifrar todo mi disco duro**.

![USB Boot]({{site.baseurl}}/assets/images/posts/usb-boot.jpg)

## Debian 9

He usado esta [**imagen de Debian 9 Stretch**](https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/9.3.0-live+nonfree/amd64/iso-hybrid/), en concreto `debian-live-9.3.0-amd64-kde+nonfree.iso`, que incluye _Debian 9 Live con KDE_ y el _firmware no libre_ para evitar problemas a la hora de detectar el hardware (por ejemplo, la tarjeta de red, que en mi caso necesitaba el fichero `iwlwifi-7265-17.ucode`). Me apoyé en [esta guía de PortalLinux](https://portallinux.es/instalar-debian-8-con-particiones-cifradas-con-luks/) durante el proceso de instalación.

- En el momento del **particionado** de discos, elegí el **método manual**. Hice una partición de **500 MB sin cifrar** con punto de montaje en **`/boot`**, y los **65 GB** del espacio libre restante para el volumen cifrado.
- En **Configurar los volúmenes cifrados**, elegí el dispositivo `/dev/sda6` en mi caso y una contraseña de cifrado.
- A continuación, **Crear un grupo de volúmenes** (de nombre `debian`), al que añadí el dispositivo `/dev/mapper/sda6_crypt`. Y para terminar, con **Crear un volumen lógico** (identificado como `volumenlog`) tuve la partición de LVM `VG debian, LV volumenlog` para asignarla a la raíz `/`. No reservé espacio para la memoria `swap`, porque nunca uso los 8GB de mi RAM.
- Los últimos pasos fueron configurar la réplica de red `deb.debian.org` e instalar GRUB. No tuve que elegir los programas a instalar porque esta imagen viene con KDE (aunque después [desinstalé el software que no utilizo](https://gist.github.com/jartigag/098ce8a01dd3f5e81a9d692ee92b8ca5))

![Particionado]({{site.baseurl}}/assets/images/posts/particionado.png)



## Windows 10

Para encriptar el sistema Windows 10 es necesario disponer de la versión **Windows 10 Pro**. Trae la herramienta **Bitlocker**, que requiere un TPM (Trusted Platform Module) para guardar la clave con la que descifrar el disco. Como mi ordenador no lo tiene, edité la **directiva de grupo** en `Directiva Equipo local > Plantillas administrativas > Componentes de Windows > Cifrado de unidad Bitlocker > Unidades del sistema operativo`. Allí marqué la casilla **Permitir Bitlocker sin un TPM compatible**, dentro de la configuración Requerir autenticación adicional al iniciar.  
Así pude empezar el proceso de cifrado con Bitlocker. Se requerirá una **clave de inicio** cada vez que arranque. Guardé la **clave de recuperación** en un archivo, dentro de una unidad externa, y reinicié.

![Bitlocker]({{site.baseurl}}/assets/images/posts/bitlocker.png)

## Dual Boot

Primero instalé Windows 10 Pro en **55 GB** (incluyendo aquí las particiones que se crean automáticamente), dejando espacio suficiente en el disco duro para instalar Debian 9 luego. De esta forma, Debian se encargará de instalar **Grub** automáticamente, que **gestionará el arranque del sistema dual**.  
Para configurar Grub sólo hay que editar el archivo `/etc/default/grub`. 
