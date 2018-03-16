---
title:  "cubiertos para twitter"
layout: post
date:   2018-03-16
projects: true
category: blog, project
author: jartigag
tag:
- proyectos
- python
- twitter
---

He diseñado mi propia [*cubertería*](https://github.com/jartigag/cubiertos-para-twitter). Es un kit de 3 herramientas para **hacer que Twitter sea más fácil de _digerir_**.

La **analogía** con unos utensilios conocidos como son los **cubiertos** pretende sugerir de manera intuitiva para qué sirve cada una de estas herramientas y cuál es su finalidad general: ayudar al usuario, ya sea ofreciéndole **información** relevante o **automatizando algunas rutinas**.  
Pero, tal y como ocurre con los cubiertos, deben **emplearse de forma auxiliar**. Es decir, estos scripts no realizan ninguna acción en nombre del usuario (ni publicar, ni seguir, ni RTs ni Likes) porque se quiere evitar que el perfil personal del usuario se convierta en una cuenta bot e impersonal. Tan sólo se hacen unfollows con `cuchillo.py` si el usuario así lo confirma, y la lista de Twitter sobre la que trabaja `cazo.py` es privada para que el usuario filtre de forma manual qué perfiles de los recogidos en ella le interesan.

![](https://raw.githubusercontent.com/jartigag/cubiertos-para-twitter/master/logo.png)

## /índice:
- [tenedor.py](#tenedorpy)
- [cuchillo.py](#cuchillopy)
- [cazo.py](#cazopy)

## [**`tenedor.py`**](https://github.com/jartigag/cubiertos-para-twitter/blob/master/tenedor.py)
> “Comer bocado a bocado”

De un @username, extrae **métricas** generales, ratios y tops, *para después enviar un **informe por md** (#wip)*  
(basado en [tweet_analyzer (x0rz)](https://github.com/x0rz/tweets_analyzer))

```
usage: tenedor.py <screen_name> [options]

positional arguments:
  screen_name           target screen_name

optional arguments:
  -h, --help            show this help message and exit
  -g GROUP, --group GROUP
                        add the user to a group
  -l LIKES, --likes LIKES
                        limit the number of likes to retreive (default=500)
  -t TWEETS, --tweets TWEETS
                        limit the number of tweets to retreive (default=500)
```
<p align="center"><a href="https://asciinema.org/a/QTjDYRC4k4pp0ewyfLQlKTmfD" target="_blank"><img src="https://asciinema.org/a/QTjDYRC4k4pp0ewyfLQlKTmfD.png" width="50%"/></a></p>

## [**`cuchillo.py`**](https://github.com/jartigag/cubiertos-para-twitter/blob/master/cuchillo.py)
> “Separar la carne del hueso”

**Unfollow** @username si no está en whitelist, no followback y ha estado activo/inactivo por n días

```
usage: cuchillo.py [options]

optional arguments:
  -h, --help            show this help message and exit
  -c, --confirmation    ask for confirmation before each unfollow (otherwise,
                        asked before massive unfollow after listing users)
  -f FOLLOWERS, --followers FOLLOWERS
                        filter by number of followers
  -l LIKES_TWEETS_RATIO, --likes_tweets_ratio LIKES_TWEETS_RATIO
                        filter by likes/tweets ratio
  -r FOLLOWERS_FOLLOWING_RATIO, --followers_following_ratio FOLLOWERS_FOLLOWING_RATIO
                        filter by followers/following ratio
  -t TWEETS, --tweets TWEETS
                        filter by number of tweets
  -d TWEETS_DAY_AVERAGE, --tweets_day_average TWEETS_DAY_AVERAGE
                        filter by tweets/day average
  -p RETWEETS_PERCENT, --retweets_percent RETWEETS_PERCENT
                        filter by retweets percent
  -a N_DAYS, --active N_DAYS
                        unfollow users who have been active for < N_DAYS
  -i N_DAYS, --inactive N_DAYS
                        unfollow users who have been inactive for > N_DAYS
  -w USERNAME, --add_to_whitelist USERNAME
                        add USERNAME to whitelist
```
<p align="center"><a href="https://asciinema.org/a/IQFOlDY4RMWFdtuHWK4Pz4k7k" target="_blank"><img src="https://asciinema.org/a/IQFOlDY4RMWFdtuHWK4Pz4k7k.png" width="50%"/></a></a></p>

## [**`cazo.py`**](https://github.com/jartigag/cubiertos-para-twitter/blob/master/cazo.py)
> “Servir de la olla al plato”

**Agrega** @username de fuentes{keyword,followersoffollowers} **a lista privada** si cumple parámetros

```
usage: cazo.py [arguments (+value: >value, -value: <value)]

optional arguments:
  -h, --help            show this help message and exit
  -f FOLLOWERS, --followers FOLLOWERS
                        filter by number of followers
  -l LIKES_TWEETS_RATIO, --likes_tweets_ratio LIKES_TWEETS_RATIO
                        filter by likes/tweets ratio
  -r FOLLOWERS_FOLLOWING_RATIO, --followers_following_ratio FOLLOWERS_FOLLOWING_RATIO
                        filter by followers/following ratio
  -t TWEETS, --tweets TWEETS
                        filter by number of tweets
  -d TWEETS_DAY_AVERAGE, --tweets_day_average TWEETS_DAY_AVERAGE
                        filter by tweets/day average
  -p RETWEETS_PERCENT, --retweets_percent RETWEETS_PERCENT
                        filter by retweets percent
  -k KEYWORD, --keyword KEYWORD
                        target users by keyword
  -u USER, --user USER  target followers of user
```

<p align="center"><a href="https://asciinema.org/a/U1UdjaSvK12VPI5OkYmRF8qm7" target="_blank"><img src="https://asciinema.org/a/U1UdjaSvK12VPI5OkYmRF8qm7.png" width="50%"/></a></p>
