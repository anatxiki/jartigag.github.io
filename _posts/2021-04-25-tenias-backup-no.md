---
title:  "tenías backup, no?"
layout: post
date:   2021-04-25
author: jartigag
image: /assets/images/posts/floppy_disk_meme.jpg
tag:
- sysadmin
- herramientas
- git
mastodonReplies: https://mastodon.social/@jartigag/106133612058001686
twitterReplies: https://twitter.com/jartigag/status/1386735108376379398
---

Este post llevaba en el cajón un tiempo, ya casi lo había tirado a la papelera.
Pero, coincidencias de la vida, acabo de ver [este capítulo de Halt And Catch Fire](https://youtu.be/g4I4r9mkkNA) y me ha empujado a terminarlo.
Porque todos sabemos que hay que hacer copias de seguridad, todos estamos de acuerdo en que son importantes,
pero ni de lejos le dedicamos la atención que merecen.

<p align="center">
<img src="{{site.baseurl}}/assets/images/posts/floppy_disk_meme.jpg">
</p>

## /índice:

<!-- vim-markdown-toc GFM -->

* [La nube está en la tierra](#la-nube-está-en-la-tierra)
* [Cuestiones sobre los backups](#cuestiones-sobre-los-backups)
* [Mis backups domésticos](#mis-backups-domésticos)
    * [Archivos personales](#archivos-personales)
    * [Archivos de trabajo](#archivos-de-trabajo)

<!-- vim-markdown-toc -->

### La nube está en la tierra

Y, más coincidencias de la vida, justo hoy va y sale la Bonilista "[Fuego en la nube](https://mailchi.mp/bonillaware/la-bonilista-de-txetxu)",
firmada por [@tetxuvel](https://twitter.com/txetxuvel). Como no podía ser de otra manera, en la Bonilista está mejor contado de lo que
yo podría contar ahora, porque en la Bonilista escribe gente que sabe.. Pero me gusta más cómo me ha quedado a mí el título de esta sección 😜

Todavía nos acordamos (y espero que lo sigamos recordando mucho tiempo) de lo que titularon como "[el incidente de Estrasburgo](https://twitter.com/xgarreau/status/1369559995491172354)",
en el que se incendió un datacenter de OVH con 30.000 servidores. Sinceramente, para la movida que es algo así, creo que
[gestionaron el problema muy bien](https://www.ovh.ie/news/press/cpl1786.strasbourg-datacentre-latest-information) y la empresa se portó.
En mi caso, consiguieron recuperar lo que tenía en un VPS (que no era mucho, y como *tenía copia en local* no perdía nada) y me ofrecieron
3 meses gratis. Pero había [millones de sitios web](https://www.reuters.com/article/us-france-ovh-fire-idUSKBN2B20NU) que sí que tenían algo que perder.
Pequeñas tiendas online, grandes empresas, administraciones públicas y proyectos personales mucho más importantes que los míos, que afectaban
a muchísima gente. Webs que **habían perdido sus datos
para [siem](https://www.datacenterdynamics.com/en/news/ovh-fire-destroys-rust-game-data-takes-other-sites-offline/)-[pre](https://twitter.com/amhashish/status/1369553833395957760)**.
El fundador de OVH recomendaba a sus clientes que [activaran su DRP](https://twitter.com/olesovhcom/status/1369478732247932929).
¡Pero si estaban en la nube! Cómo se va a perder algo en la nube, ¿verdad?

Tomando prestada una frase de esta Bonilista,
> "el sector tecnológico hemos convencido al resto de que todo está en la nube y que eso de por sí es seguro".

No solo las catástrofes físicas amenazan los datos en los que sustentamos nuestros negocios y otros tantos aspectos de nuestras vidas.
Cuando pensamos en los peligros que acechan a la información digital, rápidamente nos vienen a la cabeza los **ciberataques**.
Merece especial mención el ransomware, que cada vez oímos más y más en las noticias. Es lo típico que creemos que nunca nos va a tocar.
Somos humanos, con nuestra particular percepción del peligro. Solo nos asustamos cuando cae cerca, aunque aparecen otras preocupaciones
y enseguida se nos pasa. Y mira que cae cerca y que cae veces, ¿eh? Así que me salgan pronto, de los más sonados: el Wannacry en Telefónica,
Iberdrola y compañía, el de la SER y Everis, el Área Metropolitana de Barcelona.. Y por supuesto el último del
[SEPE](https://www.economiadigital.es/economia/el-hackeo-al-sepe-retrasa-el-cobro-de-prestaciones-de-mas-de-100-000-parados.html).
Igual hasta conoces algún caso de pequeñas empresas, que tampoco se libran.

### Cuestiones sobre los backups

Ante estos problemas, un backup bien llevado.. pues no es que lo resuelva absolutamente todo, pero casi.

Para empezar a diseñar una política de respaldos, un buen punto de partida es la famosa **regla 3-2-1**.
Consiste en tener, para aquella información que queremos preservar, al menos 3 copias de seguridad,
almacenadas en al menos 2 medios diferentes (pendrive, VPS, NAS, raspberry..) y *al menos 1 de ellas
en un lugar físico distinto de los datos originales*. ¿Qué sentido tiene la regla? Poner los huevos en varias cestas parece de cajón que es
beneficioso, ¿no? Aumentamos la complejidad (solo lo imprescindible), pero ganamos seguridad drásticamente. Con números se ve aún mejor.
Digamos que la probabilidad de que falle tu disco duro es de 1 vez cada 100.000 horas. Con copias en dos discos diferentes,
la cosa cambia mucho: ahora la probabilidad de que tus datos se vean afectados es de 1 entre 10.000 MILLONES.

Otro aspecto es el del cifrado. Tiene su pequeño coste porque consume más recursos, pero creo que merece la pena.
A ver si, después de poner contraseñas y medidas por todos lados, vamos a desproteger lo que intentamos salvar precisamente en la copia de seguridad.

Sí que me parece importante comprobar que sabemos descifrar esos datos y recuperar su funcionalidad por completo.
Esto nos lleva a otra práctica clave: hay que probar a **restaurar habitualmente**, sin miedo a una instalación limpia.

Aun con todo, el mantenimiento de un sistema de backups nunca se aprecia lo suficiente.
Como, a poco que se tome en serio, el tema de los backups a nivel organizacional se escapa de lo que soy capaz de explicar,
aquí solo voy a contar cómo me lo monto yo para llevar mis copias de seguridad domésticas.

### Mis backups domésticos

El abanico de herramientas con las que se pueden hacer backups es inmenso. Si quieres conocer qué ganas
con cada opción y cómo funciona cada planteamiento, adelante con tu investigación, aunque es más probable
que no quieras revisar todo internet para encontrar cuál es más adecuado para ti. Igual
[una empresa sí debería estudiar más detenidamente](https://www.incibe.es/sites/default/files/contenidos/politicas/documentos/copias-seguridad.pdf)
qué solución del mercado se adapta mejor a su caso, pero, para tus datos personales, lo que yo
recomendaría es que elijas **un sistema que domines**. Algo simple, fácil de mirar bien mirado.
Para backups offline, yo uso [DejaDup](https://wiki.gnome.org/Apps/DejaDup), que va sobre [duplicity](http://duplicity.nongnu.org/) y se instala
con un `sudo apt install deja-dup`. Para cada tipo de archivos hago ciertos ajustes:

#### Archivos personales

DejaDup utiliza *rsync* para generar volúmenes de backups incrementales y cifrados.
Eliges las carpetas que quieres guardar, cuáles quieres ignorar dentro de estas, la planificación y la ubicación de la copia
(en un disco separado del que estás copiando, por favor). Para estos archivos tengo programada una copia cada 7 días y retención de datos al menos seis meses.
Cuando toca, te avisa con una notificación que dice algo como "Copia de seguridad retrasada hasta que conectes la unidad",
lo que me recuerda que solo necesito enchufar el pendrive y meter la contraseña de cifrado.
Del resto se encarga el programa, incluido comprobar la integridad de los datos guardados y probar la restauración cada
cierto tiempo (aunque todos los años acabo haciendo una instalación limpia del sistema operativo de mi portátil, así que
ahí pruebo que la copia de seguridad realmente cumple su función).

#### Archivos de trabajo

Para los archivos de trabajo, que graban lo que hago la mayor parte de mi tiempo, considero que debería respaldarlos
todo lo razonablemente posible, porque no me gustaría perder el resultado de horas y horas de esfuerzo.
Tengo un directorio que guarda algunas configuraciones, listas, registros y "works-in-progress" que podría decir que son críticos,
ya que seguramente no sabría recrearlos si perdiera las copias. Estos ficheros se respaldan automáticamente cuando ya no estoy trabajando,
con este script en crontab:

```
$ cat b/bak.sh
#!/bin/bash

# crontab example:
#  m h dom mon dow command
# 45  0-8  * * *   ~/b/bak.sh
# 45 17-23 * * *   ~/b/bak.sh

cd ~/g
grep -oh "url = .*" */.git/config | cut -d " " -f3 > ~/b/repos.txt
for d in */; do
    cd $d
    git add .
    git diff --patch --staged > ~/b/uncommitted-patches/$(basename $d)-backup.patch.diff
    # restore in repo x: patch -p1 < ~/b/uncommitted-patches/x-backup.patch.diff
    git reset HEAD
    cd ..
done
find ~/b/uncommitted-patches/ -size  0 -print -delete

cd ~/b
git add .; git commit -m "$( date +%F )"; git push
```

Principalmente trabajo con repositorios de git, por lo que a partir de una lista de URLs recuperaría las fuentes con las que estaba trabajando
con algo como

`while read line; do git clone "$line"; done < repos.txt`

Entre estos repos, es útil un [dotfiles](https://github.com/jartigag/dotfiles) que defina alias, atajos y cosillas así con las que te mueves más cómodo.

También es crucial no perder mis direcciones, claves y contraseñas, claro.
Como esto es lo más sensible, no quiero subirlo a ningún sitio externo.
Solo lo guardo en memorias extraíbles, protegido con contraseña y en un formato que pueda manejar desde el ordenador que sea.
Scriptear este copiado es tan fácil como esto:

```
$ cat b/key.sh
#!/bin/bash
#
#usage: ./key.sh # and wait to write your password
#   or   ./key.sh mypassword
#       ^put a whitespace here to avoid writing your password on .bash_history

dst="/media/javi/jag32GB/key.7z"
src=(".gnupg/" ".password-store/" ".ssh/" ".proxys")

cp $dst $dst.bak
mkdir -p /tmp/key/

for d in ${src[@]}
do
    cp -r $HOME/$d /tmp/key/${d//.}
    #              trim dots ^^^^^
done

cd /tmp/
rm $dst
7z a -mhe $dst key/* -p"$1"
rm -r key/
```

PD: Ya sobre la bocina cuando estaba cerrando el post, he descubierto [www.taobackup.com](http://www.taobackup.com/)... Maravilla.
