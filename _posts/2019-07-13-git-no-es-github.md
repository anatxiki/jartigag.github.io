---
title:  "git no es github"
layout: post
date:   2019-07-13
category: blog
author: jartigag
image: /assets/images/posts/git.png
tag:
- git
- herramientas
- reflexiones
mastodonReplies: https://mastodon.social/@jartigag/102435028504431424
twitterReplies: https://twitter.com/jartigag/status/1150076581605531648
---

Hoy solo venía a dejar por aquí algunas reflexiones, nombres e hitos sobre [Git](https://git-scm.com/book/en/v2), el famoso software de control de versiones, y un par de las muchas cosas que le rodean.

<p align="center">
<img src="assets/images/posts/git.png">
</p>

## /índice:

- [Forjas de software](#forjas-de-software)
	- [Github](#github)
    - [Gitlab](#gitlab)
- [Git](#git)
	- [git send-email](#git-send-email)

## Forjas de software

Una "forja" es una plataforma de desarrollo colaborativo de software. El término genérico seguramente te suene menos que sus ejemplos concretos: SourceForge, Google Code, Gitorious, Bitbucket... No sé, quizás haya alguno más conocido 😉

Git fue creado originalmente como alternativa a [BitKeeper](https://en.wikipedia.org/wiki/BitKeeper), un sistema de control de versiones distribuido y originalmente propietario. Ofrecía a los proyectos de código abierto una licencia gratuita y un hosting centralizado. Un hosting centralizado sobre un [VCS](https://en.wikipedia.org/wiki/Version_control_system) distribuido... ¿No te suena eso a algo... algo más de ahora?

### Github

Exacto. Hoy por hoy, Github es el rey de reyes indiscutible de las forjas de software. Como antes lo fuera Google Code, y antes SourceForge... Y ya veremos quién es el siguiente.

Es un hecho que cuando alguien te busca en Internet, si le interesan tus habilidades de programación va a ojear tu Github. La verdad es que es una buena carta de presentación: ["¿Qué has hecho en tu vida](https://www.elladodelmal.com/2015/08/ponte-trabajar-desde-ya-si-no-tienes.html) [que yo pueda ver?"](https://www.elladodelmal.com/2014/05/suspende-como-un-ingeniero-o-atente-las.html). Pero por supuesto hay que ser consciente, como en todos los casos, de que este servicio gratuito (muy útil, sin duda) nos lo ofrece una **empresa**. Y las empresas pueden tener más objetivos, pero se hacen para ganar dinero. Siem-pre.

Gran parte de los ingresos de Github venían de su servicio Premium "Enterprise" (unos $100M)<sup>[1](#github-is-doing-much-better-than-bloomberg-thinks)</sup>. Con la **compra de Microsoft** por $7500M, digo yo que el gigante tecnológico querrá sacar toda la tajada posible, más allá de mostrarse como una empresa más (ejem-ejem) *open-source*. No creo que repitan aquello de secuestrar con instaladores de adware/spyware los proyectos que alojan (como sí hizo SourceForge en sus últimos coletazos), pero toda esa información detalladísima sobre quienes construyen el software de hoy en día... *Data mining* al poder.

Aparte, está el tema clave de **quién controla los medios**.

Legalmente, Github puede eliminar proyectos o usuarios por la razón que sea, incluso sin razón alguna. Usan sus servidores, están en su derecho de hacerlo. Y aunque ellos no prohíben explícitamente el desarrollo de proyectos que puedan hacerles la competencia (como sí hacía BitKeeper), siempre pueden ver el código privado de todas las compañías que alojen su código en Github. Relaciono aquí un tema candente: [la investigadora de seguridad](https://github.com/SandboxEscaper) [que ha publicado numerosos zero-days de Microsoft](https://sandboxescaper.blogspot.com/p/disclosures_8.html) bajo una política *full disclosure* bastante peligrosa. Es un caso inestable y delicado, pero si el asunto se desmadra, la medida de cerrar su Github (como ya cerró Twitter su cuenta [@Evil_Polar_Bear](https://twitter.com/Evil_Polar_Bear)) siempre está en sus manos.

### Gitlab

Gitlab ahora mismo es la alternativa a Github más conocida. Lanzada en 2011 (dos años después), pretende mejorar lo que da su competidor con [unas cuantas funcionalidades más](https://about.gitlab.com/devops-tools/github-vs-gitlab.html). Para mí, las diferencias clave son:
- Gitlab se puede instalar en un [servidor propio](https://about.gitlab.com/install/).  
- Gitlab está más orientado a [CI](https://en.wikipedia.org/wiki/Continuous_integration)/[CD](https://en.wikipedia.org/wiki/Continuous_delivery), al ofrecer una solución integrada para ello.

## Git

La primera decisión de diseño que tomó Linus sobre Git fue hacerlo distribuido. *Best decision ever*:

> "Miré un montón de alternativas. La mayoría las pude descartar sin ni siquiera probarlas. Si no es distribuido, no merece la pena. Así de fácil. Si no tiene buen rendimiento, no merece la pena. Así de fácil. Y si no garantiza que lo que ponga en el VCS saldrá exactamente igual, no merece la pena. Francamente, eso se carga la mayoría de lo que te puedes encontrar."<sup>[2](#linus-on-git)</sup>

Un sistema de control de versiones distribuido es directamente más **fiable**. No necesitas *back-ups*: ya hay copias por todos lados. ¿Que pierdes tus datos? `git clone` del repositorio que aloja cualquier otro compañero y a funcionar. 

En un sistema de control de versiones centralizado, el acceso que tenga o no tenga cada miembro a poder hacer commit sobre ese servidor central es un problema, especialmente en **projectos de código abierto**. ¿Quién lo merece? ¿Quién lo decide? ¿A partir de cuándo se te permite? Mucha política por ahí.

Sin embargo, cuando el sistema es distribuido, todo lo que provoca el **"commit access"** desaparece. Todo el mundo tiene su rama y hace lo que quiera en ella. Si luego resulta que es un buen trabajo, se lo comunica al resto y ellos harán `git pull` de su rama.

### git send-email

> "La tarea fundamental de la que estamos hablando es la comunicación asíncrona y grupal de cambios en el código. Los *patches* son una manera universalmente conocida para describir cambios de código, y el email es un método universalmente conocido para comunicarse. Así que parece que este enfoque coincide con el problema en cuestión." <sup>[3](#mailing-lists-vs-github)</sup>

Para ser sincero, no he tenido la oportunidad de usar `git send-email` todavía. De hecho, todavía no uso el correo electrónico muy intensivamente. Creo que puede ser porque recibir/escribir cada vez más correos es algo que va llegando según avanzas en tu carrera profesional, igual también depende de la organización y puesto en el que estés, quizás incluso tenga algo que ver el factor generacional... Pero me gustaría escribir algún día un parche para algún proyecto que pueda enviar sencillamente en un email. Si alguien tiene algo que proponerme al respecto, toda sugerencia es bienvenida 😊

Es cierto que le veo algunas pegas:  
- Pienso que tenemos cada vez menos familiaridad con el correo electrónico y sus clientes (más allá de Gmail...), así como con conceptos que derivan de este, como listas de correo, netiqueta, top-posting, etc.  
- Los proyectos nuevos necesitan reconocimiento social para crecer. Y para eso, las estrellitas, los feeds y las pestañas de "Explora"... Pues van muy bien. Hay que decir que para aprovechar esta cualidad de las forjas de software, se pueden hacer *mirrors* en estas plataformas e informar en el README de cómo colaborar fuera de ellas.   
- Hay gente que le da bastante valor a la [CI](https://es.wikipedia.org/wiki/Integraci%C3%B3n_continua). Yo no controlo de esto, ¿alguien sabría decir más?  

Deseando leer vuestras opiniones sobre todo esto:)

---

<a name="github-is-doing-much-better-than-bloomberg-thinks">1</a>: ["GitHub is Doing Much Better Than Bloomberg Thinks" (Moritz Plassnig, 2016)](https://medium.com/@moritzplassnig/github-is-doing-much-better-than-bloomberg-thinks-here-is-why-a4580b249044)  
<a name="linus-on-git">2</a>: ["Tech Talk: Linus Torvalds on git" (en las Oficinas de Google, 2007)](https://youtu.be/4XpnKHJAok8?t=625)  
<a name="mailing-list-vs-github">3</a>: ["Mailing lists vs Github" (Joe "begriffs" Nelson, 2018)](https://begriffs.com/posts/2018-06-05-mailing-list-vs-github.html)  
