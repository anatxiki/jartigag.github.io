---
title:  "monitorizando sistemas: 1. carga"
layout: post
date:   2020-04-14
author: jartigag
image: /assets/images/posts/sar.png
tag:
- monitorización
- herramientas
- unix
- linux
- email
- sysadmin
mastodonReplies: https://mastodon.social/@jartigag/104002381896777739
twitterReplies: https://twitter.com/jartigag/status/1250389045458370562
---

Hace tiempo que pensaba escribir sobre lo que estoy aprendiendo de medir/monitorizar un sistema. Mi idea era relacionarlo con un montón de cosas,
pero según profundizo en el tema no hago más que descubrir lo inmenso y complejo que es... Así que vamos a empezar por algún lado.

<p align="center">
<img src="{{site.baseurl}}/assets/images/posts/sar.png">
</p>

## /índice:

- [Observabilidad: herramientas y métodos](#observabilidad-herramientas-y-métodos)
- [Mi elección: sysstat](#mi-elección-sysstat)

### Observabilidad: herramientas y métodos

Existen multitud de herramientas para vigilar la actividad de un sistema. Al final todas leen de `/proc` o de `/sys`<a href="#fn1" id="fnref1"><sup>1</sup></a>
y nos mostrarán prácticamente las mismas métricas, pero cada una prometerá algo extra. Una novedad, algo más chulo, la *killer feature* por la que decidirse.
A veces la razón es simplemente que pertenece al *stack* que ya utilizábamos. O que es la moda, y ya está.

Por un lado, tenemos varios agentes modernos que compiten en el mercado open-source, a destacar: **Telegraf** como parte del stack de Influx y **Metricbeat** dentro del Elastic Stack.
Soluciones relativamente sencillas y guiadas. Enchufas y funciona. Y puedes representar fácilmente lo que te dan con Grafana (o Kibana). Personalmente, los veo un poco *excesivos*
para mis casos domésticos. Requieren (mínimo) instalar y dejar corriendo un agente, una base de datos y una herramienta de visualización aparte, todo bastante pesado.
Otra opción bastante usada últimamente (que ya se me va de madre del todo) es **Prometheus**... Pero pienso que todo esto es algo que se debería poder hacer con menos.

Volviendo la vista a Unix, encontré los programas que durante décadas han cumplido con esta tarea y siguen en ello.
[sar (system activity report)](https://en.wikipedia.org/wiki/Sar_(Unix)), junto con el resto de comandos del paquete **sysstat**, te ofrece información muy completa
sobre la carga del sistema: uso de CPU, RAM, procesos, escrituras/lecturas de disco, sockets, interfaces de red, etc. Lo que necesitas para determinar la salud de tu sistema.

![]({{site.baseurl}}/assets/images/posts/sysstat-tools-sadc-sar.png)

Se use lo que se use, lo importante es ser capaz de encontrar el problema cuando se presente. Hay que manejar algunas herramientas de forma eficaz para eso, pero sobre todo
hay que hacerse las preguntas adecuadas. Lograrlo requiere seguir ciertas guías, con un punto de inicio, un proceso y un punto final. Por eso es útil conocer
[metodologías](https://youtu.be/FJW8nGV4jxY?t=874) que nos ayuden en el diagnóstico. Por ejemplo, lo que recomienda el [USE Method](http://www.brendangregg.com/usemethod.html) es:
"[para cada recurso, comprobar: Uso, Saturación y Errores](http://www.brendangregg.com/USEmethod/use-linux.html)".

Además de las herramientas que se mencionan en links anteriores, cuando estamos en medio de una incidencia en producción no viene nada mal dominar el típico `htop` y, por supuesto,
conocer los logs de las aplicaciones que están corriendo y que sean de las *sospechosas habituales*.

Entrando en materia, voy a comentar cómo he abordado yo la monitorización de un caso particular, en el que la idea era mantener una observación global sobre varios servidores que no se vigilan activamente.

### Mi elección: sysstat

El paquete [sysstat](http://sebastien.godard.pagesperso-orange.fr/documentation.html) (`sudo apt install sysstat` en cualquier debian-based) es una colección de utilidades
para monitorizar el rendimiento y la actividad de un sistema.

El modo interactivo permite ver varias métricas en tiempo real sobre, entre otras cosas:
- uso de CPU,
```
sar 1 3 # imprimiendo 3 muestras en intervalos de 1 segundo
```
- uso de RAM,
```
sar -r 1 3 --human
```
- uso de disco por bloques (operaciones i/o) o por dispositivo,
```
sar -b 1 3; sar -d 1 3
```
- uso de interfaces de red
```
sar -n DEV 1 3
```

También podemos recoger datos del sistema activando `ENABLED="true"` en `/etc/default/sysstat` (esto hace los cambios pertinentes en `cron.d`).
Sus parámetros se configuran en `/etc/sysstat/sysstat`. Como siempre, mejor consultar el manual y las [FAQs](http://sebastien.godard.pagesperso-orange.fr/faq.html) que se ha currado el autor.

Los logs de sysstat se guardan en formato binario, así ocupan menos. Se leen con:
```
sar -f /var/log/sysstat/sa20200414 # extraído de los binarios, las flags van igual que antes
cat /var/log/sysstat/sar20200414   # reporte completo diario, en texto plano
```

Para entender un histórico de datos amplio tenemos que representarlos gráficamente. `sadf`<a href="#fn2" id="fnref2"><sup>2</sup></a>` -d` ofrece los datos en CSV, con lo que ya te los puedes llevar
a donde quieras. Incluso puedes dibujarlo directamente en SVG con `sadf -g the_datafile > output.svg`. Pero si quieres controlar más el resultado,
hay muchas herramientas por ahí para facilitarte la tarea. Yo probé primero el script [sysstat_mail_report.py](https://github.com/desbma/sysstat_mail_report),
que usa `gnuplot` y `sendmail` para enviar un informe periódico a tu correo. Al final, me convenció más [sarviewer](https://github.com/juliojsb/sarviewer). Me pareció
más fácil de entender y de configurar, con `matplotlib` y `mutt`. En cualquier caso, lo bueno de ambos es que los puedes [adaptar a tu gusto](https://github.com/jartigag/sarviewer).

<p align="center">
<img src="{{site.baseurl}}/assets/images/posts/sysstat-sockets-homer.png">
<img src="{{site.baseurl}}/assets/images/posts/sysstat-mem-ralph.png">
</p>

La parte más jugosa de todo esto es enviar estas gráficas por email, de forma que las tengas a mano para revisarlas en cualquier rato.
Configurar [`mutt`](https://unix.stackexchange.com/a/252288) o [`sendmail`](https://www.fosstechnix.com/configure-sendmail-to-relay-emails-using-gmail-smtp/)
puede tener un poco de miga, pero nada fuera de tu alcance si tienes interés.

La otra utilidad clave del paquete es `pidstat`, pero esa la dejo ya para investigación de cada uno 😉

¿A qué más cosas le prestaríamos atención? Quizá los logs de apache, los errores de aplicación, el tráfico de red... Muchos temas para otro día.

---
<a id="fn1">1</a>: Porque en todo el post estamos entendiendo "sistema" como "sistema Linux", claro. Que merezca la pena. Un servidor, un portátil, una RaspberryPi... Pero GNU/Linux, porque si no pa qué <a href="#fnref1">↩︎</a>
<br>
<a id="fn2">2</a>: **s**ystem **a**ctivity **d**ata **f**ormat. `sadc`, el otro comando que quedaba por mencionar, viene de **s**ystem **a**ctivity **d**ata **c**ollector<a href="#fnref2">↩︎</a>
